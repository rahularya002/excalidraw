'use client'
import { useEffect, useRef, useState } from "react";
import { Tools } from "@/components/Tools";
import { draw } from "./draw";

export const Test = () => {
    const [shapeType, setShapeType] = useState<"rect" | "circle" | "line" | "pencil">("rect"); // Added "pencil"
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            draw(canvasRef.current, shapeType); // Pass selected shape to draw function
        }
    }, [shapeType]);

    if(!window){
        return ("undefined")
    }
    return (
        <div>
            <Tools shapeType={shapeType} setShapeType={setShapeType} />
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
        </div>
    );
};
