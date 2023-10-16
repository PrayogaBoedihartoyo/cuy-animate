"use client";
import {MagnifyingGlass} from "@phosphor-icons/react";
import {useRef} from "react";
import {useRouter} from "next/navigation";

const InputSearch = () => {
    const searchRef = useRef(null);
    const router = useRouter();
    const handleSearch = (event) => {
        event.preventDefault();
        router.push(`/search/${searchRef.current.value}`);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch(event);
        }
    }

    return (
        <div className="relative">
            <input
                type="text"
                className="w-full p-2 rounded"
                ref={searchRef}
                placeholder="Cari..."
                onKeyDown={handleKeyPress}/>
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch;
