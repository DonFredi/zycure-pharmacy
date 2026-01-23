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
    <div className="flex  justify-center gap-x-2 items-center flex-row  w-full">
      <button className="rounded-sm  w-8 h-8 flex justify-center items-center border" onClick={handleDecrease}>
        -
      </button>
      <span className="font-bold">{quantity}</span>
      <button className="rounded-sm w-8 h-8 flex justify-center items-center border" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}
