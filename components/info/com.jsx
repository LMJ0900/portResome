import Image from "next/image";
import { infoData } from "../../data/info";
function Com({src,data1,data2,data3,data4}){
    return(<>
    <div className="w-[22vw] flex flex-col items-center">
        <Image className="w-[5rem] h-[5rem]" src={src} width={1000} height={1000}></Image>
        <h1 className="text-white">{data1}</h1>
        <h1 className="text-white">{data2}</h1>
        <h1 className="text-white">{data3}</h1>
        <h1 className="text-white" >{data4}</h1>
    </div>   
    </>)
}
export default function comData() {
    return (
        <>
        {infoData.map((data)=><Com key={data.id} src={data.src} data1={data.data1} data2={data.data2} data3={data.data3} data4={data.data4}></Com>)}
        </>
    )
}