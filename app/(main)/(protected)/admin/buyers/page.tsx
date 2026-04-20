import SearchBar from "@/components/technical-components/SearchBar"
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import SearchButton from "@/components/technical-components/SearchButton"
import Tabs from "@/components/ui/tabs"
import { JSX } from "react"

// TODO: It's probably for the best if the search button and the search bar are on the same component.

const page = () => {
    const items: JSX.Element[] = [
        // Table
        <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
            <table className="*:*:*:border *:*:*:border-muted *:*:*:p-4 w-full bg-primary-foreground" border={1}>
                <thead>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <th>UUID</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Join Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>129616 182736 1293</td>
                        <td>klarenzcobie99@gmail.com</td>
                        <td>Admin</td>
                        <td>1-1-1977</td>
                        <td>Active</td>
                        <td>Edit</td>
                    </tr>
                </tbody>
            </table>
        </div>,
        <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
            <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
                <table className="*:*:*:border *:*:*:border-muted *:*:*:p-4 w-full bg-primary-foreground" border={1}>
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
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>129616 182736 1293</td>
                            <td>98547 1086 95816</td>
                            <td>1231 98167 9817698</td>
                            <td>1-1-1977</td>
                            <td>PHP67,000.00</td>
                            <td>Active</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>129616 182736 1293</td>
                            <td>98547 1086 95816</td>
                            <td>1231 98167 9817698</td>
                            <td>1-1-1977</td>
                            <td>PHP67,000.00</td>
                            <td>Active</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>129616 182736 1293</td>
                            <td>98547 1086 95816</td>
                            <td>1231 98167 9817698</td>
                            <td>1-1-1977</td>
                            <td>PHP67,000.00</td>
                            <td>Active</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>129616 182736 1293</td>
                            <td>98547 1086 95816</td>
                            <td>1231 98167 9817698</td>
                            <td>1-1-1977</td>
                            <td>PHP67,000.00</td>
                            <td>Active</td>
                            <td>Edit</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="" id="" /></td>
                            <td>129616 182736 1293</td>
                            <td>98547 1086 95816</td>
                            <td>1231 98167 9817698</td>
                            <td>1-1-1977</td>
                            <td>PHP67,000.00</td>
                            <td>Active</td>
                            <td>Edit</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>,
        <div><p>BOBOBOBOOB</p></div>
    ]
    return (
        // Main
        <div className='flex flex-col p-4 bg-background w-full gap-4'>
            {/* Header */}
            <div className="flex flex-row justify-between">
                <h1 className='font-bold text-3xl'>Manage Buyers</h1>
                <div className="flex flex-row gap-2 h-full items-center">
                    <SortBy sortOptions={[""]} />
                    <FilterBy filterOptions={[""]} />
                    <SearchBar placeholder="Search for users" />
                    <SearchButton />
                </div>
            </div>

            {/* Content */}
            <div className='flex flex-col gap-4'>  
                <Tabs items={items} />
                {/* Table */}
            </div>
        </div>
    )
}

export default page
