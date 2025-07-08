"use client"

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault();
        const keyword = searchRef.current?.value || '';
        
        if (!keyword.trim()) return;

        router.push(`/search/${keyword.trim()}`);
    }
    
    return (
        <form onSubmit={handleSearch}>
            <div className='relative'>
                <input 
                type="text" 
                placeholder="Search..." 
                className="md:w-full w-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[var(--tertiary)]" 
                ref={searchRef}
                />
                <button>
                    <Search size={20} color='gray' className='absolute top-1 end-1 cursor-pointer' />
                </button>
            </div>
        </form>
    )
}

export default InputSearch;