FROM node:lts-alpine as base

LABEL maintainer="Stephane Segning <selastlambou@gmail.com>"
LABEL org.opencontainers.image.description="Medusa API for the Vymalo Project"

ENV MEDUSA_FF_ANALYTICS="false"
ENV MEDUSA_DISABLE_TELEMETRY="false"

#
WORKDIR /app

RUN corepack enable && corepack prepare yarn@4 --activate
RUN echo 'nodeLinker: "node-modules"' > ./.yarnrc.yml
RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock ./

# Install dependencies only when needed
FROM base AS deps

RUN yarn install --immutable

FROM deps AS api-builder

ENV DISABLE_MEDUSA_ADMIN="true"

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build:server

FROM deps AS builder-deps

ENV NODE_ENV=production

RUN yarn workspaces focus --production

FROM deps AS admin-builder

ENV NODE_ENV=production

ARG BACKEND_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build:admin

# Use the official Node.js runtime as the base image
FROM base as api

ENV NODE_ENV=production
ENV DISABLE_MEDUSA_ADMIN="true"

EXPOSE 16000

# Create non-root user
RUN addgroup -S -g 1001 nodejs && adduser -S medusa -G nodejs -u 1001

RUN mkdir -p .yarn
RUN chown -R medusa:nodejs .yarn*

# Copy files and set ownership for the non-root user
COPY --from=builder-deps --chown=medusa:nodejs /app/node_modules ./node_modules
COPY --from=api-builder --chown=medusa:nodejs /app/.medusa/server ./
COPY --from=api-builder --chown=medusa:nodejs /app/operate.sh ./
COPY --from=api-builder --chown=medusa:nodejs /app/plugins ./plugins
COPY --from=api-builder --chown=medusa:nodejs /app/emails ./emails

RUN chmod +x operate.sh

USER medusa

CMD ["/app/operate.sh"]


# Use Nginx as the production server
FROM nginx:stable-alpine as admin

LABEL maintainer="Stephane Segning <selastlambou@gmail.com>"
LABEL org.opencontainers.image.description="Admin frontend for the Vymalo Project"

# Copy the built React app to Nginx's web server directory
COPY --from=admin-builder /app/.medusa/admin /usr/share/nginx/html
COPY --from=admin-builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]