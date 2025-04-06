import { CardPlaceholder } from '@/components/CardPlaceholder'

export type NotificationHistoryPlaceholderProps = {
  label?: string
}

export const NotificationHistoryPlaceholder = ({
  label = 'No result found...',
}: NotificationHistoryPlaceholderProps) => {
  return (
    <div className="flex h-full min-h-[332px] w-full flex-col items-center justify-center">
      <div className="relative">
        <CardPlaceholder className="absolute z-0 translate-y-[calc(-24px)] scale-[0.8]" />
        <CardPlaceholder className="absolute z-10 translate-y-[calc(-14px)] scale-[0.9]" />
        <CardPlaceholder className="relative z-20" />
      </div>
      <div className="mt-4">
        <span className="text-sm text-black">{label}</span>
      </div>
    </div>
  )
}
