import Image from "next/image";
import load from "../../public/clouds-spinner.gif"

export default function Loading() {
    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <Image src={load} alt=''></Image>
        </div>
    )
}