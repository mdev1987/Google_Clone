import Header from "@/components/Header";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from "next-auth/react"
import Image from "next/image";
import google from '../../../public/assets/images/google.png'

export default function signin({ providers }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> }) {
    return (
        <>
            <Header />
            <div className="mt-36">
                {Object.values(providers).map(provider => (
                    <div className="flex flex-col items-center" key={provider.id}>
                        <Image
                            draggable={false}
                            className="w-52 object-cover"
                            src={google}
                            placeholder={'blur'}
                            alt="google" />
                        <p className="text-sm italic my-10 text-center">This website is created for study case</p>
                        <button className="bg-red-500 rounded-lg text-white p-3 hover:bg-red-600"
                            onClick={() => signIn(provider.id, { callbackUrl: '/' })}>Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </>
    )
}


export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}