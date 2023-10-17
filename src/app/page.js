import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import Manga from "@/components/AnimeList/manga";

const Page = async () => {
    return (
        <>
            <section>
                <Header />
                <AnimeList />
                <Manga />
            </section>
        </>
    )
}

export default Page;
