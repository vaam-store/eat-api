import type { MedusaRequest, MedusaResponse } from '@medusajs/framework';
import { MedusaError } from '@medusajs/framework/utils';
import { WISHLIST_MODULE } from '../../../../../modules/wishlist';
import type WishlistModuleService from '../../../../../modules/wishlist/service';

export async function GET(req: MedusaRequest, res: MedusaResponse) {
	const { id } = req.params;

	const query = req.scope.resolve('query');
	const wishlistModuleService: WishlistModuleService =
		req.scope.resolve(WISHLIST_MODULE);

	const {
		data: [product],
	} = await query.graph({
		entity: 'product',
		fields: ['variants.*'],
		filters: {
			id,
		},
	});

	if (!product) {
		throw new MedusaError(
			MedusaError.Types.NOT_FOUND,
			`Product with id: ${id} was not found`,
		);
	}

	const count = await wishlistModuleService.getWishlistsOfVariants(
		product.variants.map((v) => v.id),
	);

	res.json({
		count,
	});
}
