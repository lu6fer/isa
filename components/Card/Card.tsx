"use client"
import Image from "next/image"
import { useEffect } from "react"

export default function Card() {
    useEffect(() => {

    });

    return (
        <div>
            <Image className="img-card" src='https://dummyimage.com/250x300/eee/aaa' alt='dummy' width={250} height={360} />
        </div>
    )
}