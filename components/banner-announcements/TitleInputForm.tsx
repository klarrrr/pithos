

const TitleInputForm = ({title, placeholder, boxWidth} : {title : string, placeholder : string, boxWidth? : string}) => {   
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-medium'>{title}</h1>
            <input type="text" placeholder={placeholder} className={`border-muted outline-none focus:border-foreground focus:ring-foreground h-full ${boxWidth != undefined ? boxWidth : `w-[300px]`} hover:border hover:border-foreground bg-primary-foreground px-2 rounded-md`}/>
        </div>
    )
}

export default TitleInputForm
