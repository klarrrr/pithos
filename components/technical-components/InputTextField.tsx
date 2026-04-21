const InputTextField = (
  {placeholder} : 
  {placeholder : string}) => {
  return (
    <input type="text" placeholder={placeholder} className="border-muted outline-none focus:border-foreground focus:ring-foreground h-full w-[400px] hover:border hover:border-foreground bg-primary-foreground px-5 rounded-md"/>
  )
}

export default InputTextField
