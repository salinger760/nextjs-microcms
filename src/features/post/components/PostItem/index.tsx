import Link from 'next/link'
import { style } from './index.style'
import { Posts } from '@/features/post/types'

type Props = Posts

const UserItem = (props: Props): JSX.Element => {
  const { id, title, detail, mainImage, category } = props

  return (
    <>
      <Link href={`/post/${id}`} key={id}>
        <div css={style.wrapCard}>
          <div css={style.content}>
            <div css={style.cardHeader}>
              <p>{category.categoryName}</p>
              <p>{title}</p>
              <p>{detail}</p>
              (mainImage) && {<img src={mainImage.url} alt="Picture of the author" />}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default UserItem
