import Link from 'next/link'
import { PER_PAGE } from '@/config'

type Props = {
  totalCount: number
}

export function Pagenation({ totalCount }: Props) {
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/post/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  )
}
