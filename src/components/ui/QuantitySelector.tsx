"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({ initialQuantity = 1, min = 1, max = 99, onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    if (quantity < max) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  return (
    <div className="flex items-center flex-row w-fit border rounded-full">
      <button className="rounded-tl-full rounded-bl-full px-8 py-4 rounded-l-full border" onClick={handleDecrease}>
        -
      </button>
      <span className="px-8 py-4 border">{quantity}</span>
      <button className="rounded-tr-full rounded-br-full px-8 py-4 rounded-r-full border" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
