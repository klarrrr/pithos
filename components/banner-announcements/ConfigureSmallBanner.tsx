import TitleInputForm from "./TitleInputForm"
import { Button } from "../ui/button"

const ConfigureSmallBanner = () => {
  return (
    <div className='p-8 flex flex-col gap-4 bg-card rounded-lg border border-muted'>
        {/* Title */}
        <h1 className="text-2xl font-bold">Edit Small Banner Announcement</h1>

        {/* Title Input Forms */}
        <div className="flex flex-row gap-2 gap-y-4 flex-wrap">
            <TitleInputForm title="Text" placeholder="Enter announcement here" />
            <TitleInputForm title="Text" placeholder="Enter announcement here" />
            <TitleInputForm title="Text" placeholder="Enter announcement here" />
            <TitleInputForm title="Text" placeholder="Enter announcement here" />
            <div className="h-full flex flex-col justify-end">
                <Button className="self-end" variant={"red_link"}>Add More +</Button>
            </div>
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

export default ConfigureSmallBanner
