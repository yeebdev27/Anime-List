const Pagination = ({ page, lastPage, setPage }) => {
    
    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => (prevState + 1));
        scrollTop()
    }
    
    const handlePrevPage = () => {
        setPage((prevState) => (prevState - 1));
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center space-x-2 p-2 rounded-lg">
            {page <= 1 ? null :  
                <button onClick={handlePrevPage} className="px-3 py-2 bg-[var(--secondary)] custom-shadow text-[var(--color-base)] rounded hover:bg-blue-600 disabled:bg-gray-300 transition-colors cursor-pointer">
                    Prev
                </button>
            }
            <span className="mx-2 px-3 py-2 bg-[var(--secondary)] custom-shadow text-[var(--color-base)] rounded text-md">
                {page} of {lastPage}
            </span>
            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="px-3 py-2 bg-[var(--secondary)] custom-shadow text-[var(--color-base)] rounded hover:bg-blue-600 disabled:bg-gray-300 transition-colors cursor-pointer">
                    Next
                </button>
            }
        </div>
    )
}

export default Pagination;