import { NotifType, NotifTypes } from '@/entities/Notif'
import { cn } from '@/utils/cn'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
} from '@heroicons/react/16/solid'
import { HTMLAttributes } from 'react'
import { getBgColorByType } from './utils/getBgColorByType'

export type NotificationHistoryTypeBadgeProps = {
  type: NotifType
} & HTMLAttributes<HTMLDivElement>

export function NotificationHistoryTypeBadge({
  type,
  ...props
}: NotificationHistoryTypeBadgeProps) {
  return (
    <div
      {...props}
      className={cn(
        'relative flex h-5 w-5 items-center justify-center rounded-full',
        getBgColorByType(type),
        props.className
      )}
    >
      <div className="relative z-10 flex items-center justify-center">
        {type === NotifTypes.ACCOUNT_CREATED && (
          <PlusIcon className="size-3 text-white" />
        )}
        {type === NotifTypes.TRANSACTION_RECEIVED && (
          <ArrowDownIcon className="size-3 text-white" />
        )}
        {type === NotifTypes.TRANSACTION_SENT && (
          <ArrowUpIcon className="size-3 text-white" />
        )}
      </div>
    </div>
  )
}
