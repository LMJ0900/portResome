import Image from "next/image";
import "@/style/globals.css";
import menu from "@/public/images/메뉴.png"
import Main from "@/components/main"
import Info12 from "@/components/information"
import NextPage from "@/components/nextPage/page"
import ReactPage from "@/components/reactPage/page"
export default function Home() {
  return (<>
  <div className="group w-[4rem] h-[4rem] bg-black fixed">
    <Image width={300} height={300} src={menu}></Image>
    <ul className="group-hover:block hidden text-white bg-black opacity-70">
      <li><a href="#scroll1" classNameName="scroll_move">Main</a></li>
      <li><a href="#scroll2" classNameName="scroll_move">info</a></li>
      <li><a href="#scroll3" classNameName="scroll_move">nextJs</a></li>
      <li><a href="#scroll4" classNameName="scroll_move">react</a></li>
    </ul>
  </div>
  <div className="listbox">
  <div className="scroll1" id="scroll1"><Main></Main></div>
  <div className="scroll2" id="scroll2"><Info12></Info12></div>
  <div className="scroll3" id="scroll3"><NextPage></NextPage></div>
  <div className="scroll4" id="scroll4"><ReactPage></ReactPage></div>
</div>
  </>);
}
