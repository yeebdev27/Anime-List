import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
          <div className="flex justify-between px-4 pt-6 pb-0 items-center">
              <h2 className="md:text-lg text-sm font-semibold text-gray-700">{title}</h2>
                {
                    linkHref && linkTitle ?
                        <Link href={linkHref} className="text-[var(--accent)] hover:text-blue-700 md:text-sm text-xs font-semibold">
                                {linkTitle}
                        </Link>
            
                    : null
                }
          </div>
    )
}

export default Header;