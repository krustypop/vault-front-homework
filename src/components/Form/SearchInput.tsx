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
          'rounded-xl outline outline-1 outline-offset-[-1px] outline-[rgba(0,0,0,0)]',
          // background
          'bg-[rgba(0,0,0,0.05)]',
          // padding
          'px-3 py-3.5 pl-11',
          // width
          'w-full',
          // focus
          'focus:ring-0 focus:outline-[rgba(212,160,255,1)]',
          // caret
          'caret-[rgba(212,160,255,1)]',
          // text
          'text-sm text-black',
          // transition
          'transition delay-0 duration-300 ease-in-out',
          className
        )}
        {...props}
      />

      {isLoading && (
        <div className="absolute top-0 right-3 flex h-full w-5 items-center justify-center">
          <div
            className={cn(
              'inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out'
            )}
            aria-hidden={!isLoading}
          >
            <Spinner />
          </div>
        </div>
      )}
    </div>
  )
}
