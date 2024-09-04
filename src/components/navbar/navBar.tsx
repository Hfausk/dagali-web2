"use client"

import Image from 'next/image'
import BitforBit from '../../../public/bfb_logo.svg'

export default function NavBar() {

    const NavBarIcon = ({ icon, address }: { icon: string, address: string }): JSX.Element =>
        <Image 
        src={BitforBit}
        alt='logo'
        width={200}
        height={200}
        ></Image>
        // <span className=" text-xl tracking-wider flex items-center content-center p-5 bg-blue-500 rounded">{icon}</span>
    const NavBarItem = ({ label,  address }: { label: string, address: string }): JSX.Element =>
        <a className=" text-xl tracking-wider flex items-center content-center px-5 py-2 hover:bg-Tertiary hover:text-white rounded" href={address}>{label}</a>
    const NavBarButton = ({  address, label }: { address: string, label:string }): JSX.Element =>
        <span className=" text-xl tracking-wider  px-20 rounded flex items-center content-center text-gray-200 bg-Tertiary">{label}</span>

    return (
            
            <div className="flex flex-row justify-between items-center gap-4 px-4 py-2">
                <NavBarIcon icon="Icon" address="./" />
                <div className="flex flex-row gap-10">
                    <NavBarItem label="Kart" address="/kart" />
                    <NavBarItem label="Info & priser" address="/info" />
                    <NavBarItem label="Husregler" address="/husregler" />
                    <NavBarItem label="Kontakt oss" address="/kontakt" />
                    <NavBarButton label="Bestill her" address="/bestill" />
                    
                </div>
            </div>
    )
}