import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LineChart from '@/components/technical-components/LineChart'
import { ArrowUpRight, BarChart3, CreditCard, ShoppingBag } from 'lucide-react'

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-8 lg:px-10">
      
      {/* HEADER */}
      <div className="flex flex-col gap-4 pb-8 border-b">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Dashboard
            </p>
            <h1 className="text-3xl font-semibold mt-1">
              Performance Overview
            </h1>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl">
              Track your sales, engagement, and asset performance in one place.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="font-medium">
              New Project
            </Button>
            <Button size="sm" className="font-medium">
              Publish
            </Button>
          </div>
        </div>
      </div>

      {/* KPI ROW */}
      <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Total Views</p>
            <BarChart3 className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mt-3">1,240</h2>
          <p className="text-xs text-muted-foreground mt-1">+12% this week</p>
        </Card>

        <Card className="p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Downloads</p>
            <ShoppingBag className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mt-3">384</h2>
          <p className="text-xs text-muted-foreground mt-1">+9.4% growth</p>
        </Card>

        <Card className="p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Revenue</p>
            <CreditCard className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold mt-3">$2,420</h2>
          <p className="text-xs text-muted-foreground mt-1">+14.6% this week</p>
        </Card>
      </div>

      {/* MAIN SECTION */}
      <div className="grid gap-8 mt-8 lg:grid-cols-[2fr_1fr]">
        
        {/* CHART */}
        <Card className="p-6 rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Sales Overview
              </p>
              <h3 className="text-xl font-semibold mt-1">
                Earnings This Quarter
              </h3>
            </div>

            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>

          <div className="mt-6 rounded-xl border p-4 bg-background">
            <LineChart />
          </div>
        </Card>

        {/* SIDE PANEL */}
        <div className="flex flex-col gap-4">
          
          <Card className="p-6 rounded-2xl">
            <p className="text-sm text-muted-foreground">Active Project</p>
            <h3 className="text-xl font-semibold mt-2">
              Sinspire Assets
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              3D asset collection ready for sale and promotion.
            </p>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span>Status</span>
              <span className="font-medium">Published</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span>Updated</span>
              <span className="font-medium">2 days ago</span>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl">
            <p className="text-sm text-muted-foreground">Revenue Breakdown</p>
            <h3 className="text-xl font-semibold mt-2">$2,420</h3>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pending</span>
                <span>$812</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Paid</span>
                <span>$1,608</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm border-t pt-4">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="h-4 w-4" />
                Weekly Growth
              </div>
              <span className="font-medium">+14.6%</span>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default SellerDashboard