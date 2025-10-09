import { Input } from '@/components/ui/input'
import React from 'react'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessage?: string
}
export const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <fieldset className="w-full mt-2">
      <div className="w-full flex justify-between items-end mb-1">
        <label htmlFor={props.id} className="text-muted-foreground ">
          {props.label}
        </label>
        <span className="text-xs text-destructive">{props.errorMessage}</span>
      </div>
      <Input
        id={props.id}
        type="text"
        className="w-full p-3 border h-auto border-input rounded-md "
        {...props}
      />
    </fieldset>
  )
}
