import CardStat from "@/components/technical-components/CardStat"
import { DiamondPercent, UserRoundPen, PackageOpen, UserRound, Eye } from "lucide-react"
import LineChart from "@/components/technical-components/LineChart"
import { Button } from "@/components/ui/button"

const page = () => {
  const iconSize = 32;
  return (
    <div className='flex flex-col p-4 bg-background w-full gap-4'> 
      <div className="flex flex-row justify-between">
        <h1 className='font-bold text-3xl'>Welcome, Username</h1>
      </div>
      <hr />
      {/* Content */}
      <div className='flex flex-col gap-4'>
         {/* Cards */}
         <div className='flex flex-row gap-4 w-full *:w-full'>
            <CardStat header="12" subHeader="Sales Today" icon={<DiamondPercent size={iconSize} color="background"/>} />
            <CardStat header="8" subHeader="Total Sellers" icon={<UserRoundPen size={iconSize} color="background"/>} />
            <CardStat header="146" subHeader="Total Products" icon={<PackageOpen size={iconSize} color="background" />} />
            <CardStat header="16" subHeader="Total Buyers" icon={<UserRound size={iconSize} color="background" />} />
         </div>
         {/* Mini-Tables */}
         <div className="w-full flex flex-row gap-4">
            {/* New Uploads */}
            <div className="bg-primary-foreground border border-muted rounded-xl p-4 w-full gap-4">
              <h2 className="font-bold text-xl">New Uploads</h2>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <p>Image</p>
                    <p>Product Name</p>
                  </div>
                  <Button variant={"red_default"}>
                    <Eye size={iconSize} />
                  </Button>
                </div>
              </div>
            </div>
            {/* New Orders */}
            <div className="bg-primary-foreground border border-muted rounded-xl p-4 w-full gap-4">
              <h2 className="font-bold text-xl">New Orders</h2>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <p>Image</p>
                    <p>Product Name</p>
                  </div>
                  <Button variant={"red_default"}>
                    <Eye size={iconSize} />
                  </Button>
                </div>
              </div>
            </div>
         </div>
         {/* Summary and Quick Links */}
         <div className="flex flex-row gap-4 w-full">
          <div className="h-full w-3/6 bg-primary-foreground p-4 rounded-lg border border-muted">
            <LineChart/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default page
