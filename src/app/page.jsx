import Image from "next/image";
import AnimeList from "../components/AnimeList";
import SideBar from "../components/SideBar";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <div className="flex min-h-screen ">
        <SideBar />
        <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
          <h1 className="md:text-3xl text-center text-lg font-bold text-gray-600">Anime List</h1>
          <p className="md:text-lg text-xs text-center text-gray-500">Welcome to the Anime List App!</p>
          <Header title="Populer" linkTitle="See All" linkHref="/populer" />
          <AnimeList api={topAnime} />
        </main>
      </div>
    </>
  );
}

export default Page;
