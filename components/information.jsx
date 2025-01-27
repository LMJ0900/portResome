import ComData from "./info/com"
export default function Information(){
    return(<>
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-black">
        <h1 className="font-bold text-[5rem] text-white pb-[20vh]">information</h1>
        <div className="flex">
        <ComData></ComData>
        </div>
    </div>
    </>)
}