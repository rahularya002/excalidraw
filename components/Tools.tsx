'use client'

import { Circle, Minus, Pencil, Square } from "lucide-react"
import { useState } from "react"

export const Tools = () => {
    const [ isClicked, setIsClicked ] = useState(false)

    

    return (
        <div className="fixed top-2 inset-x-0 z-10 rounded-md bg-toolbar w-52 h-12 mx-auto">
            <div className="flex gap-2 items-center justify-center h-12">
                <button className="p-2 hover:bg-gray-600/40 rounded-lg focus:bg-blue-600/40"><Square color="white" strokeWidth={1}/></button>
                <button className="p-2 hover:bg-gray-600/40 rounded-lg focus:bg-blue-600/40"><Circle color="white" strokeWidth={1}/></button>
                <button className="p-2 hover:bg-gray-600/40 rounded-lg focus:bg-blue-600/40"><Minus color="white" strokeWidth={1}/></button>
                <button className="p-2 hover:bg-gray-600/40 rounded-lg focus:bg-blue-600/40"><Pencil color="white" strokeWidth={1}/></button>
            </div>
        </div>
    )
}