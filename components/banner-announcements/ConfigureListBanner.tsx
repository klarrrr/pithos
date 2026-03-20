import TitleInputForm from "./TitleInputForm"
import { Button } from "../ui/button"
import UploadListImage from "./UploadListImage"
import DeleteButton from "@/components/banner-announcements/DeleteButton"

const ConfigureListBanner = () => {
  return (
    <div className='p-8 flex flex-col gap-4 bg-card rounded-lg border border-muted'>
        {/* Title */}
        <h1 className="text-2xl font-bold">Edit List Banner Announcement</h1>

        {/* Title Input Forms */}
        <div className="flex flex-row gap-2 gap-y-4 flex-wrap">
            <TitleInputForm title="List Banner Title" placeholder="Enter list banner title"/>
            <TitleInputForm title="'See More' URL Link" placeholder="Enter URL link" />
        </div>

        {/* Image */}

        <div className="flex flex-col gap-2 gap-y-4">
            <UploadListImage title="Upload Image List 1" placeholder="Enter Image URL here" />
            <UploadListImage title="Upload Image List 2" placeholder="Enter Image URL here" />
            <UploadListImage title="Upload Image List 3" placeholder="Enter Image URL here" />
            <UploadListImage title="Upload Image List 4" placeholder="Enter Image URL here" />
        </div>


        {/* Save or Delete */}
        <div className="flex justify-end gap-2">
            <DeleteButton/>

            <Button variant={"default"}>
                Save
            </Button>
        </div>
    </div>
  )
}

export default ConfigureListBanner
