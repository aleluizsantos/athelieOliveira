import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Leaf, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1617791160505-6f00504e3519"
          alt="Macramé Workshop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w[100%] px-4">
            <h1 className="text-base md:text-5xl font-serif text-white mb-4">
              Nossa História
            </h1>
            <p className="text-sm text-white/90 text-justify">
              O Ateliê Luciana Oliveira nasceu há mais de 4 anos do amor pela
              arte e pelo desejo de transformar espaços com peças únicas e
              cheias de personalidade. Inspirada pela delicadeza do macramê,
              Luciana começou a explorar essa técnica artesanal como um hobby,
              mas rapidamente percebeu o impacto emocional que suas criações
              causavam nas pessoas. Com dedicação, criatividade e atenção aos
              detalhes, o Ateliê foi ganhando espaço, conquistando clientes que
              buscavam algo especial para decorar seus lares ou presentear
              pessoas queridas. Cada nó, cada padrão e cada peça é feita à mão,
              com carinho e um toque autoral, refletindo a essência de quem
              escolhe o Ateliê. Hoje, o Ateliê Luciana Oliveira é reconhecido
              por criar itens personalizados que transformam ambientes e contam
              histórias. De painéis de parede a suportes para plantas, cada peça
              é um convite a trazer mais aconchego, beleza e exclusividade para
              sua casa. Enviando para todo o Brasil, o Ateliê continua crescendo
              com o compromisso de unir técnica tradicional, inovação e o desejo
              de criar algo especial para cada cliente. "Transformamos fios em
              arte e lares em lugares ainda mais únicos."
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-primary mb-6">Missão</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No Ateliê Lu Oliveira, nossa missão é celebrar e preservar a arte do
            macramê, criando peças que combinam tradição e modernidade. Nosso
            propósito é transformar fios em arte, trazendo beleza, aconchego e
            exclusividade para os lares dos nossos clientes. Cada criação é uma
            homenagem à essência do trabalho manual e ao carinho que cada peça
            carrega.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-primary text-center mb-12">
            Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-4">Feito com Amor</h3>
              <p className="text-muted-foreground">
                Cada nó é cuidadosamente amarrado, refletindo dedicação e
                atenção aos detalhes, garantindo que todas as peças sejam únicas
                e especiais.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-4">Sustentabilidade</h3>
              <p className="text-muted-foreground">
                Usamos materiais de alta qualidade e eco-friendly, promovendo a
                harmonia entre beleza, durabilidade e respeito ao meio ambiente.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-4">
                Inspiração e Criatividade
              </h3>
              <p className="text-muted-foreground">
                Valorizamos a inovação e o design autoral, criando peças que
                inspiram e transformam ambientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa"
              alt="Macramé Artist at Work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-primary">
              Luciana Oliveira
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              é a mente criativa por trás do Ateliê Lu Oliveira, onde transforma
              sua paixão pelo macramê em peças únicas e cheias de significado.
              Sua jornada começou com um profundo apreço pela arte artesanal,
              que rapidamente evoluiu para um compromisso de unir tradição e
              design contemporâneo. Cada peça criada por Luciana carrega
              dedicação, carinho e excelência, refletindo sua crença de que o
              artesanato tem o poder de transformar ambientes e conectar
              pessoas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com mais de 4 anos de experiência, Luciana tornou-se uma
              referência no universo do macramê, criando não apenas itens
              decorativos, mas também histórias e emoções. Seu ateliê é um
              espaço de criatividade, onde técnicas tradicionais encontram
              inovação para entregar peças que personalizam e inspiram os lares
              de seus clientes.
            </p>
            <Button asChild className="bg-primary hover:bg-secondary">
              <Link href="/products">Veja a sua coleção</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Entre em contato</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Interessado em peças personalizadas ou tem dúvidas sobre nossos
            produtos? Adoraríamos ouvir de você.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-background text-primary hover:bg-accent"
          >
            <Link href="/contact">Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
