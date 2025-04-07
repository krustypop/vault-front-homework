import { useState } from 'react'
import { Card, SearchInput } from '@/components'
import { useFetchHistory } from '@/features/NoficiationHistory/hooks/useFetchHistory'
import { NotificationHistoryPlaceholder } from './NotificationHistoryPlaceholder'
import { NotificationHistoryCard } from './NotificationHistoryCard'

export function NotificationHistory() {
  const [searchText, setSearchText] = useState('')

  const { data, isLoading } = useFetchHistory({
    query: searchText,
  })

  return (
    <Card className="flex min-w-[440px] flex-col rounded-4xl p-0 pb-0 shadow-[0px_0px_24px_0px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-4 px-6 pt-6 pb-0">
        <h1 className="text-2xl leading-8 font-semibold tracking-tighter">
          History
        </h1>

        <SearchInput
          value={searchText}
          onChange={setSearchText}
          placeholder="Search"
          isLoading={isLoading}
        />
      </div>

      <div className="min-h-[380px] p-6 pb-0">
        {isLoading && null}

        {!isLoading && data && data.length > 0 && (
          <div className="relative">
            <div className="flex max-h-[355px] flex-col gap-3 overflow-y-auto bg-white pb-6">
              {data.map((r) => (
                <NotificationHistoryCard key={r.id} notif={r} />
              ))}
            </div>
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 w-full bg-gradient-to-t from-white to-transparent" />
          </div>
        )}

        {!isLoading && (!data || data.length === 0) && (
          <NotificationHistoryPlaceholder label="No result found..." />
        )}
      </div>
    </Card>
  )
}
