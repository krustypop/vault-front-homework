import { NotifType, NotifTypes } from '@/entities/Notif'

export const getBgColorByType = (type: NotifType) => {
  switch (type) {
    case NotifTypes.ACCOUNT_CREATED:
      return 'bg-account-created'
    case NotifTypes.TRANSACTION_RECEIVED:
      return 'bg-received'
    case NotifTypes.TRANSACTION_SENT:
      return 'bg-sent'
    default:
      return ''
  }
}
