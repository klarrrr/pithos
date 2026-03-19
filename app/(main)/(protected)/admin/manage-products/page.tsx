import SortBy from '@/components/technical-components/SortBy'
import FilterBy from '@/components/technical-components/FilterBy'
import SearchBar from '@/components/technical-components/SearchBar'
import SearchButton from '@/components/technical-components/SearchButton'

const page = () => {
  return (
    <div className='flex flex-col p-4 bg-background w-full gap-4'> 
      <div className="flex flex-row justify-between">
        <h1 className='font-bold text-3xl'>Manage Products</h1>
        <div className="flex flex-row gap-2 h-full items-center">
          <SortBy sortOptions={[""]}/>
          <FilterBy filterOptions={[""]}/>
          <SearchBar placeholder="Search for products"/>
          <SearchButton />
        </div>
      </div>
      <hr />
      <div className='flex gap-4'>
          <div className="w-full p-4 bg-primary-foreground border border-muted rounded-lg">
          <table className="*:*:*:border *:*:*:border-muted *:*:*:p-4 *:*:*:max-w-80 w-full bg-primary-foreground" border={1}>
              <thead>
                <tr>
                  <th><input type="checkbox" name="" id="" /></th>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Product Description</th>
                  <th>Price</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td><input type="checkbox" name="" id="" /></td>
                  <td>129616 182736 1293</td>
                  <td>Malupet na Asset</td>
                  <td className=''><p className='line-clamp-1'>
                  This is a very malupet na product that is very malupet and very awesome but woah not just that it's also very maangas.  
                  </p></td>
                  <td>PHP6,700.00</td>
                  <td>1-1-1999</td>
                  <td>Edit</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default page
