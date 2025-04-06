import { cn } from '@/utils/cn'

export type CardProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function Card({ children, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        'rounded-xl border border-[rgba(232,232,232,1)] bg-white p-6 shadow-[rgba(0,0,0,0.04)]',
        props.className
      )}
    >
      {children}
    </div>
  )
}
