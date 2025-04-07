import { Card } from '@/components'
import { AnyNotif, NotifTypes } from '@/entities/Notif'
import { cn } from '@/utils/cn'
import { ellipsis } from '@/utils/string'
import { formatNumber } from '@/utils/formatting'
import {
  getLabelByType,
  getImagePathByCurrency,
  getImagePathByUnit,
  getGradientByUnitOrCurrency,
} from './utils'
import { NotificationHistoryTypeBadge } from './NotificationHistoryTypeBadge'

export type NotificationHistoryCardProps = {
  notif: AnyNotif
}

export function NotificationHistoryCard({
  notif: { type, data },
}: NotificationHistoryCardProps) {
  let imagePath: string | undefined
  let gradient: string | undefined
  let extra: string | undefined
  let amount: string | undefined

  switch (type) {
    case NotifTypes.ACCOUNT_CREATED:
      imagePath = getImagePathByCurrency(data.currency)
      gradient = getGradientByUnitOrCurrency(data.currency)
      extra = data.name
      amount = undefined
      break
    case NotifTypes.TRANSACTION_RECEIVED:
      imagePath = getImagePathByUnit(data.unit)
      gradient = getGradientByUnitOrCurrency(data.unit)
      extra = `From ${data.from ? ellipsis(data.from) : '-'}`
      amount = `${formatNumber(data.amount)} ${data.unit}`
      break
    case NotifTypes.TRANSACTION_SENT:
      imagePath = getImagePathByUnit(data.unit)
      gradient = getGradientByUnitOrCurrency(data.unit)
      extra = `To ${data.to ? ellipsis(data.to) : '-'}`
      amount = `${formatNumber(data.amount)} ${data.unit}`
      break
    default:
      imagePath = undefined
      gradient = undefined
      amount = undefined
      break
  }

  return (
    <Card
      className={cn(
        'flex w-full border-0 p-3 outline outline-1 outline-offset-[-1px] outline-[rgba(232,232,232,1)]',
        gradient
      )}
    >
      <div className="flex w-full gap-3">
        <div className="relative flex-shrink-0">
          <img
            src={imagePath || ''}
            alt={`${type} notification icon`}
            className="size-12 rounded-full"
            style={{
              border: '1.2px solid #FFFFFF0D',
              WebkitMask:
                'radial-gradient(13.2px at 42px 6px, transparent 100%, black 100%)',
              mask: 'radial-gradient(13.2px at 42px 6px, transparent 100%, black 100%)',
            }}
          />
          <div className="absolute -top-1 -right-1">
            <NotificationHistoryTypeBadge type={type} />
          </div>
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full items-center justify-between">
            <span className="text-base font-semibold">
              {getLabelByType(type)}
            </span>
            {amount ? (
              <span className="text-base font-semibold">{amount}</span>
            ) : null}
          </div>
          <span className="text-sm text-gray-500">{extra}</span>
        </div>
      </div>
    </Card>
  )
}
