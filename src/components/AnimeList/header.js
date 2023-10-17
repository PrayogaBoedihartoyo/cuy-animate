import Link from "next/link";

const Header = async () => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-color-primary"> Top Anime </h1>
            <Link href={"/populer"} className="text-sm hover:text-color-accent text-color-primary transition-all"> Lihat Semua </Link>
        </div>
    )
}

export default Header;
