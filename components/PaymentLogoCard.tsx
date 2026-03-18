import { Card } from "./ui/card"
import Image from "next/image"

const PaymentLogoCard = ({loc, size} : {loc : string, size : number}) => {
  return (
    <Card className="px-2 rounded-sm relative flex items-center overflow-hidden">
        <Image src={loc} width={size} height={size} alt="" />
    </Card>
  )
}

export default PaymentLogoCard
