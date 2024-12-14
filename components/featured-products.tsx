"use client";

import { ProductCard } from "./product-card";
import { products } from "@/lib/products";

export function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Destaques</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
