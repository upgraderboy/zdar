import React from 'react'
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';


const SearchBar = ({className}: {className?: string}) => {
  return (
    <div className={cn("mb-8 relative", className)}>
          <Input
            type="search"
            placeholder="Search here..."
            className="h-12 max-w-full rounded-full"
          />
          <Search className='bg-primary rounded-full text-white p-1 absolute top-2 right-2' size={30} />
        </div>
  )
}
export default SearchBar;
