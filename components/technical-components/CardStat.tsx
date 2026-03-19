import { ReactNode } from 'react'
import { Home } from 'lucide-react'

const CardStat = ({header, subHeader, icon} : {header : string, subHeader : string, icon : ReactNode}) => {
  return (
    <div className='rounded-md bg-primary-foreground border border-muted p-6 flex flex-row gap-8 justify-center'>
        <div className='flex flex-col justify-center'>
            <h3 className='text-xl font-bold'>{header}</h3>
            <p className='text-sm'>{subHeader}</p>
        </div>

        <div className='rounded-sm items-center justify-center flex bg-foreground aspect-square'>
            {icon}
        </div>
    </div>
  )
}

export default CardStat
