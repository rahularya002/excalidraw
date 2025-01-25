'use client'

import { useEffect, useRef } from "react"
import { draw } from "./draw"

export const Test = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect (() => {
        if (canvasRef.current) {
            
            draw(canvasRef.current)
        
          }
        
    }, [canvasRef])

    return(
        <div className="">
            <canvas ref={canvasRef} width={1920} height={919}></canvas>
            
        </div>
    )
}


