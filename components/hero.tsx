import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Imagem de fundo */}
      <Image
        src="/images/quarto01.webp"
        alt="Imagem de fundo - Ateliê Lu Oliveira"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      {/* Gradiente sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background" />
      {/* Conteúdo do Hero */}
      <div className="relative text-center space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-serif text-primary">Ateliê Lu Oliveira</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Peças únicas e artesanais em macramê para decorar com estilo e
          personalidade!
        </p>
        {/* Botão (opcional) */}
        {/*<Button
          asChild
          size="lg"
          className="bg-primary hover:bg-secondary text-primary-foreground"
        >
          <Link href="/products">Nossos Produtos</Link>
        </Button>*/}
      </div>
    </div>
  );
}
