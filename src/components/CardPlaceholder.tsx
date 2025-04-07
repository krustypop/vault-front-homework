import { cn } from '@/utils/cn'
import { HTMLAttributes } from 'react'

export type CardPlaceholderProps = HTMLAttributes<HTMLDivElement>

export function CardPlaceholder({
  className,
  ...props
}: CardPlaceholderProps) {
  return (
    <div
      {...props}
      className={cn(
        'w-[240px]',
        'rounded-lg',
        'bg-gradient-to-b',
        'from-[rgba(244,244,244,1)]',
        'to-[rgba(0,0,0,0.2)]',
        'to-70%',
        'shadow-[0px_0px_7px_0px_rgba(0,0,0,0.05)]',
        className
      )}
    >
      <div
        className={cn(
          'w-full',
          'h-full',
          'rounded-lg',
          'p-[0.7px]',
          'bg-gradient-to-b',
          'from-[rgba(255,255,255,0.4)]',
          'from-100%',
          'to-[rgba(255,255,255,0)]',
          'to-0%'
        )}
      >
        <div
          className={cn(
            'bg-[#F4F4F4]',
            'p-2',
            'w-full',
            'h-full',
            'rounded-[calc(8px-0.7px)]'
          )}
        >
          <div className="flex w-full justify-between">
            <div className="gap flex gap-2">
              <div className="h-7 w-7 rounded-full bg-gray-200" />
              <div className="flex flex-col gap-1.5">
                <div className="h-3 w-7 rounded-lg bg-gray-200" />
                <div className="h-2 w-16 rounded-lg bg-gray-200" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="h-3 w-7 rounded-lg bg-gray-200" />
              <div className="h-2 w-16 rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
