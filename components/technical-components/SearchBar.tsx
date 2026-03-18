const SearchBar = (
  {placeholder} : 
  {placeholder : string}) => {
  return (
    <input type="text" placeholder={placeholder} className="outline-none focus:border-foreground focus:ring-foreground h-full w-[400px] hover:border hover:border-foreground bg-card px-5 rounded-md"/>
  )
}

export default SearchBar
