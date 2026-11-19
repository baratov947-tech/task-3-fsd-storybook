import { ProductCard, type Product } from "../../../entities/product";
import { AddToCartButton } from "../../../features/add-to-cart";

interface CatalogGridProps {
    products: Product[];
}

export function CatalogGrid({ products }: CatalogGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    actionSlot={<AddToCartButton productId={product.id} />}
                />
            ))}
        </div>
    );
}