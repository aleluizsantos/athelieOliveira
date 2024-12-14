"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartSheet } from "./cart-sheet";
import { LoginDialog } from "./login-dialog";
import { useState } from "react";

export function Navbar() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-primary backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-serif text-white">
            <Image src="/images/logo.webp" alt="Logo" width={62} height={62} />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium"
            >
              Produtos
            </Link>
            <Link
              href="/about"
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium"
            >
              Sobre
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LoginDialog />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <CartSheet />
              </SheetContent>
            </Sheet>

            <Button
              variant="secondary"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t p-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium"
            >
              Produtos
            </Link>
            <Link
              href="/about"
              className="text-primary-foreground/80 hover:text-primary-foreground font-medium"
            >
              Sobre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
