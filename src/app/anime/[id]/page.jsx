import SideBar from "@/components/SideBar";

const Page = async () => {
    return (
        <>
            <div className="min-h-screen flex ">
                <SideBar />
                <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
                    <h3 className="flex justify-center items-center text-[var(--primary)] text-2xl font-bold">Anime Detail</h3>
                </main>
            </div>
        </>
    )
}

export default Page;