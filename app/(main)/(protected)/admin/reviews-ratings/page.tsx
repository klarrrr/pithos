import InputTextField from "@/components/technical-components/InputTextField"
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import SearchButton from "@/components/technical-components/SearchButton"
import { Button } from "@/components/ui/button"

// TODO: It's probably for the best if the search button and the search bar are on the same component.

const page = () => {
    return (
        <div className='flex flex-col p-4 bg-background w-full gap-4'>
            <div className="flex flex-row justify-between">
                <h1 className='font-bold text-3xl'>Manage Reviews and Ratings</h1>
                <div className="flex flex-row gap-2 h-full items-center">
                    <SortBy sortOptions={[""]} />
                    <FilterBy filterOptions={[""]} />
                    <InputTextField placeholder="Search for Reviews" />
                    <SearchButton />
                </div>
            </div>
            <hr />
            <div className='flex gap-4'>
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
        </div>
    )
}

export default page
