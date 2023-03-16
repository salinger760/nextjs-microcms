type Props = {
  children: React.ReactNode
}

export default function Body(props: Props): JSX.Element {
  return <main>{props.children}</main>
}
