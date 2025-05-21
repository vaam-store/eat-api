# Medusa

> Medusa is a digital commerce platform with a built-in framework for customization. When you install Medusa, you get a fully fledged commerce platform with all the features you need to get off the ground. However, unlike other platforms, Medusa is built with customization in mind. You don't need to build hacky workarounds that are difficult to maintain and scale. Your efforts go into building features that brings your business's vision to life.

Medusa ships with three main tools:

- A suite of Commerce Modules with core commerce functionalities, such as tracking inventory, calculating cart totals, accepting payments, managing orders, and much more.
- A framework for building custom functionalities specific to your business, product, or industry. This includes tools for introducing custom API endpoints, business logic, and data models; building workflows and automations; and integrating with third-party services.
- A customizable admin dashboard for merchants to configure and operate their store.

Medusa is for businesses and teams looking for a digital commerce platform with the tools to implement unique requirements that other platforms aren't built to support.

Businesses of all sizes can use Medusa, from small start ups to large enterprises. Also, technical teams of all sizes can build with Medusa; all it takes is a developer to manage and deploy Medusa projects.

## Docs

- [Get Started](https://docs.medusajs.com/learn/installation/index.html.md): Install a digital commerce application with Medusa.
- [Main docs](https://docs.medusajs.com/learn/index.html.md): Chapters to learn Medusa's concepts and toolings.
- [Development guides and resources](https://docs.medusajs.com/resources/index.html.md): Development guides for storefront, admin, Commerce Modules, and more.
- [Medusa UI](https://docs.medusajs.com/ui/index.html.md): A React library to build applications using Medusa's primitives and design system.
- [Admin API Reference](https://docs.medusajs.com/api/admin): List of all Admin API routes in Medusa with code snippets.
- [Store API Reference](https://docs.medusajs.com/api/store): List of all Store API Routes in Medusa with code snippets.

## Framework

- [Architecture](https://docs.medusajs.com/learn/introduction/architecture/index.html.md): Overview of Medusa's architecture.
- [Medusa Container](https://docs.medusajs.com/learn/fundamentals/medusa-container/index.html.md): The Medusa container is a registry of framework and commerce tools that's accessible across your application.
- [Modules](https://docs.medusajs.com/learn/fundamentals/modules/index.html.md): A module is a reusable package of functionalities related to a single domain or integration. Medusa comes with multiple pre-built modules for core commerce needs, such as the Cart Module that holds the data models and business logic for cart operations.
- [Module Isolation](https://docs.medusajs.com/learn/fundamentals/modules/isolation/index.html.md): Modules are isolated to ensure they can be integrated into your setup without side-effects.
- [Module Links](https://docs.medusajs.com/learn/fundamentals/module-links/index.html.md): A module link forms an association between two data models of different modules, while maintaining module isolation.
- [Link](https://docs.medusajs.com/learn/fundamentals/module-links/link/index.html.md): Link is a class with utility methods to manage links between data models.
- [Query](https://docs.medusajs.com/learn/fundamentals/module-links/query/index.html.md): Query is a tool that fetches data across modules.
- [Data Models](https://docs.medusajs.com/learn/fundamentals/data-models/index.html.md): A data model represents a table in the database. You create data models using Medusa's data modeling language (DML).
- [API Routes](https://docs.medusajs.com/learn/fundamentals/api-routes/index.html.md): An API Route is an endpoint. It exposes commerce features to external applications, such as storefronts, the admin dashboard, or third-party systems.
- [Workflows](https://docs.medusajs.com/learn/fundamentals/workflows/index.html.md): A workflow is a series of queries and actions, called steps, that complete a task.
- [Events and Subscribers](https://docs.medusajs.com/learn/fundamentals/events-and-subscribers/index.html.md): Medusa emits events when core commerce features are performed, and you can listen to and handle these events in asynchronous functions, called subscribers.
- [Scheduled Jobs](https://docs.medusajs.com/learn/fundamentals/scheduled-jobs/index.html.md): A scheduled job is an asynchronous function that the Medusa application runs at the interval you specify during the Medusa application's runtime.
- [Loaders](https://docs.medusajs.com/learn/fundamentals/modules/loaders/index.html.md): A loader is a function exported by a module. When the Medusa application starts, it executes all loaders exported by configured modules.
- [Admin Widgets](https://docs.medusajs.com/learn/fundamentals/admin/widgets/index.html.md): The Medusa Admin dashboard's pages are customizable to insert widgets of custom content in pre-defined injection zones. You create these widgets as React components that allow admin users to perform custom actions.
- [Admin UI Routes](https://docs.medusajs.com/learn/fundamentals/admin/ui-routes/index.html.md): The Medusa Admin dashboard is customizable, allowing you to add new pages, called UI routes. You create a UI route as a React component showing custom content that allow admin users to perform custom actions.

## Built-in Modules

- [Commerce Modules](https://docs.medusajs.com/resources/commerce-modules): A Commerce Module provides features for a commerce domain within its service. The Medusa application exposes these features in its API routes to clients.
- [Infrastructure Modules](https://docs.medusajs.com/resources/infrastructure-modules): An infrastructure module is a package that can be installed and used in any Medusa application. These modules allow you to choose and integrate custom services to modify your application's infrastructure.

## Tools and SDKs

- [Medusa CLI](https://docs.medusajs.com/resources/medusa-cli/index.html.md): A CLI tool to perform database operations, create admin users, and run the Medusa application.
- [create-medusa-app](https://docs.medusajs.com/resources/create-medusa-app/index.html.md): A CLI tool that creates a Medusa application.
- [Next.js Starter Storefront](https://docs.medusajs.com/resources/nextjs-starter/index.html.md): The Next.js Starter storefront provides rich commerce features and a sleek design. Developers and businesses can use it as-is or build on top of it to tailor it for the business's unique use case, design, and customer experience.
- [JS SDK](https://docs.medusajs.com/resources/js-sdk/index.html.md): Medusa's JS SDK is a library to easily send requests to your Medusa application. You can use it in your admin customizations or custom storefronts.
- [Integrations](https://docs.medusajs.com/resources/integrations/index.html.md): Medusa provides integrations out-of-the-box, such as integrations to Stripe or AWS S3, and you can also develop your own integrations.

## Guides

- [Build a Brands Module](https://docs.medusajs.com/learn/customization/custom-features/index.html.md): Customize Medusa by building a Brand Module.
- [Storefront Development](https://docs.medusajs.com/resources/storefront-development/index.html.md): Guides to build a storefront from scratch.
- [Admin Components](https://docs.medusajs.com/resources/admin-components/index.html.md): Components you can use in your admin customizations to build widgets and routes that match the Medusa Admin's design system.
- [Examples](https://docs.medusajs.com/resources/examples/index.html.md): Examples and code snippets of how to use different Medusa concepts.
- [Recipes](https://docs.medusajs.com/resources/recipes/index.html.md): Learn how to build common commerce use cases, such as marketplace and subscription-based purchases, with Medusa.
- [Deployment Guides](https://docs.medusajs.com/resources/deployment/index.html.md): Deploy to Medusa Cloud or self-host Medusa.

## API Reference

- [Admin Authentication](https://docs.medusajs.com/api/admin#authentication): Send authenticated requests as an admin user.
- [Customer Authentication](https://docs.medusajs.com/api/store#authentication): Send authenticated requests as a customer.
- [Configure HTTP Compression](https://docs.medusajs.com/api/admin#http-compression): Override Medusa's configurations for HTTP Compression in requests.
- [Select Fields and Relations](https://docs.medusajs.com/api/admin#select-fields-and-relations): Specify the fields and relations to retrieve in objects returned by an API route.
- [Query Parameter Types](https://docs.medusajs.com/api/admin#query-parameter-types): Examples of how to pass query parameters based on their data type.
- [Pagination](https://docs.medusajs.com/api/admin#pagination): Learn how to configure pagination of lists returned by API routes.
- [Publishable API Key](https://docs.medusajs.com/api/store#publishable-api-key): Pass publishable API key in requests to Store API Routes.

## API Key Module

- [API Key Features](https://docs.medusajs.com/resources/commerce-modules/api-key/index.html.md): List of features the API Key Module provides.
- [API Key Concepts](https://docs.medusajs.com/resources/commerce-modules/api-key/concepts/index.html.md): Overview of API key types, expiration, and token verification.
- [API Key Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/api-key/admin-widget-zones/index.html.md): List of zones related to the API Key Module that you can inject admin widgets to.
- [API Key Module's Service Reference](https://docs.medusajs.com/resources/references/api-key/index.html.md): Methods of the API Key Module's Service.
- [API Key Module's Data Models Reference](https://docs.medusajs.com/resources/references/api-key/models/index.html.md): Data models created by the API Key Module.

## Auth Module

- [Auth Features](https://docs.medusajs.com/resources/commerce-modules/auth#auth-features/index.html.md): List of features the Auth Module provides.
- [Auth Module Options](https://docs.medusajs.com/resources/commerce-modules/auth/module-options/index.html.md): Options to pass to the Auth Module.
- [Auth Identity and Actor Types](https://docs.medusajs.com/resources/commerce-modules/auth/auth-identity-and-actor-types/index.html.md): Auth identity represents a user registered by an authentication provider. An actor type is a type of user that can be authenticated.
- [Auth Providers](https://docs.medusajs.com/resources/commerce-modules/auth/auth-providers/index.html.md): Use Emailpass, Google, or GitHub auth providers, or create a custom auth provider.
- [Auth Flow with Module](https://docs.medusajs.com/resources/commerce-modules/auth/auth-flows/index.html.md): Build an authentication flow with the Auth Module.
- [Auth Flow with Routes](https://docs.medusajs.com/resources/commerce-modules/auth/authentication-route/index.html.md): Build an authentication flow with Medusa's authentication routes.
- [Create Actor Type](https://docs.medusajs.com/resources/commerce-modules/auth/authentication-route/index.html.md): Create a custom actor type to allow it to authenticate into Medusa.
- [Handle Password Reset Event](https://docs.medusajs.com/resources/commerce-modules/auth/reset-password/index.html.md): Handle password reset event by sending the user a notification.
- [Auth Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/auth/events/index.html.md): List of events related to the Auth Module that you can listen to in subscribers.
- [Auth Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/auth/admin-widget-zones/index.html.md): List of zones related to the Auth Module that you can inject admin widgets to.
- [Auth Module's Service Reference](https://docs.medusajs.com/resources/references/auth/index.html.md): Methods of the Auth Module's Service.
- [Auth Module's Data Models Reference](https://docs.medusajs.com/resources/references/auth/models/index.html.md): Data models created by the Auth Module.

## Cart Module

- [Cart Features](https://docs.medusajs.com/resources/commerce-modules/cart#cart-features/index.html.md): List of features the Cart Module provides.
- [Cart Concepts](https://docs.medusajs.com/resources/commerce-modules/cart/concepts/index.html.md): Overview of shipping and billing addresses, line items, and shipping methods.
- [Promotion Adjustments in Carts](https://docs.medusajs.com/resources/commerce-modules/cart/promotions/index.html.md): Apply promotions on a cart's line items and shipping methods.
- [Tax Lines in Carts](https://docs.medusajs.com/resources/commerce-modules/cart/tax-lines/index.html.md): Calculate tax lines for a cart's line items and shipping methods.
- [Extend Cart Module](https://docs.medusajs.com/resources/commerce-modules/cart/extend/index.html.md): Extend the Cart Module to add a custom property to the Cart data model.
- [Cart Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/cart/events/index.html.md): List of events related to the Cart Module that you can listen to in subscribers.
- [Cart Module's Service Reference](https://docs.medusajs.com/resources/references/cart/index.html.md): Methods of the Cart Module's Service.
- [Cart Module's Data Models Reference](https://docs.medusajs.com/resources/references/cart/models/index.html.md): Data models created by the Cart Module.

## Currency Module

- [Currency Features](https://docs.medusajs.com/resources/commerce-modules/currency/index.html.md): List of features that the Currency Module provides.
- [Currency Module's Service Reference](https://docs.medusajs.com/resources/references/currency/index.html.md): Methods of the Currency Module's Service.
- [Currency Module's Data Models Reference](https://docs.medusajs.com/resources/references/currency/models/index.html.md): Data models created by the Currency Module.

## Customer Module

- [Customer Features](https://docs.medusajs.com/resources/commerce-modules/customer/index.html.md): List of features that the Customer Module provides.
- [Customer Accounts](https://docs.medusajs.com/resources/commerce-modules/customer/customer-accounts/index.html.md): The Customer data model has a has_account property, which is a boolean that indicates whether a customer is registered. There can only be one guest customer (having has_account=false) and one registered customer (having has_account=true) with the same email.
- [Extend Customer Module](https://docs.medusajs.com/resources/commerce-modules/customer/extend/index.html.md): Extend the Customer module to add a custom property to the Customer data model.
- [Customer Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/customer/events/index.html.md): List of events related to the Customer Module that you can listen to in subscribers.
- [Customer Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/customer/admin-widget-zones/index.html.md): List of zones related to the Customer Module that you can inject admin widgets to.
- [Customer Module's Service Reference](https://docs.medusajs.com/resources/references/customer/index.html.md): Methods of the Customer Module's Service.
- [Customer Module's Data Models Reference](https://docs.medusajs.com/resources/references/customer/models/index.html.md): Data models created by the Customer Module.

## Fulfillment Module

- [Fulfillment Features](https://docs.medusajs.com/resources/commerce-modules/fulfillment/index.html.md): List of features that the Fulfillment Module provides.
- [Fulfillment Module Options](https://docs.medusajs.com/resources/commerce-modules/fulfillment/module-options/index.html.md): Options to pass to the Fulfillment Module.
- [Fulfillment Concepts](https://docs.medusajs.com/resources/commerce-modules/fulfillment/concepts/index.html.md): Overview of fulfillment sets, service zones, and shipping profiles.
- [Fulfillment Module Provider](https://docs.medusajs.com/resources/commerce-modules/fulfillment/fulfillment-provider/index.html.md): Integrate custom fulfillment providers to process fulfillments.
- [Shipping Options](https://docs.medusajs.com/resources/commerce-modules/fulfillment/shipping-option/index.html.md): A shipping option is a way of shipping an item. Each fulfillment provider provides a set of shipping options. When the customer places their order, they choose a shipping option to be used to fulfill their items.
- [Item Fulfillment](https://docs.medusajs.com/resources/commerce-modules/fulfillment/item-fulfillment/index.html.md): Overview of fulfillment processing by a fulfillment provider, creating fulfillment items.
- [Fulfillment Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/fulfillment/events/index.html.md): List of events related to the Fulfillment Module that you can listen to in subscribers.
- [Fulfillment Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/fulfillment/admin-widget-zones/index.html.md): List of zones related to the Fulfillment Module that you can inject admin widgets to.
- [Fulfillment Module's Service Reference](https://docs.medusajs.com/resources/references/fulfillment/index.html.md): Methods of the Fulfillment Module's Service.
- [Fulfillment Module's Data Models Reference](https://docs.medusajs.com/resources/references/fulfillment/models/index.html.md): Data models created by the Fulfillment Module.

## Inventory Module

- [Inventory Features](https://docs.medusajs.com/resources/commerce-modules/inventory/index.html.md): List of features that the Inventory Module provides.
- [Inventory Module in Medusa Flows](https://docs.medusajs.com/resources/commerce-modules/inventory/inventory-in-flows/index.html.md): The Inventory Module is used in Medusa flows like product-variant creation, add-to-cart, order-placement, order-fulfillment, and order-return flows.
- [Inventory Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/inventory/admin-widget-zones/index.html.md): List of zones related to the Fulfillment Module that you can inject admin widgets to.
- [Inventory Module's Service Reference](https://docs.medusajs.com/resources/references/inventory-next/index.html.md): Methods of the Fulfillment Module's Service.
- [Inventory Module's Data Models Reference](https://docs.medusajs.com/resources/references/inventory-next/models/index.html.md): Data models created by the Fulfillment Module.

## Order Module

- [Order Features](https://docs.medusajs.com/resources/commerce-modules/order/index.html.md): List of features that the Order Module provides.
- [Order Concepts](https://docs.medusajs.com/resources/commerce-modules/order/concepts/index.html.md): Overview of order items, order shipping methods, order totals, and order payments.
- [Promotions in Orders](https://docs.medusajs.com/resources/commerce-modules/order/promotion-adjustments/index.html.md): Apply promotions to an order's items and shipping methods.
- [Tax Lines in Orders](https://docs.medusajs.com/resources/commerce-modules/order/tax-lines/index.html.md): Calculate tax lines of an order's items and shipping methods.
- [Transactions](https://docs.medusajs.com/resources/commerce-modules/order/transactions/index.html.md): A transaction represents any order payment process, such as capturing or refunding an amount.
- [Order Versioning](https://docs.medusajs.com/resources/commerce-modules/order/order-versioning/index.html.md): Versioning means assigning a version number to a record, such as an order and its items. This is useful to view the different versions of the order following changes in its lifetime.
- [Order Return](https://docs.medusajs.com/resources/commerce-modules/order/return/index.html.md): A return is the return of items delivered from the customer back to the merchant.
- [Order Exchange](https://docs.medusajs.com/resources/commerce-modules/order/exchange/index.html.md): An exchange is the replacement of an item that the customer ordered with another.
- [Order Claim](https://docs.medusajs.com/resources/commerce-modules/order/claim/index.html.md): When a customer receives a defective or incorrect item, the merchant can create a claim to refund or replace the item.
- [Order Edit](https://docs.medusajs.com/resources/commerce-modules/order/edit/index.html.md): A merchant can edit an order to add new items or change the quantity of existing items in the order.
- [Order Change](https://docs.medusajs.com/resources/commerce-modules/order/order-change/index.html.md): An order change represents any kind of change to an order, such as a return, exchange, or edit.
- [Order Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/order/events/index.html.md): List of events related to the Order Module that you can listen to in subscribers.
- [Order Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/order/admin-widget-zones/index.html.md): List of zones related to the Order Module that you can inject admin widgets to.
- [Order Module's Service Reference](https://docs.medusajs.com/resources/references/order/index.html.md): Methods of the Order Module's Service.
- [Order Module's Data Models Reference](https://docs.medusajs.com/resources/references/order/models/index.html.md): Data models created by the Order Module.

## Payment Module

- [Payment Features](https://docs.medusajs.com/resources/commerce-modules/payment#payment-features/index.html.md): List of features that the Payment Module provides.
- [Payment Collection](https://docs.medusajs.com/resources/commerce-modules/payment/payment-collection/index.html.md): A payment collection stores payment details related to a resource, such as a cart or an order.
- [Payment Session](https://docs.medusajs.com/resources/commerce-modules/payment/payment-session/index.html.md): A payment session is a payment amount to be authorized. It’s associated with a payment provider that handles authorizing it.
- [Payment](https://docs.medusajs.com/resources/commerce-modules/payment/payment/index.html.md): When a payment session is authorized, a payment is created. This payment can later be captured or refunded.
- [Payment Providers](https://docs.medusajs.com/resources/commerce-modules/payment/payment-provider/index.html.md): Use Stripe for payment processing, or integrate custom payment providers.
- [Webhook Events](https://docs.medusajs.com/resources/commerce-modules/payment/webhook-events/index.html.md): A webhook event is sent from a third-party payment provider to your application. It indicates a change in a payment’s status.
- [Accept Payment Flow](https://docs.medusajs.com/resources/commerce-modules/payment/payment-flow/index.html.md): The steps to accept payment using the Payment Module.
- [Payment Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/payment/events/index.html.md): List of events related to the Payment Module that you can listen to in subscribers.
- [Payment Module's Service Reference](https://docs.medusajs.com/resources/references/payment/index.html.md): Methods of the Payment Module's Service.
- [Payment Module's Data Models Reference](https://docs.medusajs.com/resources/references/payment/models/index.html.md): Data models created by the Payment Module.

## Pricing Module

- [Pricing Features](https://docs.medusajs.com/resources/commerce-modules/pricing/index.html.md): List of features that the Pricing Module provides.
- [Pricing Concepts](https://docs.medusajs.com/resources/commerce-modules/pricing/concepts/index.html.md): Overview of price sets and price lists.
- [Price Rules](https://docs.medusajs.com/resources/commerce-modules/pricing/price-rules/index.html.md): Price rules allow you to restrict prices by rules, such as the cart's zip code.
- [Prices Calculation](https://docs.medusajs.com/resources/commerce-modules/pricing/price-calculation/index.html.md): The Price Module's calculatePrices method returns the best-matching price for a provided context.
- [Tax-Inclusive Pricing](https://docs.medusajs.com/resources/commerce-modules/pricing/tax-inclusive-pricing/index.html.md): A tax-inclusive price is a price of a resource that includes taxes. Medusa calculates the tax amount from the price rather than adds the amount to it.
- [Pricing Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/pricing/admin-widget-zones/index.html.md): List of zones related to the Pricing Module that you can inject admin widgets to.
- [Pricing Module's Service Reference](https://docs.medusajs.com/resources/references/pricing/index.html.md): Methods of the Pricing Module's Service.
- [Pricing Module's Data Models Reference](https://docs.medusajs.com/resources/references/pricing/models/index.html.md): Data models created by the Pricing Module.

## Product Module

- [Product Features](https://docs.medusajs.com/resources/commerce-modules/product/index.html.md): List of features that the Product Module provides.
- [Extend Product Module](https://docs.medusajs.com/resources/commerce-modules/product/extend/index.html.md): Extend the Product module to add a custom property to the Product data model.
- [Get Product Variant Prices using Query](https://docs.medusajs.com/resources/commerce-modules/product/guides/price/index.html.md): Use Query to retrieve the price of a product variant.
- [Calculate Product Variant Price with Taxes](https://docs.medusajs.com/resources/commerce-modules/product/guides/price-with-taxes/index.html.md): Retrieve a product variant's price with taxes.
- [Product Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/product/events/index.html.md): List of events related to the Product Module that you can listen to in subscribers.
- [Product Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/product/admin-widget-zones/index.html.md): List of zones related to the Product Module that you can inject admin widgets to.
- [Product Module's Service Reference](https://docs.medusajs.com/resources/references/product/index.html.md): Methods of the Product Module's Service.
- [Product Module's Data Models Reference](https://docs.medusajs.com/resources/references/product/models/index.html.md): Data models created by the Product Module.

## Promotion Module

- [Promotion Features](https://docs.medusajs.com/resources/commerce-modules/promotion/index.html.md): List of features that the Promotion Module provides.
- [Promotion Concepts](https://docs.medusajs.com/resources/commerce-modules/promotion/concepts/index.html.md): Overview of promotions and promotion rules.
- [Application Method](https://docs.medusajs.com/resources/commerce-modules/promotion/application-method/index.html.md): An application method defines how a promotion is applied.
- [Campaign](https://docs.medusajs.com/resources/commerce-modules/promotion/campaign/index.html.md): A Campaign combines promotions under the same conditions, such as start and end dates.
- [Promotion Actions](https://docs.medusajs.com/resources/commerce-modules/promotion/actions/index.html.md): Actions inform you what adjustment must be made to a cart item or shipping method. Each action is an object having the action property indicating the type of action.
- [Extend Promotion Module](https://docs.medusajs.com/resources/commerce-modules/promotion/extend/index.html.md): Extend the Promotion module to add a custom property to the Promotion data model.
- [Promotion Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/promotion/admin-widget-zones/index.html.md): List of zones related to the Promotion Module that you can inject admin widgets to.
- [Promotion Module's Service Reference](https://docs.medusajs.com/resources/references/promotion/index.html.md): Methods of the Promotion Module's Service.
- [Promotion Module's Data Models Reference](https://docs.medusajs.com/resources/references/promotion/models/index.html.md): Data models created by the Promotion Module.

## Region Module

- [Region Features](https://docs.medusajs.com/resources/commerce-modules/region/index.html.md): List of features that the Region Module provides.
- [Region Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/region/events/index.html.md): List of events related to the Region Module that you can listen to in subscribers.
- [Region Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/region/admin-widget-zones/index.html.md): List of zones related to the Region Module that you can inject admin widgets to.
- [Region Module's Service Reference](https://docs.medusajs.com/resources/references/region/index.html.md): Methods of the Region Module's Service.
- [Region Module's Data Models Reference](https://docs.medusajs.com/resources/references/region/models/index.html.md): Data models created by the Region Module.

## Sales Channel Module

- [Sales Channel Features](https://docs.medusajs.com/resources/commerce-modules/sales-channel/index.html.md): List of features that the Sales Channel Module provides.
- [Publishable API Keys with Sales Channels](https://docs.medusajs.com/resources/commerce-modules/sales-channel/publishable-api-keys/index.html.md): A publishable API key, provided by the API Key Module, is a client key scoped to one or more sales channels.
- [Sales Channel Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/sales-channel/events/index.html.md): List of events related to the Sales Channel Module that you can listen to in subscribers.
- [Sales Channel Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/sales-channel/admin-widget-zones/index.html.md): List of zones related to the Sales Channel Module that you can inject admin widgets to.
- [Sales Channel Module's Service Reference](https://docs.medusajs.com/resources/references/sales-channel/index.html.md): Methods of the Sales Channel Module's Service.
- [Sales Channel Module's Data Models Reference](https://docs.medusajs.com/resources/references/sales-channel/models/index.html.md): Data models created by the Sales Channel Module.

## Stock Location Module

- [Stock Location Features](https://docs.medusajs.com/resources/commerce-modules/stock-location/index.html.md): List of stock locations that the Stock Location Module provides.
- [Stock Location Concepts](https://docs.medusajs.com/resources/commerce-modules/stock-location/concepts/index.html.md): Overview of stock locations and addresses.
- [Stock Location Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/stock-location/admin-widget-zones/index.html.md): List of zones related to the Stock Location Module that you can inject admin widgets to.
- [Stock Location Module's Service Reference](https://docs.medusajs.com/resources/references/stock-location-next/index.html.md): Methods of the Stock Location Module's Service.
- [Stock Location Module's Data Models Reference](https://docs.medusajs.com/resources/references/stock-location-next/models/index.html.md): Data models created by the Stock Location Module.

## Store Module

- [Store Features](https://docs.medusajs.com/resources/commerce-modules/store/index.html.md): List of features that the Store Module provides.
- [Store Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/store/admin-widget-zones): List of zones related to the Store Module that you can inject admin widgets to.
- [Store Module's Service Reference](https://docs.medusajs.com/resources/references/store/index.html.md): Methods of the Store Module's Service.
- [Store Module's Data Models Reference](https://docs.medusajs.com/resources/references/store/models/index.html.md): Data models created by the Store Module.

## Tax Module

- [Tax Features](https://docs.medusajs.com/resources/commerce-modules/tax/index.html.md): List of features that the Tax Module provides.
- [Tax Module Options](https://docs.medusajs.com/resources/commerce-modules/tax/module-options/index.html.md): Options you can pass to the Tax Module.
- [Tax Region](https://docs.medusajs.com/resources/commerce-modules/tax/tax-region/index.html.md): A tax region stores tax settings related to a region that your store serves.
- [Tax Rates and Rules](https://docs.medusajs.com/resources/commerce-modules/tax/tax-rates-and-rules/index.html.md): A tax rate is a percentage amount used to calculate the tax amount for each taxable item’s price, such as line items or shipping methods, in a cart. You can create tax rates that override the default for specific conditions or rules.
- [Tax Calculation with Tax Providers](https://docs.medusajs.com/resources/commerce-modules/tax/tax-calculation-with-provider/index.html.md): Tax lines are calculated and retrieved using the getTaxLines method of the Tax Module’s main service, which are retrieved from the underlying tax provider.
- [Tax Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/tax/admin-widget-zones/index.html.md): List of zones related to the Tax Module that you can inject admin widgets to.
- [Tax Module's Service Reference](https://docs.medusajs.com/resources/references/tax/index.html.md): Methods of the Tax Module's Service.
- [Tax Module's Data Models Reference](https://docs.medusajs.com/resources/references/tax/models/index.html.md): Data models created by the Tax Module.

## User Module

- [User Features](https://docs.medusajs.com/resources/commerce-modules/user/index.html.md): List of features that the User Module provides.
- [User Module Options](https://docs.medusajs.com/resources/commerce-modules/user/module-options/index.html.md): Options you can pass to the User Module.
- [User Creation Flows](https://docs.medusajs.com/resources/commerce-modules/user/user-creation-flows/index.html.md): Create and invite users with the User Module's service.
- [User Module Events Reference](https://docs.medusajs.com/resources/commerce-modules/user/events/index.html.md): List of events related to the OUserder Module that you can listen to in subscribers.
- [User Module's Admin Widget Injection Zones](https://docs.medusajs.com/resources/commerce-modules/user/admin-widget-zones/index.html.md): List of zones related to the User Module that you can inject admin widgets to.
- [User Module's Service Reference](https://docs.medusajs.com/resources/references/user/index.html.md): Methods of the User Module's Service.
- [User Module's Data Models Reference](https://docs.medusajs.com/resources/references/user/models/index.html.md): Data models created by the User Module.

## Infrastructure Modules

- [Cache Modules](https://docs.medusajs.com/resources/infrastructure-modules/cache/index.html.md): A Cache Module is used to cache the results of computations such as price selection or various tax calculations.
- [Event Modules](https://docs.medusajs.com/resources/infrastructure-modules/event/index.html.md): An Event Module implements the underlying publish/subscribe system that handles queueing events, emitting them, and executing their subscribers.
- [File Module Providers](https://docs.medusajs.com/resources/infrastructure-modules/file/index.html.md): A file module provider implements the underlying logic of handling uploads and downloads of assets, such as integrating third-party services. The File Module must have one file module provider configured.
- [Notification Module Provider](https://docs.medusajs.com/resources/infrastructure-modules/notification/index.html.md): A notification module provider implements the underlying logic of sending notification. It either integrates a third-party service or uses custom logic to send the notification.
- [Workflow Engine Modules](https://docs.medusajs.com/resources/infrastructure-modules/workflow-engine/index.html.md): Workflow engine modules handle tracking and recording the transactions and statuses of workflows and their steps.

## Optional

- [Medusa Configurations](https://docs.medusajs.com/resources/references/medusa-config/index.html.md): Configure the Medusa application for your use case.
- [Troubleshooting Guides](https://docs.medusajs.com/resources/troubleshooting/index.html.md): Find solutions for common problems you face during your development.
- [Admin Widget Injection Zones](https://docs.medusajs.com/resources/admin-widget-injection-zones/index.html.md): List of zones you can inject admin widgets into.
- [Medusa Container Resources](https://docs.medusajs.com/resources/medusa-container-resources/index.html.md): List of resources or dependencies you can resolve from the Medusa container.
- [Events List](https://docs.medusajs.com/resources/references/events/index.html.md): List of events you can listen to in a subscriber.
- [Workflows SDK Reference](https://docs.medusajs.com/resources/references/workflows/index.html.md): A reference to the SDK to create workflows in your Medusa application.
- [DML Reference](https://docs.medusajs.com/resources/references/data-model/index.html.md): A reference to Medusa's data-modeling language.
- [Service Factory Reference](https://docs.medusajs.com/resources/service-factory-reference/index.html.md): A reference to the methods generated by the service factory.
- [Helper Steps Reference](https://docs.medusajs.com/resources/references/helper-steps/index.html.md): A reference to the helper steps you can use in your custom workflows.
- [Core Workflows Reference](https://docs.medusajs.com/resources/medusa-workflows-reference/index.html.md): A reference to all workflows and steps provided by Medusa.
- [Testing Framework Reference](https://docs.medusajs.com/resources/test-tools-reference/index.html.md): A reference to Medusa's testing framework toolkit.
