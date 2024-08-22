import Link from "next/link";
import {ModeToggle} from "@/app/components/ModeToggle";

const Navbar = () => {
    return (
        <nav className={"w-full flex relative justify-between items-center p-5 max-w-2xl mx-auto"}>
            <Link href="/" className={"font-bold text-3xl"}>Tajay's <span className={"text-primary"}>Comic Thoughts</span></Link>
            <ModeToggle />
        </nav>
    )
}

export default Navbar;