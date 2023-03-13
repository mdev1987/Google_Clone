import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import mockResponse from '../mock-response.json'
import mockImageResponse from '../mock-image-response.json'
import ImageResults from "@/components/ImageResults";

export default function search({ results, error }: { results: any, error?: string }) {
    const router = useRouter()
    const searchTerm = `${router.query?.term?.toString().trim()} - Search Page`
    const searchType = router.query?.searchType === 'image'
    return (
        <>
            <Head>
                <title>{searchTerm}</title>
            </Head>
            <SearchHeader />
            {error ? (
                <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5 text-red-500 font-semibold">
                    {error}
                </div>
            ) : searchType ?
                (<ImageResults results={results} />) :
                (<SearchResults results={results} />)
            }
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const API_KEY = process.env.GOOGLE_SEARCH_ENGINE_API_KEY || ''
    const ENGINE_ID = process.env.GOOGLE_SEARCH_ENGINE_ID || ''
    const term = ctx.query.term;
    const searchType = (ctx.query?.searchType || '') === 'image' ? '&searchType=image' : '';
    const startIndex = ctx.query?.start ? Math.max(1, Math.min((Number(ctx.query.start)), 91)) : null;
    const startIndexTerm = startIndex ? `&start=${startIndex}` : '';
    // const mockData = true;
    // if (mockData) {
    //     return {
    //         props: {
    //             results: (ctx.query?.searchType || '') === 'image' ? mockImageResponse : mockResponse,
    //             error: null,
    //         }
    //     }
    // }
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}${searchType}${startIndexTerm}`,
        { method: 'GET' })
    if (response.ok) {
        return {
            props: {
                results: await response.json(),
                error: null,
            }
        }
    }
    return {
        props: {
            results: null,
            error: `Error (${response.status}): ${response.statusText}`
        }
    }
}