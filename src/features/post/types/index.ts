export type Posts = {
  id: string
  title: string
  detail: string
  mainImage: Item
  category: Category
  updatedAt: Date
}

export type Item = {
  url: string
  height: number
  width: number
}

export type Category = {
  id: number
  categoryId: string
  categoryName: string
}
