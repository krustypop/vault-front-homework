import { NotifType, NotifTypes } from '@/entities/Notif'

export const getLabelByType = (type: NotifType) => {
  switch (type) {
    case NotifTypes.TRANSACTION_RECEIVED:
      return 'Received'
    case NotifTypes.TRANSACTION_SENT:
      return 'Sent'
    case NotifTypes.ACCOUNT_CREATED:
      return 'Account Created'
  }
}
