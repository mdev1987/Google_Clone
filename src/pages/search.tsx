import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import mockResponse from '../mock-response.json'

export default function search(props: any) {
    const router = useRouter()
    const searchTerm = `${router.query?.term?.toString().trim()} - Search Page`
    return (
        <>
            <Head>
                <title>{searchTerm}</title>
            </Head>
            <SearchHeader />
            <SearchResults {...props} />
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const API_KEY = process.env.GOOGLE_SEARCH_ENGINE_API_KEY || ''
    const ENGINE_ID = process.env.GOOGLE_SEARCH_ENGINE_ID || ''
    const term = ctx.query.term;
    const searchType = (ctx.query?.searchType || '') === 'images' ? '&searchType=image' : '';
    const startIndex = ctx.query?.start ? Math.max(1, Math.min((Number(ctx.query.start)), 91)) : null;
    const startIndexTerm = startIndex ? `&start=${startIndex}` : '';
    const mockData = true;
    if (mockData) {
        return {
            props: {
                results: mockResponse,
                error: null,
            }
        }
    }
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