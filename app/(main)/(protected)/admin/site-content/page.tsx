import ConfigureSmallBanner from "@/components/banner-announcements/ConfigureSmallBanner"
import ConfigureBigBanner from "@/components/banner-announcements/ConfigureBigBanner"
import ConfigureListBanner from "@/components/banner-announcements/ConfigureListBanner"
import CreateButton from "@/components/banner-announcements/CreateButton"

const page = () => {
  return (
    <div className='flex flex-col p-4 bg-background w-full gap-4 min-h-0 h-full'> 

      <div className="flex flex-row justify-between shrink-0">

          <h1 className='font-bold text-3xl'>Edit Site Content</h1>

          {/* Create Button */}
          <div className="">
            <CreateButton/>
          </div>
          
      </div>
      
      <hr className="shrink-0" />

      {/* Content */}
      
      <div className="flex flex-col gap-4 w-full flex-1 min-h-0 overflow-y-auto border border-muted rounded-xl p-4">
          <ConfigureSmallBanner/>
          <ConfigureBigBanner/>
          <ConfigureListBanner/>
      </div>
      
    </div>
  )
}

export default page