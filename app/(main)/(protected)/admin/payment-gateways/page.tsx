import InputTextField from "@/components/technical-components/InputTextField"
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import SearchButton from "@/components/technical-components/SearchButton"
import ExtendedCardStat from "@/components/technical-components/ExtendedCardStat"
import MiniCard from "@/components/technical-components/Modals/MiniCard"

const page = () => {
    const iconSize = 32
    return (
        <div className='flex flex-col p-4 bg-background w-full gap-4 h-full'>
            <div className="flex flex-col bg-background w-full gap-4">
                <div className="flex flex-row justify-between">
                    <h1 className='font-bold text-3xl'>Payment Gateways</h1>
                    <div className="flex flex-row gap-2 h-full items-center">
                        <SortBy sortOptions={[""]} />
                        <FilterBy filterOptions={[""]} />
                        <InputTextField placeholder="Search for users" />
                        <SearchButton />
                    </div>
                </div>
                <hr />
                {/* Content */}
                <div className='flex flex-col gap-4'>
                    {/* Cards */}
                    <div className="flex flex-row gap-4 w-full">
                        <ExtendedCardStat header="PayPal" subHeader="Ping 2s Ago" icon={
                            <svg className="fill-background" width={iconSize} height={iconSize} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>PayPal</title>
                                <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" />
                            </svg>}
                            miniCards={
                                [
                                    <MiniCard title="Balance" header="₱67,000.00" key={1} />,
                                    <MiniCard title="Success Rate" header="67.67%" key={2} />,
                                    <MiniCard title="Today’s TX" header="67" key={3} />,
                                ]
                            }
                        />
                        <ExtendedCardStat header="PayPal" subHeader="Ping 2s Ago" icon={
                            <svg className="fill-background" width={iconSize} height={iconSize} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>PayPal</title>
                                <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" />
                            </svg>}
                            miniCards={
                                [
                                    <MiniCard title="Balance" header="₱67,000.00" key={1} />,
                                    <MiniCard title="Success Rate" header="67.67%" key={2} />,
                                    <MiniCard title="Today’s TX" header="67" key={3} />,
                                ]
                            }
                        />
                    </div>

                    {/* Table */}
                    <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
                        <table className="*:*:*:border *:*:*:border-muted *:*:*:p-4 w-full bg-primary-foreground" border={1}>
                            <thead>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <th>TXN ID</th>
                                    <th>Buyer ID</th>
                                    <th>Seller ID</th>
                                    <th>Amount</th>
                                    <th>Gateway</th>
                                    <th>Status</th>
                                    <th>Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>#123-456-789</td>
                                    <td>k(dot)com</td>
                                    <td>baldo64</td>
                                    <td>₱3,500.00</td>
                                    <td>GCash</td>
                                    <td className="text-success">Completed</td>
                                    <td>2-22-26 - 2:41 PM</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>#123-456-789</td>
                                    <td>k(dot)com</td>
                                    <td>baldo64</td>
                                    <td>₱3,500.00</td>
                                    <td>GCash</td>
                                    <td className="">Pending</td>
                                    <td>2-22-26 - 2:41 PM</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>#123-456-789</td>
                                    <td>k(dot)com</td>
                                    <td>baldo64</td>
                                    <td>₱3,500.00</td>
                                    <td>GCash</td>
                                    <td className="text-destructive">Failed</td>
                                    <td>2-22-26 - 2:41 PM</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>#123-456-789</td>
                                    <td>k(dot)com</td>
                                    <td>baldo64</td>
                                    <td>₱3,500.00</td>
                                    <td>GCash</td>
                                    <td className="text-success">Completed</td>
                                    <td>2-22-26 - 2:41 PM</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>#123-456-789</td>
                                    <td>k(dot)com</td>
                                    <td>baldo64</td>
                                    <td>₱3,500.00</td>
                                    <td>GCash</td>
                                    <td className="">Pending</td>
                                    <td>2-22-26 - 2:41 PM</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>#123-456-789</td>
                                    <td>k(dot)com</td>
                                    <td>baldo64</td>
                                    <td>₱3,500.00</td>
                                    <td>GCash</td>
                                    <td className="text-destructive">Failed</td>
                                    <td>2-22-26 - 2:41 PM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page