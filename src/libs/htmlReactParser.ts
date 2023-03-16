import parse from 'html-react-parser'

export const parseContents = (data: string) => {
  if (data) {
    return parse(data)
  }
  return ''
}
