import { Button } from "@/components/ui/button"
import { PackagePlus } from "lucide-react"
import ConfigureSmallBanner from "@/components/banner-announcements/ConfigureSmallBanner"
import ConfigureBigBanner from "@/components/banner-announcements/ConfigureBigBanner"

const page = () => {
  const iconSize = 32
  return (
    <div className='flex flex-col p-4 bg-background w-full gap-4 h-full'> 
      <div className="flex flex-row justify-between">
          <h1 className='font-bold text-3xl'>Edit Site Content</h1>
          <div className="">
          <Button variant={"red_default"} className="">
            <PackagePlus/> Create
          </Button>
          </div>
      </div>
      <hr />
      {/* Content */}
      <div className="w-full h-full rounded-xl overflow-hidden border border-muted">
        <div className='flex flex-col gap-4 bg-primary-foreground h-full overflow-y-scroll p-4'>
          <ConfigureSmallBanner/>
          <ConfigureBigBanner/>
        </div>
      </div>
    </div>
  )
}

export default page