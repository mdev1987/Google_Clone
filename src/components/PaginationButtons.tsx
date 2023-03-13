import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function PaginationButtons() {
    const router = useRouter()
    const term = router.query?.term?.toString() || ''
    const searchType = router.query?.searchType ? `&searchType=${router.query.searchType}` : '';
    const startIndex = Math.max(1, Math.min((router.query?.start ? Number(router.query.start) : 1), 91));
    return (
        <div className='flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0 text-blue-700'>

            {(startIndex > 1) ? (<Link href={`/search?term=${term}${searchType}&start=${Math.max(1, startIndex - 10)}`}>
                <div className='cursor-pointer flex flex-col items-center hover:underline'>
                    <ChevronLeftIcon className='h-5' />
                    <p >Prev</p>
                </div>
            </Link>) : (<div className='flex flex-col items-center text-gray-500'>
                <ChevronLeftIcon className='h-5' />
                <p >Prev</p>
            </div>)}


            {(startIndex < 91) ? (<Link href={`/search?term=${term}${searchType}&start=${Math.min(startIndex + 10, 91)}`}>
                <div className='cursor-pointer flex flex-col items-center hover:underline'>
                    <ChevronRightIcon className='h-5' />
                    <p >Next</p>
                </div>
            </Link>) : (<div className='flex flex-col items-center text-gray-500'>
                <ChevronRightIcon className='h-5' />
                <p >Next</p>
            </div>)}
        </div>
    )
}
