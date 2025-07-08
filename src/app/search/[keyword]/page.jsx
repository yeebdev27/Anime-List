import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import SideBar from "@/components/SideBar";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <>
      <div className="min-h-screen flex ">
        <SideBar />
        <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
          <Header title={`Pencarian untuk ${decodedKeyword}...`} />
          <AnimeList api={searchAnime} />
        </main>
      </div>
    </>
  );
}

export default Page;
