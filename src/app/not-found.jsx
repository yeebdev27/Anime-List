import SideBar from "@/components/SideBar";

const Page = () => {    
    return (
              <div className="min-h-screen flex ">
                <SideBar />
                <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
                    <h1 className="text-3xl text-center text-red-600 font-bold">404 - Page Not Found</h1>
                    <p className="text-lg text-center text-gray-500">The page you are looking for does not exist.</p>
                </main>
              </div>
    )
}

export default Page;