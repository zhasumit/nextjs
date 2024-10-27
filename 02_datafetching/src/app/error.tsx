"use client"
import somethingwentWrong from "./hehe.webp"
import Image from "next/image"

export default function Error({ error, reset }: any) {
    return <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
        <Image src={somethingwentWrong} alt="" height={350} ></Image>
        <h1>{error.message}</h1>
        <button onClick={reset} className="bg-neutral-700 p-2 px-6 rounded-md">Retry</button>
    </div>
}