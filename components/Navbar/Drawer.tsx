import clx from 'classnames';
type DrawerProps = {
  children: React.ReactNode,
  open?: boolean
}
export default function Drawer(props: DrawerProps) {
  const { children, open } = props;
  return (
    <aside className={clx('z-50 overflow-hidden absolute transition-transform h-full w-full left-6 top-0 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg shadow-lg', {
      "translate-x-0": open,
      "translate-x-full": !open
    })}>

      {children}
    </aside>
  )
}