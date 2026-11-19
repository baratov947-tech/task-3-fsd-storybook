import { CatalogGrid } from "../../widgets/catalog-grid";
import type { Product } from "../../entities/product";

const TAVERN_PRODUCTS: Product[] = [
    {
        id: "1",
        title: "Бомбер Гроув-стрит",
        price: 120,
        badge: "УВАЖЕНИЕ +",
        image: "https://placehold.co/600x400/18181b/4ade80?text=GROVE+JACKET",
    },
    {
        id: "2",
        title: "Пистолет Desert Eagle",
        price: 850,
        badge: "АРСЕНАЛ",
        image: "https://placehold.co/600x400/18181b/f5b82e?text=AMMU-NATION",
    },
    {
        id: "3",
        title: "Тюнинг-комплект Elegy",
        price: 35000,
        badge: "АВТОМАСТЕРСКАЯ",
        image: "https://placehold.co/600x400/18181b/f5b82e?text=TRANSFENDER",
    },
    {
        id: "4",
        title: "Комбо Cluckin' Bell",
        price: 15,
        badge: "ВЫНОСЛИВОСТЬ",
        image: "https://placehold.co/600x400/18181b/4ade80?text=CLUCKIN+BELL",
    },
];

export function CatalogPage() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-6 flex items-center justify-between border-b-2 border-amber-400 pb-3">
                <div>
                    <p className="text-xs uppercase tracking-widest text-amber-400">
                        Лос-Сантос / Сан-Андреас
                    </p>
                    <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                        Уличный каталог
                    </h1>
                </div>
                <span className="text-lg font-bold text-emerald-400">$99,999,999</span>
            </div>

            <CatalogGrid products={TAVERN_PRODUCTS} />
        </section>
    );
}