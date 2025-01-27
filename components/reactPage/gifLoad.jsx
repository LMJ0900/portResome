import { reactDb } from "../../data/reactDb"
import Image from "next/image"
function GifLoadCom({src,text,name}){
    return(<>
    <div className="flex flex-row mb-[5vh]">
    <div className="w-[30vw] h-[30vh] ml-10 ">
    <Image src={src} height={1000} width={1000} alt={name}></Image>
    </div>
    <h2 className="ml-10 w-[50vw] text-white">{text}</h2>
    </div>
    </>)
}
export default function gifLoad() {
    return (
        <>
        {reactDb.map((data)=><GifLoadCom key={data.id} src={data.src} text={data.text} name={data.name}></GifLoadCom>)}
        </>
    )
}