import git from "@/public/images/git.png"
import notion from "@/public/images/notion.png"
import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return (<>
        <footer className="w-[100vw] h-[20vh] flex justify-center items-center bg-white">
            <ul className="w-[20vw] h-[10vw] space-x-8 flex justify-center items-center">
                <li className="w-[5vw] h-[5vh]">
                    <Link href="https://github.com/LMJ0900/" >
                        <Image src={git} height={1000} width={1000} alt="gitIcon">
                        </Image>
                    </Link>
                </li>
                <li className="w-[5vw] h-[5vh]">
                    <Link href="https://www.notion.so/ed04813bd5114dd591fe1b26c100c89a" >
                        <Image src={notion} height={1000} width={1000} alt="notionIcon">
                        </Image>
                    </Link>
                </li>
            </ul>
        </footer>
    </>)
}