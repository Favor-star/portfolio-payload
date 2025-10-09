import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'

export const SelectService = () => {
  return (
    <Select>
      <SelectTrigger
        className="w-full py-3 h-fit data-[size=default]:h-fit rounded-sm "
        size="default"
      >
        <SelectValue placeholder="Select Service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system1">System1</SelectItem>
        <SelectItem value="system2">System2</SelectItem>
        <SelectItem value="system3">System3</SelectItem>
      </SelectContent>
    </Select>
  )
}
