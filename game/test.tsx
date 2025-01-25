'use client'

import { useEffect, useRef, useState } from "react"
import { draw } from "./draw"

export const Test = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect (() => {
        if (canvasRef.current) {
            
            draw(canvasRef.current)
        
          }
        
    }, [canvasRef])

    return(
        <div>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
            
        </div>
    )
}


