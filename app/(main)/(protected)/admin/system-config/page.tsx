import InputTextField from "@/components/technical-components/InputTextField"
import FilterBy from "@/components/technical-components/FilterBy"
import SortBy from "@/components/technical-components/SortBy"
import SearchButton from "@/components/technical-components/SearchButton"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// TODO: It's probably for the best if the search button and the search bar are on the same component.

const page = () => {
    return (
        <div className='flex flex-col p-4 bg-background w-full gap-4'>

            {/* Header */}
            <div className="flex flex-row justify-between">
                <h1 className='font-bold text-3xl'>System Config</h1>
            </div>

            <hr />

            {/* Content Container */}
            <div className="flex gap-4 flex-col min-h-0 overflow-y-auto">

                {/* Login and Password */}
                <div className='flex gap-4'>

                    {/* Title */}
                    <div className='flex flex-col gap-4 w-1/4 sticky top-0 h-fit bg-primary-foreground border border-muted rounded-lg p-4'>
                        <h1 className='font-bold text-2xl'>Login and Password</h1>
                        <p>Customize the login and password constraints for a better security.</p>
                        <Button variant={"default"} className="w-fit self-end">
                            Save
                        </Button>
                    </div>

                    {/* Interactable Content */}
                    <div className='flex flex-col gap-4 w-3/4'>

                        {/* Login Attempts */}
                        <div className='flex flex-col gap-4 w-full p-4 bg-primary-foreground border border-muted rounded-lg'>
                            
                            {/* Login Content */}

                            <div className="flex flex-col gap-4">
                                
                                {/* Title */}
                                <h2 className='font-semibold flex gap-2 text-xl items-center'>Login</h2>
                                <hr />

                                {/* Login Attempts */}
                                <Card className="flex flex-col gap-4 p-4">
                                    <h3 className="font-medium">Login Attempts</h3>
                                    <InputTextField placeholder="Enter the maximum number of login attempts" />
                                    <p className="text-sm text-accent">Note: Minimum of 3 Login Attempts only</p>
                                </Card>

                                <hr />
                            </div>

                            {/* Password Content */}

                            <div className="flex flex-col gap-4">

                                {/* Title */}
                                <h2 className='font-semibold flex gap-2 text-xl items-center'>Password</h2>
                                <hr />

                                {/* Compiled Content */}
                                <div className="flex flex-col gap-4">
                                    {/* Character Length */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Character Length</h3>
                                        <InputTextField placeholder="Enter minimum length of password" />
                                        <p className="text-sm text-accent">Note: Minimum of atleast 12 characters</p>
                                    </Card>

                                    {/* Capital Letter */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Capital Letters</h3>
                                        <InputTextField placeholder="Enter number of minimum capital letters" />
                                        <p className="text-sm text-accent">Note: Minimum of atleast 1 capital letter</p>
                                    </Card>

                                    {/* Small Letters */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Small Letters</h3>
                                        <InputTextField placeholder="Enter number of minimum small letters" />
                                        <p className="text-sm text-accent">Note: Minimum of atleast 1 small letter</p>
                                    </Card>

                                    {/* Numbers */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Numbers</h3>
                                        <InputTextField placeholder="Enter number of minimum password characters" />
                                        <p className="text-sm text-accent">Note: Minimum of atleast 1 number</p>
                                    </Card>

                                    {/* Sepcial Characters */}
                                    <Card className="flex flex-col gap-4 p-4">
                                        <h3 className="font-medium">Special Characters</h3>
                                        <InputTextField placeholder="Enter number of minimum special characters" />
                                        <p className="text-sm text-accent">Note: Minimum of atleast 1 special character</p>
                                    </Card>
                                </div>

                                <hr />
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
