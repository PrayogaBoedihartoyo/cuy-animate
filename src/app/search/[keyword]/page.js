import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {
    const keyword = params.keyword;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/anime?q=${keyword}&limit=8`);
    const searchAnime = await response.json();

    return (
        <>
            <section>
                <Header title={`Pencarian Untuk ${keyword}`} linkHref="/populer" linkTitle="Lihat Semua"/>
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page;
