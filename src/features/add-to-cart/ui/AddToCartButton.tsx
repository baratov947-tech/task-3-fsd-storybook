import { useState } from "react";
import { Button } from "../../../shared/ui";

interface AddToCartButtonProps {
    productId: string;
    onAdd?: (productId: string) => void;
}

export function AddToCartButton({ productId, onAdd }: AddToCartButtonProps) {
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        setAdded(true);
        onAdd?.(productId);
    };

    return (
        <Button onClick={handleClick} className="w-full">
            {added ? "Добавлено" : "В корзину"}
        </Button>
    );
}