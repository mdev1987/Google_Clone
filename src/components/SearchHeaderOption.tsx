import { useRouter } from "next/router"

export default function SearchHeaderOption({ title, Icon, selected }: { title: string, selected: boolean, Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>> }) {
    const router = useRouter()
    const onChangeTab = () => {
        const searchType = title === 'images' ? '&searchType=image' : ''
        router.push(`/search?term=${router.query.term}${searchType}`)
    }
    return (
        <div onClick={onChangeTab}
            className={`flex items-center space-x-1 
                        border-b-4 hover:text-blue-500 cursor-pointer
                      hover:border-blue-500 pb-3 pr-2 
                        ${selected ?
                    'border-blue-500 text-blue-500' :
                    'border-transparent'}`}>
            <Icon className="h-4" />
            <p className="capitalize">{title}</p>
        </div >
    )
}

