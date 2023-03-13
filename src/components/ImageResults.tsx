import PaginationButtons from "./PaginationButtons";

export default function ImageResults({ results }: { results: any }) {
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {results.items.map((result: any) => (
                    <div key={result.link} className="mb-8">
                        <div className="group">
                            <a target={'_blank'} href={result.image.contextLink}>
                                <img className="group-hover:shadow-xl w-full h-60 rounded object-contain"
                                    src={result.link}
                                    alt={result.title} />
                                <h2 className="group-hover:underline truncate text-lg">{result.title}</h2>
                                <p className="group-hover:underline text-gray-600" >{result.displayLink}</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <PaginationButtons />
        </div>
    )
}
