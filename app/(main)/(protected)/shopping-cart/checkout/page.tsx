"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
    const router = useRouter();

    const handlePlaceOrder = () => {
        router.push("/shopping-cart/checkout/success");
    };

    return (
        <main className="flex flex-col gap-8 min-h-[calc(100vh-200px)] mb-8">
            <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto w-full">
                <div className="flex flex-col gap-2 mt-8 lg:mt-0">
                    <Link href="/shopping-cart">
                        <Button variant={"red_ghost"} className="self-start px-0 hover:bg-transparent">
                            <ArrowLeft size={16} className="mr-2" />
                            Go Back
                        </Button>
                    </Link>
                    <h1 className="font-bold text-4xl">Checkout</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 w-full">
                    {/* Left side: Payment Options */}
                    <Card className="p-8 flex flex-col gap-6 w-full lg:w-2/3">
                        <h2 className="font-bold text-lg uppercase">Payment Options</h2>

                        <div className="flex flex-col gap-4">
                            {/* GCash */}
                            <div 
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPayment === 'gcash' ? 'border-primary bg-muted/50' : 'border-transparent bg-muted/30 hover:bg-muted/50'}`}
                                onClick={() => setSelectedPayment('gcash')}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPayment === 'gcash' ? 'border-primary' : 'border-muted-foreground'}`}>
                                        {selectedPayment === 'gcash' && <div className="w-3 h-3 rounded-full bg-primary" />}
                                    </div>
                                    <Image src="/payment-logos/gcash.png" alt="GCash" width={60} height={20} className="object-contain" />
                                    <span className="font-semibold">GCash</span>
                                </div>
                                
                                {/* Dropdown form for GCash */}
                                {selectedPayment === 'gcash' && (
                                    <div className="mt-6 pl-9 flex flex-col gap-4">
                                        <p className="text-sm text-muted-foreground">
                                            You will be redirected to the GCash portal to securely complete your purchase.
                                        </p>
                                        <div className="mt-2">
                                            <p className="text-xs text-muted-foreground mb-2">*Required: save this payment method for future purchases?</p>
                                            <div className="flex items-center gap-4">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="save-gcash" className="w-4 h-4 text-primary" />
                                                    <span className="text-sm">Yes</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="save-gcash" className="w-4 h-4 text-primary" defaultChecked />
                                                    <span className="text-sm">No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* PayPal */}
                            <div 
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPayment === 'paypal' ? 'border-primary bg-muted/50' : 'border-transparent bg-muted/30 hover:bg-muted/50'}`}
                                onClick={() => setSelectedPayment('paypal')}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPayment === 'paypal' ? 'border-primary' : 'border-muted-foreground'}`}>
                                        {selectedPayment === 'paypal' && <div className="w-3 h-3 rounded-full bg-primary" />}
                                    </div>
                                    <Image src="/payment-logos/paypal.webp" alt="PayPal" width={60} height={20} className="object-contain" />
                                    <span className="font-semibold">PayPal</span>
                                </div>

                                {/* Dropdown form for PayPal */}
                                {selectedPayment === 'paypal' && (
                                    <div className="mt-6 pl-9 flex flex-col gap-4">
                                        <p className="text-sm text-muted-foreground">
                                            You will be redirected to the PayPal website to securely complete your purchase.
                                        </p>
                                        <div className="mt-2">
                                            <p className="text-xs text-muted-foreground mb-2">*Required: save this payment method for future purchases?</p>
                                            <div className="flex items-center gap-4">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="save-paypal" className="w-4 h-4 text-primary" />
                                                    <span className="text-sm">Yes</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="save-paypal" className="w-4 h-4 text-primary" defaultChecked />
                                                    <span className="text-sm">No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Credit/Debit Card */}
                            <div 
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPayment === 'card' ? 'border-primary bg-muted/50' : 'border-transparent bg-muted/30 hover:bg-muted/50'}`}
                                onClick={() => setSelectedPayment('card')}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPayment === 'card' ? 'border-primary' : 'border-muted-foreground'}`}>
                                        {selectedPayment === 'card' && <div className="w-3 h-3 rounded-full bg-primary" />}
                                    </div>
                                    <div className="w-12 h-8 bg-gray-400 rounded flex items-center justify-center">
                                        <div className="w-full h-2 bg-gray-500 mt-2"></div>
                                    </div>
                                    <span className="font-semibold">Credit Card / Debit Card</span>
                                </div>

                                {/* Dropdown form for Card */}
                                {selectedPayment === 'card' && (
                                    <div className="mt-6 pl-9 flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">Card Details</span>
                                            <div className="flex gap-1">
                                                <Image src="/payment-logos/visa.jpg" alt="Visa" width={30} height={20} className="object-contain" />
                                                <Image src="/payment-logos/mastercard.png" alt="Mastercard" width={30} height={20} className="object-contain" />
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col gap-4">
                                            <div>
                                                <Input placeholder="Card Number *" className="bg-background" />
                                            </div>
                                            <div>
                                                <Input placeholder="Name on Card *" className="bg-background" />
                                            </div>
                                            <div className="flex gap-4">
                                                <Input placeholder="Expiration *" className="bg-background flex-1" />
                                                <Input placeholder="CCV *" className="bg-background flex-1" />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <p className="text-xs text-muted-foreground mb-2">*Required: save this payment method for future purchases?</p>
                                            <div className="flex items-center gap-4">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="save-card" className="w-4 h-4 text-primary" />
                                                    <span className="text-sm">Yes</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="save-card" className="w-4 h-4 text-primary" defaultChecked />
                                                    <span className="text-sm">No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>

                    {/* Right side: Order Summary */}
                    <Card className="p-8 flex flex-col justify-between w-full lg:w-1/3 min-h-[400px]">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-lg uppercase">Order Summary</h2>
                            
                            <div className="flex flex-col gap-4">
                                {/* Item 1 */}
                                <div className="flex gap-4 items-center">
                                    <Image src="/sample-pics/96d4a866c211c472cbef2b19a1de1828.jpg" alt="Item" width={60} height={60} className="rounded-md object-cover aspect-square" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm line-clamp-1">Stellar Sci-Fi Pack: Male and Female Character</h3>
                                        <p className="text-xs text-muted-foreground">Lark Bolotaolo</p>
                                    </div>
                                    <span className="font-semibold text-sm">$67.00</span>
                                </div>
                                {/* Item 2 */}
                                <div className="flex gap-4 items-center">
                                    <Image src="/sample-pics/427910050_10160735009917626_224300477084609345_n.jpg" alt="Item" width={60} height={60} className="rounded-md object-cover aspect-square" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-sm line-clamp-1">Modular Anime Main Characters</h3>
                                        <p className="text-xs text-muted-foreground">Lark Bolotaolo</p>
                                    </div>
                                    <span className="font-semibold text-sm">$67.00</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t">
                                <span className="font-semibold">Total</span>
                                <span className="font-bold text-lg">$134.00</span>
                            </div>
                        </div>

                        <Button variant="red_default" className="w-full mt-8" onClick={handlePlaceOrder}>
                            Place Order
                        </Button>
                    </Card>
                </div>
            </div>
        </main>
    );
}
