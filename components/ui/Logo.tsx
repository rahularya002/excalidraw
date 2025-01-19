import Link from "next/link"

export const Logo = () => {
    return (
        <Link href={'/'}>
            <h1 className="text-3xl font-bold text-primary">100xCanvas</h1>
        </Link>
    )
}