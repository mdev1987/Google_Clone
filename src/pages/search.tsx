import SearchHeader from "@/components/SearchHeader";
import { GetServerSideProps } from "next";
import Head from "next/head";
import mockResponse from '../mock-response.json'

export default function search({ data, error }: { data: any, error?: string }) {
    return (
        <>
            <Head>
                <title>Search Page</title>
            </Head>

            <SearchHeader />


            {/* Search Result */}
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const API_KEY = process.env.GOOGLE_SEARCH_ENGINE_API_KEY || ''
    const ENGINE_ID = process.env.GOOGLE_SEARCH_ENGINE_ID || ''
    const term = ctx.query.term;
    const searchType = (ctx.query?.searchType || '') === 'images' ? '&searchType=image' : '';
    const mockData = true;
    if (mockData) {
        return {
            props: {
                error: false,
                data: mockResponse
            }
        }
    }
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}${searchType}`,
        { method: 'GET' })
    if (response.ok) {
        return {
            props: {
                data: await response.json(),
                error: false
            }
        }
    }
    return {
        props: {
            data: null,
            error: `Error: ${response.status}: ${response.statusText}`
        }
    }
}