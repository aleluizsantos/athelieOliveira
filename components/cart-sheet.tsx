"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function CartSheet() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-4">Carrinho de Compras</h2>
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Seu carrinho está vazio!</p>
        ) : (
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      R${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 ml-auto"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>R${total.toFixed(2)}</span>
        </div>
        <Button
          className="w-full"
          disabled={cart.length === 0}
          onClick={handleCheckout}
        >
          Ir para Pagamento
        </Button>
      </div>
    </div>
  );
}
