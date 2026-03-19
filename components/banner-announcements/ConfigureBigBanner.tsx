import TitleInputForm from "./TitleInputForm"
import { Button } from "../ui/button"

const ConfigureBigBanner = () => {
  return (
    <div className='p-8 flex flex-col gap-4 bg-card rounded-lg border border-muted'>
        {/* Title */}
        <h1 className="text-2xl font-bold">Edit Big Banner Announcement</h1>

        {/* Title Input Forms */}
        <div className="flex flex-row gap-2 gap-y-4 flex-wrap">
            <TitleInputForm title="Small Upper Title" placeholder="Enter Small Upper Title"/>
            <TitleInputForm title="Big Middle Title" placeholder="Enter Big Middle Title" />
            <TitleInputForm title="Description" placeholder="Enter Description" boxWidth="500"/>
            <TitleInputForm title="Call To Action Button" placeholder="Enter Call To Action Button" />
            <TitleInputForm title="Call To Action Link" placeholder="Enter Call To Action Link" />
        </div>

        {/* Save or Delete */}
        <div className="flex justify-end gap-2">
            <Button variant={"ghost"}>
                Delete
            </Button>

            <Button variant={"default"}>
                Save
            </Button>
        </div>
    </div>
  )
}

export default ConfigureBigBanner
