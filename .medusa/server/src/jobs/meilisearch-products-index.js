"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = meilisearchProductsIndexJob;
const utils_1 = require("@medusajs/utils");
async function meilisearchProductsIndexJob(container) {
    const productService = container.resolve('product');
    const meilisearchService = container.resolve('meilisearch');
    const products = await productService.listProducts({}, { relations: ['*'] });
    const publishedProducts = products.filter((p) => p.status === 'published');
    const deleteDocumentIds = products.filter((p) => p.status !== 'published').map((p) => p.id);
    await meilisearchService.addDocuments('products', publishedProducts, utils_1.SearchUtils.indexTypes.PRODUCTS);
    await meilisearchService.deleteDocuments('products', deleteDocumentIds);
}
exports.config = {
    name: 'meilisearch-products-index',
    schedule: '* * * * *',
    numberOfExecutions: 1,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVpbGlzZWFyY2gtcHJvZHVjdHMtaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvam9icy9tZWlsaXNlYXJjaC1wcm9kdWN0cy1pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSw4Q0FXQztBQWRELDJDQUE2QztBQUc5QixLQUFLLFVBQVUsMkJBQTJCLENBQUMsU0FBMEI7SUFDbEYsTUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNuRCxNQUFNLGtCQUFrQixHQUF1QixTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRS9FLE1BQU0sUUFBUSxHQUFHLE1BQU0sY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFNUUsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFBO0lBQzFFLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUUzRixNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsbUJBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckcsTUFBTSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUE7QUFDekUsQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFrQjtJQUNuQyxJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLGtCQUFrQixFQUFFLENBQUM7Q0FDdEIsQ0FBQSJ9