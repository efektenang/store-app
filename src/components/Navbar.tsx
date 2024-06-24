import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex bg-gray-800 py-3 px-5">
            <Link href={"/"}><h1 className="mr-3 text-white">Store App</h1></Link>
            <ul className="flex ml-8">
                <li className="mr-3 text-blue-300">
                    <Link href={"/blog"}>Blogs</Link>
                </li>
                <li className="mr-3 text-blue-300">
                    <Link href={"/contact"}>Contact Us</Link>
                </li>
                <li className="mr-3 text-blue-300">
                    <Link href={"/about"}>About Us</Link>
                </li>
            </ul>
        </nav>
    )
}
