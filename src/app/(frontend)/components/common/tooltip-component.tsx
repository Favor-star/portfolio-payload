import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function TooltipComp({
  trigger,
  content,
}: Readonly<{
  trigger: React.ReactElement
  content: string
}>) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  )
}
