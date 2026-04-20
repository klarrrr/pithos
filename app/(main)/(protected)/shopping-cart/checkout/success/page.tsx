import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import PithosLogo from "@/components/PithosLogo";

export default function OrderSuccessPage() {
    return (
        <main className="flex flex-col gap-8 min-h-[calc(100vh-200px)] mb-8 items-center justify-center">
            <div className="flex flex-col w-full px-4 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
                <Card className="p-12 flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto w-full">
                    {/* Logo */}
                    <div className="flex items-center justify-center mb-4">
                        <PithosLogo size={120} color="foreground" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <CheckCircle className="w-16 h-16 text-green-500" />
                        <h1 className="font-bold text-4xl">Order Placed Successfully!</h1>
                        <p className="text-muted-foreground text-lg">
                            Thank you for your purchase. Your order has been confirmed and processed.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link href="/product-listing" className="w-full sm:w-auto">
                            <Button variant="red_default" size="lg" className="w-full sm:w-auto">
                                Browse for Other Products
                            </Button>
                        </Link>
                        <Link href="/shopping-cart" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Return to Cart
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </main>
    );
}
