'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTheme } from 'next-themes'

export const ChangeColorMode = () => {
  const { setTheme } = useTheme()
  const handleThemeChange = (value: string) => {
    console.log('value', value)
    setTheme(value)
  }
  return (
    <Select onValueChange={handleThemeChange}>
      <SelectTrigger className="w-[100px] data-[placeholder]:text-white text-white">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}
