import { useQuery } from '@tanstack/react-query'
import {
  fetchHistory,
  FETCH_HISTORY_QUERY_KEY,
  HistoryQuery,
} from '@/services/history'

export const useFetchHistory = ({ query }: HistoryQuery) =>
  useQuery({
    queryKey: [FETCH_HISTORY_QUERY_KEY, query],
    queryFn: () => fetchHistory({ query }),
  })
