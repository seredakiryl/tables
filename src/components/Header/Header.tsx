'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {HEADER_CONFIG} from "@/components/Header/Header.meta";


const Header = () => {

    const pathname = usePathname();

    return (
        <div className={'h-14 flex justify-center items-center bg-strokeDark'}>
            <div className={'flex gap-10 uppercase'}>
                {HEADER_CONFIG.map((link, key) =>
                    <Link
                        key={key}
                        href={link.link}
                        className={`${pathname.includes(link.link) && 'text-red-600'}`}>{link.name}</Link>)}
            </div>
        </div>
    )
}

export default Header