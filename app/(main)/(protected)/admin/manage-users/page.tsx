"use client";

import InputTextField from "@/components/technical-components/InputTextField"
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import SearchButton from "@/components/technical-components/SearchButton"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@deemlol/next-icons";
import Tabs from "@/components/ui/tabs";
import { JSX } from "react";
import { createClient } from "@/lib/supabase/client";
import { DataTable } from "@/components/technical-components/DataTable";
import { useDataTable } from "@/app/hooks/useDataTable";
import { Suspense } from "react";

// TODO: It's probably for the best if the search button and the search bar are on the same component.

// const supabase = createClient();

type User = {
    id: string
    created_at: string
    user_email: string
    user_role: string
    login_attempt: number
    is_locked: boolean
    user_fullname: string
}

const page = () => {
    
    // States
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isTableHidden, setIsTableHidden] = useState(false);

    // const fetchUsers = async () => {
    //     setLoading(true);
    //     const { data, error } = await supabase
    //         .from('users')
    //         .select('id, created_at, user_email, user_role, login_attempts, is_locked, user_fullname');

    //     if (error) {
    //         console.error("Error fetching users:", error);
    //         return;
    //     }

    //     console.log("Fetched Users:", data);
    //     setUsers(data || []);
    //     setLoading(false);
    // };

    // // Get user details on page load 
    // useEffect(()=>{
    //     fetchUsers();
    // }, []);

    const table = useDataTable("users")

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };
    

    // Tabs to cycle between in buyers
    const buyer_items: JSX.Element[] = [

        // Table
        <div className="w-full min-h-0 overflow-auto">
            {/* Transactions */}
            <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
                <div className="overflow-x-auto">
                    <table className=" min-w-full *:*:*:border *:*:*:border-muted *:*:*:p-4 w-full bg-primary-foreground" border={1}>
                        <thead>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <th>Transaction ID</th>
                                <th>Buyer ID</th>
                                <th>Product ID</th>
                                <th>Created At</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>129616 182736 1293</td>
                                <td>98547 1086 95816</td>
                                <td>1231 98167 9817698</td>
                                <td>1-1-1977</td>
                                <td>PHP67,000.00</td>
                                <td>Active</td>
                                <td>
                                    {/* TODO : onclick dapat mapupunta sa detailed transactions or just plain [ EDIT / DELETE / ARCHIVE ] */}
                                    <Button variant={'default'} onClick={() => { }}>
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>129616 182736 1293</td>
                                <td>98547 1086 95816</td>
                                <td>1231 98167 9817698</td>
                                <td>1-1-1977</td>
                                <td>PHP67,000.00</td>
                                <td>Active</td>
                                <td>
                                    {/* TODO : onclick dapat mapupunta sa detailed transactions or just plain [ EDIT / DELETE / ARCHIVE ] */}
                                    <Button variant={'default'} onClick={() => { }}>
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>,

        // Reviews
        <div className="w-full">
            <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
                <table className="*:*:*:border *:*:*:border-muted *:*:*:p-4 w-full bg-primary-foreground" border={1}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="" id="" /></th>
                            <th>Product UUID</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Date & Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>#123-456-789</td>
                            <td>★★★★★</td>
                            <td className="max-w-[500px]"><p className="line-clamp-2">
                                Check out my store for cheap keys click here nowwwwwwwwwwwwwwwwwww Check out my store for cheap keys click here nowwwwwwwwwwwwwwwwwww Check out my store for cheap keys click here nowwwwwwwwwwwwwwwwwww
                            </p></td>
                            <td>3-20-2026</td>
                            <td><div className="flex flex-row gap-4 justify-center w-full">
                                <Button variant={"destructive"}>Delete</Button>
                                <Button variant={"secondary"}>Hide</Button>
                            </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    ]
    return (
        <div className='flex flex-col p-4 bg-background w-full gap-4'>
            {/* Header */}
            <div className="flex flex-row justify-between">
                <h1 className='font-bold text-3xl'>Manage Users</h1>
                <div className="flex flex-row gap-2 h-full items-center">
                    <SortBy sortOptions={[""]} />
                    <FilterBy filterOptions={[""]} />
                    <InputTextField placeholder="Search for users" />
                    <SearchButton />
                </div>
            </div>

            <hr />

            {/* Content */}
            <div className='flex gap-4 h-full'>

                {/* Users Table */}
                {/* <div className={`${isTableHidden ? 'hidden' : 'block'} w-full border border-muted rounded-lg overflow-hidden`}>
                    <div className="p-4">
                        <table className="min-w-full border-collapse *:*:*:border *:*:*:border-muted *:*:*:p-4 w-full">
                            <thead>
                                <tr className="bg-foreground text-background">
                                    <th className="w-10"><input type="checkbox" /></th>
                                    <th>UUID</th>
                                    <th>Email</th>
                                    <th>Full Name</th>
                                    <th>Role</th>
                                    <th>Join Date</th>
                                    <th>Login Attempts</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={9} className="text-center py-10 text-muted-foreground">
                                            Loading users...
                                        </td>
                                    </tr>
                                ) : users.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className="text-center py-10 text-muted-foreground">
                                            No users found.
                                        </td>
                                    </tr>
                                ) : (
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td><input type="checkbox" /></td>
                                            <td className="font-mono text-sm">{user.id}</td>
                                            <td>{user.user_email}</td>
                                            <td>{user.user_fullname || "—"}</td>
                                            <td>
                                                <span className="capitalize px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                    {user.user_role}
                                                </span>
                                            </td>
                                            <td>{formatDate(user.created_at)}</td>
                                            <td className="text-center">{user.login_attempts}</td>
                                            <td>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.is_locked
                                                        ? "text-red-600"
                                                        : "text-green-600"
                                                    }`}>
                                                    {user.is_locked ? "Locked" : "Active"}
                                                </span>
                                            </td>
                                            <td>
                                                <Button
                                                    variant={'default'}
                                                    size="sm"
                                                    onClick={() => {
                                                        // TODO: Open user detail view
                                                        setIsTableHidden(true);
                                                        console.log("Viewing user:", user);
                                                    }}
                                                >
                                                    View Details
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div> */}

                <Suspense fallback={<div>Loading...</div>}>
                    <div className={`${isTableHidden ? 'hidden' : 'block'} w-full h-full`}>
                        <DataTable<User>
                            {...table}
                            columns={[
                                {key: "id", label: "User ID", sortable: true, render: (_: any, row: any) => (
                                    <p className="font-mono text-xs">{row.id}</p>
                                )},
                                {key: "created_at", label: "Joined At", sortable: true, render: (_: any, row: any) => (
                                    <p>{formatDate(row.created_at)}</p>
                                )},
                                {key: "user_email", label: "Email", sortable: true},
                                {key: "user_role", label: "Role"},
                                {key: "login_attempts", label: "Login Attempts"},
                                {key: "is_locked", label: "Status", render: (_: any, row: any) => (
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.is_locked
                                        ? "text-red-600"
                                        : "text-green-600"
                                        }`}>
                                        {row.is_locked ? "Locked" : "Active"}
                                    </span>
                                )},
                                {key: "user_fullname", label: "Full Name", sortable: true},
                                {key: "role", label: "Actions", render: (_ : any, row : any) => (
                                    <Button
                                        variant={'default'}
                                        size="sm"
                                        onClick={() => {
                                            // TODO: open detail page depending on row.role
                                            setIsTableHidden(true);
                                        }}
                                    >
                                        View Details
                                    </Button>
                                )},
                            ]}
                        />
                    </div>
                </Suspense>

                {/* Buyer Detail Page */}
                <div className={`${isTableHidden ? 'flex' : 'hidden'} w-full flex-row gap-4`}>

                    {/* Header Details */}
                    <div className="flex flex-col gap-4 bg-primary-foreground border border-muted rounded-lg p-4 w-3/12">
                        <Button
                            variant={'red_ghost'}
                            className="w-fit"
                            onClick={() => setIsTableHidden(false)}
                        >
                            <ArrowLeft /> Go Back to Users
                        </Button>

                        <div className="w-[100px] h-[100px] bg-gray-500 rounded-md"></div>

                        <hr />

                        <div className="flex flex-col gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground">Full Name</p>
                                <p className="font-semibold">—</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Email</p>
                                <p className="font-semibold">—</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Role</p>
                                <p className="font-semibold">—</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Joined At</p>
                                <p className="font-semibold">—</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Login Attempts</p>
                                <p className="font-semibold">—</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Status</p>
                                <p className="font-semibold">—</p>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="bg-primary-foreground border border-muted rounded-lg p-4 w-9/12 relative flex-col">
                        <Tabs items={buyer_items} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page
