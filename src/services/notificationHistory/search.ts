import { AnyNotif } from '@/entities/Notif'

const API = 'http://localhost:5000'

export type HistoryQuery = {
  query: string
}

export const FETCH_HISTORY_QUERY_KEY = 'history'

export async function fetchHistory({
  query,
}: HistoryQuery): Promise<AnyNotif[]> {
  try {
    const res = await fetch(`${API}/search?q=${query}`)
    return await res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
