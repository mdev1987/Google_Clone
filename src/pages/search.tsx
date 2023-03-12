import SearchHeader from "@/components/SearchHeader";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function search() {

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
