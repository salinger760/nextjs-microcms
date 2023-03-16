import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import axios from '@/libs/axios'
import { Posts } from '@/features/post/types'

export const useQueryPosts = () => {
  const router = useRouter()

  const getPosts = async () => {
    const { data } = await axios.get<Posts[]>('/posts')

    return data
  }

  return useQuery<Posts[], Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: Infinity,
    onError: () => router.push('/'),
  })
}

export const useQueryPost = (post_id: number) => {
  const getPost = async () => {
    const { data } = await axios.get<Posts>(`/posts/${post_id}`)

    return data
  }

  return useQuery<Posts, Error>({
    queryKey: ['post'],
    queryFn: getPost,
    staleTime: Infinity,
  })
}
