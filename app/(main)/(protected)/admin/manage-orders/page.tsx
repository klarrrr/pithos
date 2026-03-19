import SearchBar from "@/components/technical-components/SearchBar"
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import SearchButton from "@/components/technical-components/SearchButton"
import CardStat from "@/components/technical-components/CardStat"
import { CircleDollarSign } from "lucide-react"
import { ChartBarStacked } from "lucide-react"

// TODO: It's probably for the best if the search button and the search bar are on the same component.

const page = () => {
  return (
    <div className='flex flex-col p-8 bg-background w-full gap-4'> 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CardStat header="₱67,000.00" subHeader="Monthly Earnings" icon={<CircleDollarSign size={24} color="background" />}/>
              <CardStat header="₱67,000.00" subHeader="Monthly Earnings" icon={<CircleDollarSign size={24} color="background" />}/>
              <CardStat header="₱67,000.00" subHeader="Monthly Earnings" icon={<CircleDollarSign size={24} color="background" />}/>
              <CardStat header="₱67,000.00" subHeader="Monthly Earnings" icon={<CircleDollarSign size={24} color="background" />}/>
            </div>
            {/* Chart */}
            <div>
              <ChartBarStacked/>
            </div>
          </div>

          {/* Table */}
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
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default page