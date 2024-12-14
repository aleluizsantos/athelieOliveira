"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Product } from "@/lib/types";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart");
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">
          R$ {product.price.toFixed(2)}
        </p>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-secondary text-primary-foreground"
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
}
