"use client"
import Image from 'next/image'
import { useState } from 'react';

import { StaticImageData } from 'next/image';
import { Calendar } from '../ui/calendar';
import { DateRange } from 'react-day-picker';
import { Button } from '../ui/button';

export default function InfoCard({ source, title }: { source: StaticImageData, title: string }): JSX.Element {

    const [selectRange, setSelectRange] = useState<DateRange>()

    return (

        <div className=" flex flex-col flex-1 bg-white/35 m-2 rounded h-[350px]">
            <div className=" h-full border-r-2 border-main-brown text-center" >
                <Image src={source} alt='picture of room' objectFit='cover'  className='w-full h-full top-0 left-0 object-cover rounded-sm'></Image>
            </div>
            <div className=" h-full border-r-2 border-main-brown  flex-grow-[2] " >
                <span className=' bg-red-500'>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-sm opacity-50">description</p>
                    
                </span>

            </div>
            <div className=" h-full text-center  flex flex-col justify-center items-center" >
                <Calendar
                mode='range'
                selected={selectRange}
                onSelect={setSelectRange}
                className='rounded-md'
                />
            <Button className='w-1/2' onClick={() => console.log(selectRange)}>Bestill"(pris)"</Button>
            </div>
        </div>


    )
}
