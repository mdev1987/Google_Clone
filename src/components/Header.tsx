import Link from "next/link";
import { useRouter } from "next/router";
import User from "./User";

export default function Header() {
    const router = useRouter();
    const term = router.query?.term || 'google';
    return (
        <header className="flex justify-between p-5 text-gray-700">
            <div className="flex space-x-4 items-center">
                <Link className="link" href="https://about.google/">About</Link>
                <Link className="link" href="https://store.google.com">Store</Link>
            </div>
            <div className="flex space-x-4 items-center">
                <Link href="https://mail.google.com" className="link">Gmail</Link>
                <Link href={`/search?term=${term}&searchType=image`}
                    className="link">Images</Link>
                <User />
            </div>
        </header>
    )
}
