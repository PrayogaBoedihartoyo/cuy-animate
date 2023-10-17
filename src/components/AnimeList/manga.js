import Image from "next/image";
import Link from "next/link";

const Manga = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/manga?limit=8`);
    const manga = await response.json();

    return (
        <div>
            <h1 className="text-2xl font-bold text-color-primary p-4">Top Manga</h1>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
                {manga.data.map((anime) => {
                    return (
                        <Link key={anime.mal_id} href={`/details_manga/${anime.mal_id}`} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
                            <Image
                                src={anime.images.webp.image_url}
                                alt="..."
                                width={350}
                                height={350}
                                className="w-full max-h-64 object-cover"/>
                            <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                        </Link>
                    )
                })}
                </div>
        </div>
    );
}

export default Manga;
