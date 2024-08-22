import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={"w-full flex relative justify-between items-center p-5 max-w-2xl border mx-auto"}>
            <Link href="/" className={"font-bold text-3xl"}>Tajay's <span className={"text-blue-500"}>Comic Thoughts</span></Link>
        </nav>
    )
}

export default Navbar;