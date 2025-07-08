import SideBar from "@/components/SideBar";

const Loading = () => { 
    return (
        <div className="min-h-screen flex ">
                <SideBar />
                <main className="flex-1 mt-16 m-4 pt-16 md:ml-64 bg-[var(--color-base)] rounded-3xl">
                    <div className="flex flex-col items-center justify-center h-full">
                       <div className="custom-loader"></div>
                    </div>
                </main>
              </div>
    )
}

export default Loading;