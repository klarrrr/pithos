import SearchBar from "@/components/technical-components/SearchBar"
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import SearchButton from "@/components/technical-components/SearchButton"
import CardStat from "@/components/technical-components/CardStat"
import { CircleDollarSign, PiggyBank, Clock, CalendarSync } from "lucide-react"
import LineChart from "@/components/technical-components/LineChart"
import Link from "next/link"


// TODO: It's probably for the best if the search button and the search bar are on the same component.

const page = () => {
  const iconSize = 32
  return (
    <div className='flex flex-col p-4 bg-background w-full gap-4 h-full justify-between'> 
      <div className="flex flex-col bg-background w-full gap-4">
        <div className="flex flex-row justify-between">
          <h1 className='font-bold text-3xl'>Manage Orders</h1>
          <div className="flex flex-row gap-2 h-full items-center">
            <SortBy sortOptions={[""]}/>
            <FilterBy filterOptions={[""]}/>
            <SearchBar placeholder="Search for users"/>
            <SearchButton />
          </div>
        </div>
        <hr />
        {/* Content */}
        <div className='flex flex-col gap-4'>
            <div className="flex flex-row gap-4">
              {/* Card Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/6">
                <CardStat header="₱67,000.00" subHeader="Monthly Earnings" icon={<CircleDollarSign size={iconSize} color="background" />}/>
                <CardStat header="₱19,500.00" subHeader="Pending Balance" icon={<PiggyBank size={iconSize} color="background" />}/>
                <CardStat header="₱1,142,850.00" subHeader="Lifetime Revenue" icon={<Clock size={iconSize} color="background" />}/>
                <CardStat header="₱13,650.00" subHeader="This Month’s Payout" icon={<CalendarSync size={iconSize} color="background" />}/>
              </div>
              {/* Chart */}
              <div className="h-full w-3/6 bg-primary-foreground p-4 rounded-lg border border-muted">
                <LineChart/>
              </div>
            </div>

            {/* Table */}
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
          </div>
        </div>
        <p className="text-muted-foreground self-center"><i>Pithos has a commission percentage of 30/70, wheareas the 30% of the assets revenue goes to Pithos, and the rest (70%) goes to the asset sellers.</i> <Link href="" className="text-medium text-accent">Learn More</Link></p>
    </div>
  )
}

export default page