import { ProductGrid } from '@/components/product-grid';
import { Hero } from '@/components/hero';
import { FeaturedProducts } from '@/components/featured-products';

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ProductGrid />
    </div>
  );
}