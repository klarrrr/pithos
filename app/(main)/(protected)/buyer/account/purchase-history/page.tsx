"use client";

import { useState } from "react";
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const page = () => {
    const [searchContent, setSearchContent] = useState("");

    const exampleSearchFunction = (data: string) => {
        alert("Searching: " + data);
    }

    return (
        <div className='flex flex-col p-4 bg-background w-full gap-4 h-full justify-between overflow-y-auto'>
            <div className="flex flex-col bg-background w-full gap-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h1 className='font-bold text-3xl'>Purchase History</h1>
                    <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-center">
                        <div className="flex items-center h-10">
                            <Input 
                                placeholder="Search orders..." 
                                className="rounded-r-none h-full w-64" 
                                value={searchContent}
                                onChange={(e) => setSearchContent(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') exampleSearchFunction(searchContent);
                                }}
                            />
                            <Button 
                                variant="red_default" 
                                className="rounded-l-none h-full" 
                                onClick={() => exampleSearchFunction(searchContent)}
                            >
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                        <SortBy sortOptions={["Date", "Amount", "Status"]} />
                        <FilterBy filterOptions={["All", "Pending", "Completed", "Refunded", "Cancelled"]} />
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-4 h-full'>

                    <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg flex-1 flex flex-col justify-between">
                        <div className="overflow-x-auto">
                            <table className="*:*:*:border *:*:*:border-muted *:*:*:p-4 w-full bg-primary-foreground" border={1}>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Order Date</th>
                                        <th>Product Name</th>
                                        <th>Payment Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ORD-6789</td>
                                        <td>2/28/2026</td>
                                        <td>Game Character Pack</td>
                                        <td>GCash</td>
                                        <td>PHP134.00</td>
                                        <td>Completed</td>
                                        <td><Link href="/buyer/account/purchase-history/ORD-6789"><Button variant="link" className="text-red-500 hover:text-red-600 px-0">View Details</Button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>ORD-6790</td>
                                        <td>2/25/2026</td>
                                        <td>Environment Asset Bundle</td>
                                        <td>PayPal</td>
                                        <td>PHP2,500.00</td>
                                        <td>Completed</td>
                                        <td><Link href="/buyer/account/purchase-history/ORD-6790"><Button variant="link" className="text-red-500 hover:text-red-600 px-0">View Details</Button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>ORD-6791</td>
                                        <td>2/20/2026</td>
                                        <td>3D Model Collection</td>
                                        <td>Credit Card</td>
                                        <td>PHP5,000.00</td>
                                        <td>Pending</td>
                                        <td><Link href="/buyer/account/purchase-history/ORD-6791"><Button variant="link" className="text-red-500 hover:text-red-600 px-0">View Details</Button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>ORD-6792</td>
                                        <td>2/15/2026</td>
                                        <td>Sound Effects Pack</td>
                                        <td>GCash</td>
                                        <td>PHP450.00</td>
                                        <td>Completed</td>
                                        <td><Link href="/buyer/account/purchase-history/ORD-6792"><Button variant="link" className="text-red-500 hover:text-red-600 px-0">View Details</Button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>ORD-6793</td>
                                        <td>2/10/2026</td>
                                        <td>UI Kit Pro</td>
                                        <td>PayPal</td>
                                        <td>PHP1,200.00</td>
                                        <td>Completed</td>
                                        <td><Link href="/buyer/account/purchase-history/ORD-6793"><Button variant="link" className="text-red-500 hover:text-red-600 px-0">View Details</Button></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-between px-2 pt-4 mt-4 border-t border-muted">
                            <p className="text-sm text-muted-foreground">Showing <span className="font-medium text-foreground">1</span> to <span className="font-medium text-foreground">5</span> of <span className="font-medium text-foreground">12</span> results</p>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="h-8 px-2" disabled>
                                    <ChevronLeft className="h-4 w-4" />
                                    <span className="sr-only">Previous Page</span>
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-accent text-accent-foreground">1</Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0">2</Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0">3</Button>
                                <Button variant="outline" size="sm" className="h-8 px-2">
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">Next Page</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
