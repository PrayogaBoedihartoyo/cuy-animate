import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/top/anime?limit=8`);
    const topAnime = await response.json();

    return (
        <>
            <section>
                <Header title="Top Anime" linkHref="/populer" linkTitle="Lihat Semua"/>
                <AnimeList api={topAnime} />
            </section>
        </>
    )
}

export default Page;
