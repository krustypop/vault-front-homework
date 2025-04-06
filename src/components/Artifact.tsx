import { cn } from '@/utils/cn'

export type ArtifactProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Artifact = ({ children, ...props }: ArtifactProps) => {
  return (
    <div
      {...props}
      className={cn(
        'rounded-4xl border border-[rgba(0,0,0,0.01)] p-5',
        props.className
      )}
    >
      {children}
    </div>
  )
}
