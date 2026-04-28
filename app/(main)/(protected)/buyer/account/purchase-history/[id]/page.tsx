"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Package } from "lucide-react";
import Link from "next/link";

export default function OrderDetailsPage() {
    const params = useParams();
    const orderId = params.id as string;

    return (
        <div className='flex flex-col p-4 bg-background w-full gap-8 overflow-y-auto'> 
            <div className='flex flex-col gap-2'>
                <Link href="/buyer/account/purchase-history" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Purchase History</span>
                </Link>
                <h1 className='font-bold text-3xl'>Order Details</h1>
                <p className='text-muted-foreground'>Order ID: {orderId}</p>
            </div>
            <hr />

            <div className="flex flex-col gap-6">
                <Card className="w-full p-6 bg-primary-foreground border-muted">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-muted">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <h2 className="font-semibold text-xl">Order Status</h2>
                                <Badge variant="default" className="bg-green-600 hover:bg-green-700">Completed</Badge>
                            </div>
                            <p className="text-muted-foreground">Placed on February 28, 2026 at 2:30 PM</p>
                        </div>
                        <Button variant="red_default">
                            <Download className="w-4 h-4 mr-2" />
                            Download Invoice
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">Billing Information</h3>
                            <p className="text-muted-foreground">John Doe</p>
                            <p className="text-muted-foreground">johndoe@example.com</p>
                            <p className="text-muted-foreground">Taguig, Philippines</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">Payment Details</h3>
                            <p className="text-muted-foreground">Payment Method: GCash</p>
                            <p className="text-muted-foreground">Transaction ID: G2827364782</p>
                        </div>
                    </div>
                </Card>

                <Card className="w-full p-6 bg-primary-foreground border-muted">
                    <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Items Purchased
                    </h3>
                    
                    <div className="border border-muted rounded-lg overflow-hidden">
                        <div className="grid grid-cols-12 gap-4 p-4 bg-muted/30 font-medium text-sm">
                            <div className="col-span-6">Product</div>
                            <div className="col-span-2 text-center">Seller</div>
                            <div className="col-span-2 text-center">License</div>
                            <div className="col-span-2 text-right">Price</div>
                        </div>
                        
                        <div className="grid grid-cols-12 gap-4 p-4 items-center border-t border-muted">
                            <div className="col-span-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                                        <Package className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Game Character Pack</h4>
                                        <p className="text-muted-foreground text-sm">Digital Asset</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 text-center text-muted-foreground">Lark's Digital Assets</div>
                            <div className="col-span-2 text-center text-muted-foreground">Standard</div>
                            <div className="col-span-2 text-right font-semibold">PHP134.00</div>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-muted">
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex justify-between w-full max-w-xs text-muted-foreground">
                                <span>Subtotal</span>
                                <span>PHP134.00</span>
                            </div>
                            <div className="flex justify-between w-full max-w-xs text-muted-foreground">
                                <span>Platform Fee (30%)</span>
                                <span>PHP40.20</span>
                            </div>
                            <div className="flex justify-between w-full max-w-xl font-semibold text-lg pt-2 border-t border-muted">
                                <span>Total Paid</span>
                                <span>PHP134.00</span>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="w-full p-6 bg-primary-foreground border-muted">
                    <h3 className="font-semibold text-xl mb-4">Download Your Assets</h3>
                    <p className="text-muted-foreground mb-4">Your purchased assets are available for download below.</p>
                    <Button variant="red_default" className="w-full md:w-auto">
                        <Download className="w-4 h-4 mr-2" />
                        Download All Files (ZIP)
                    </Button>
                </Card>
            </div>
        </div>
    );
}
