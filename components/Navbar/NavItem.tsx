import Link from "next/link";
type NavItemProps = {
  children: React.ReactNode;
  to?: string;
}

export default function NavItem(props: NavItemProps) {
  const { children, to } = props;
  return (
    <li className="font-cooper uppercase">
      {to ? (
        <Link href={to}>{children}</Link>
      ) : (
        <div>{children}</div>
      )}
    </li>
  )
}