import { cn } from '@/utils/cn'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { TextInput, TextInputProps } from './TextInput'
import { Spinner } from '../Spinner'

export type SearchInputProps = TextInputProps & {
  isLoading?: boolean
}

export function SearchInput({
  isLoading = false,
  className,
  ...props
}: SearchInputProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-3 flex h-full w-5 items-center justify-center">
        <MagnifyingGlassIcon
          className="inset-0 size-5 text-[rgba(106,106,106,1)]"
          aria-hidden={isLoading}
        />
      </div>

      <TextInput
        className={cn(
          // placeholder
          'placeholder:text-sm placeholder:leading-5 placeholder:text-[rgba(106,106,106,1)]',
          // border
          'rounded-xl border border-[rgba(0,0,0,0)]',
          // background
          'bg-[rgba(0,0,0,0.05)]',
          // padding
          'px-3 py-3.5 pl-11',
          // width
          'w-full',
          // focus
          'focus:border-[rgba(212,160,255,1)] focus:ring-0 focus:outline-none',
          // caret
          'caret-[rgba(212,160,255,1)]',
          // text
          'text-sm text-black',
          // transition
          'transition delay-150 duration-200 ease-in-out',
          className
        )}
        {...props}
      />

      <div className="absolute top-0 right-3 flex h-full w-5 items-center justify-center">
        <div
          className={cn(
            'inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out',
            isLoading ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden={!isLoading}
        >
          <Spinner />
        </div>
      </div>
    </div>
  )
}
