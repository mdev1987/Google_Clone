import { signIn, signOut, useSession } from "next-auth/react"

export default function User({ className }: { className: string }) {
    const { data: session } = useSession()
    if (session) {
        if (session.user?.image) {
            return (
                <>
                    <img className={`
                        ${className}
                        h-10 w-10 
                        rounded-full
                      hover:bg-gray-200 
                        cursor-pointer p-1`}
                        onClick={() => signOut()}
                        src={session.user?.image || ""} alt="user image" />
                </>
            )
        }
        const name = session.user?.name?.split(" ")
            .map(item => item.charAt(0))
            .join("").toUpperCase()
        return (
            <>
                <div onClick={() => signOut()}
                    className={`
                    ${className}
                    flex justify-center items-center
                    bg-blue-800
                    text-white h-10 w-10 
                    rounded-full hover:brightness-105 
                    hover:shadow-md cursor-pointer p-1`}>
                    <span>{name}</span>
                </div>
            </>
        )

    }
    return (
        <>
            <button className={`
            ${className}
            bg-blue-500 text-white 
            rounded-md px-6 py-2 font-medium 
            hover:brightness-105 
            hover:shadow-md`}
                onClick={() => signIn()}>Sign in</button>
        </>
    )
}
