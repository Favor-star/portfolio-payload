import { RiSearch2Line } from '@remixicon/react'
import React from 'react'

export const SearchInput = () => {
  return (
    <form className="w-full flex items-center gap-2 border border-input rounded-md px-3 py-1">
      <input
        type="text"
        id="search"
        className="w-full py-2  h-auto focus:outline-none bg-transparent autofill:bg-transparent autofill:active:bg-transparent"
        placeholder="Search blog..."
      />
      <RiSearch2Line />
    </form>
  )
}
