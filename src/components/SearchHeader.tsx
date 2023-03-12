import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from '@heroicons/react/20/solid'
import google from '../../public/assets/images/google.png';
import User from "./User";

export default function SearchHeader() {
    const router = useRouter();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const clearSearchInput = () => {
        if (searchInputRef.current) searchInputRef.current.value = ''
    }
    const search = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const term = searchInputRef.current?.value.trim()
        if (!term) return;
        router.push(`/search?term=${term}`)

    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image src={google}
                    onClick={() => router.push('/')}
                    alt="google"
                    draggable={false}
                    className="object-contain cursor-pointer"
                    placeholder={"blur"}
                    width={120} height={40} />
                <form onSubmit={search}
                    className="flex border
                              border-gray-200 
                                rounded-full 
                                shadow-lg px-6 py-3 ml-10 mr-5 
                                flex-grow max-w-3xl items-center">
                    <input type="text"
                        ref={searchInputRef}
                        className="w-full focus:outline-none"
                        defaultValue={router.query.term} />
                    <XMarkIcon onClick={clearSearchInput}
                        className="h-7 text-gray-500 
                                   cursor-pointer sm:mr-3" />
                    <MicrophoneIcon className="h-6 hidden 
                            sm:inline-flex
                          text-blue-500 pl-4 
                            border-l-2                            
                          border-gray-300 mr-3" />
                    <MagnifyingGlassIcon
                        className="h-6 hidden sm:inline-flex
                                 text-blue-500" />
                </form>
                <User className="ml-auto whitespace-nowrap" />
            </div>
        </header>
    )
}
