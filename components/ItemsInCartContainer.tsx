import CartItem from "./CartItem";

const ItemsInCartContainer = () => {
  const checkBoxAndOtherGap = 8;
  return (
    <div className="p-4 bg-white rounded-lg flex flex-col gap-4">
        {/* TODO: Click checkbox here - check all checkboxes or uncheck all checkboxes */}
        
        <div className={`flex flex-row gap-${checkBoxAndOtherGap} items-center`}>
            <input type="checkbox" name="" id="" className=""/>
            <h2 className="text-2xl font-semibold">2 items in your cart</h2>
        </div>

        <div className="flex flex-col gap-4">
          <CartItem checkBoxAndOtherGap={checkBoxAndOtherGap} />
          <CartItem checkBoxAndOtherGap={checkBoxAndOtherGap} />
          <CartItem checkBoxAndOtherGap={checkBoxAndOtherGap} />
          <CartItem checkBoxAndOtherGap={checkBoxAndOtherGap} />
          <CartItem checkBoxAndOtherGap={checkBoxAndOtherGap} />
          <CartItem checkBoxAndOtherGap={checkBoxAndOtherGap} />
          <CartItem checkBoxAndOtherGap={checkBoxAndOtherGap} />
        </div>

        <div></div>

    </div>
  )
}

export default ItemsInCartContainer
