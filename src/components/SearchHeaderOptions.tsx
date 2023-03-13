import SearchHeaderOption from "./SearchHeaderOption";
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/20/solid'
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
    const { query } = useRouter();
    const searchType = query.searchType?.toString()
        .trim().toLocaleLowerCase() || '';
    return (
        <div className="flex space-x-8 
                        border-b
                        select-none w-full justify-center 
                        text-sm text-gray-700 lg:pl-52 
                        lg:justify-start">
            <SearchHeaderOption title="all" Icon={MagnifyingGlassIcon}
                selected={searchType === '' || searchType !== 'image'} />
            <SearchHeaderOption title="images" Icon={PhotoIcon}
                selected={searchType === 'image'} />
        </div>
    )
}
