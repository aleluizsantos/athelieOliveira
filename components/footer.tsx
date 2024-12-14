import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-lg mb-4">
              <Link href="/" className="text-2xl font-serif text-white">
                <Image
                  src="/images/logo.webp"
                  alt="Logo"
                  width={62}
                  height={62}
                />
              </Link>
            </div>
            <p className="text-primary-foreground/80">
              Peças únicas e artesanais em macramê para decorar com estilo e
              personalidade!
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Atendimento ao Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link
                  href="/care"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Políticas de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-4">Siga nos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/atelie.luoliveira"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Ateliê Lu Oliveira . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
