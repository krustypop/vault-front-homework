import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react'

export type TextInputProps = Omit<
  DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'onChange'
> & {
  onChange: (value: string) => void
}

export function TextInput(props: TextInputProps) {
  const { onChange, ...p } = props
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    onChange(e.target.value)

  return <input type="text" onChange={handleChange} {...p} />
}
