import type { ReactNode } from "react";
import type { Product } from "../model/types";

interface ProductCardProps {
    product: Product;
    actionSlot?: ReactNode;
}

export function ProductCard({ product, actionSlot }: ProductCardProps) {
    return (
        <article className="border-2 border-zinc-800 bg-zinc-900 text-zinc-100 overflow-hidden flex flex-col hover:border-amber-400 transition-colors">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-44 object-cover bg-zinc-800 block border-b-2 border-zinc-800"
                />
                <span className="absolute top-2 left-2 bg-black/85 text-amber-400 border border-amber-400 px-2 py-0.5 text-[11px] uppercase tracking-wider">
          {product.badge}
        </span>
            </div>

            <div className="p-4 flex flex-col flex-1 justify-between gap-4">
                <div>
                    <h3 className="font-bold text-base uppercase tracking-wide">
                        {product.title}
                    </h3>
                    <p className="text-emerald-400 text-sm font-bold mt-1">
                        ${product.price.toLocaleString("en-US")}
                    </p>
                </div>
                {actionSlot}
            </div>
        </article>
    );
}