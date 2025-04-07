export const NotifTypes = {
  TRANSACTION_RECEIVED: 'TRANSACTION_RECEIVED',
  TRANSACTION_SENT: 'TRANSACTION_SENT',
  ACCOUNT_CREATED: 'ACCOUNT_CREATED',
} as const

export type NotifTypeTransactionReceived =
  typeof NotifTypes.TRANSACTION_RECEIVED
export type NotifTypeTransactionSent = typeof NotifTypes.TRANSACTION_SENT
export type NotifTypeAccountCreated = typeof NotifTypes.ACCOUNT_CREATED

export type NotifType =
  | NotifTypeTransactionReceived
  | NotifTypeTransactionSent
  | NotifTypeAccountCreated

export type NotifTransactionData = {
  amount: number
  from: string
  id: number
  to: string
  unit: string
}

export type NotifAccountCreatedData = {
  currency: string
  id: number
  name: string
}

export type NotifID = string

interface NotifBase {
  id: NotifID
}

export interface NotifTransactionReceived extends NotifBase {
  type: NotifTypeTransactionReceived
  data: NotifTransactionData
}

export interface NotifTransactionSent extends NotifBase {
  type: NotifTypeTransactionSent
  data: NotifTransactionData
}

export interface NotifAccountCreated extends NotifBase {
  type: NotifTypeAccountCreated
  data: NotifAccountCreatedData
}

export type AnyNotif =
  | NotifTransactionReceived
  | NotifTransactionSent
  | NotifAccountCreated
