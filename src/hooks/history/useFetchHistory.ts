import { useQuery } from '@tanstack/react-query'
import {
  fetchHistory,
  HistoryQuery,
  FETCH_HISTORY_QUERY_KEY,
} from '@/services/history'

export const useFetchHistory = ({ query }: HistoryQuery) => {
  return useQuery({
    queryKey: [FETCH_HISTORY_QUERY_KEY, query],
    queryFn: () => fetchHistory({ query }),
  })
}
