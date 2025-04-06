import { useEffect, useState } from 'react'
import { Card, SearchInput } from '@/components'
import { AnyNotif } from '@/entities/Notif'
import { NotificationHistoryPlaceholder } from './NotificationHistoryPlaceholder'
import { NotificationHistoryCard } from './NotificationHistoryCard'
import { useFetchHistory } from '@/hooks/history/useFetchHistory'

const API = 'http://localhost:5000'

export const NotificationHistory = () => {
  const [searchText, setSearchText] = useState('')

  const { data, isLoading } = useFetchHistory({
    query: searchText,
  })

  return (
    <Card className="flex min-w-[440px] flex-col gap-6 rounded-4xl pb-0 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.04)]">
      <span className="text-2xl leading-8 font-semibold tracking-tighter">
        History
      </span>

      <SearchInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Search"
        isLoading={isLoading}
      />
      <div className="min-h-[364px]">
        {data && data?.length > 0 ? (
          <div className="relative">
            <div className="flex max-h-[364px] flex-col gap-3 overflow-y-auto bg-white pr-1 pb-6">
              {data.map((r) => (
                <NotificationHistoryCard key={r.id} notif={r} />
              ))}
            </div>
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        ) : !isLoading ? (
          <NotificationHistoryPlaceholder />
        ) : null}
      </div>
    </Card>
  )
}
