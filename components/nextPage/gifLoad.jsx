import { nextDb } from "../../data/nextDb"
import Image from "next/image"
import git from "@/public/images/git.png"
import Link from "next/link"
function GifLoadCom({src,text,name,url}){
    return(<>
    <div className="flex flex-row mb-[5vh]">
    <div className="w-[30vw] h-[30vh] ml-10 ">
    <Image src={src} height={1000} width={1000} alt={name} unoptimized={true}></Image>
    </div>
    <h2 className="ml-10 w-[50vw]">{text}</h2>
    <Link href={url} className="w-[5vw] h-[5vh]">
    <Image src={git} height={1000} width={1000} alt="gitIcon">
    </Image>
    </Link>
    </div>
    </>)
}
export default function gifLoad() {
    return (
        <>
        {nextDb.map((data)=><GifLoadCom key={data.id} src={data.src} text={data.text} name={data.name} url={data.url}></GifLoadCom>)}
        </>
    )
}