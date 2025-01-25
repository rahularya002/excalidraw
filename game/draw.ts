type Shapes = {
    type: "rect"
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    type : "circle"
    centerX: number;
    centerY: number; 
    radius: number;
}


export const draw = (canvas: HTMLCanvasElement) => {
    
    const ctx = canvas.getContext("2d");

    let existingShapes: Shapes[] = []

    if(!ctx){
        return
    }

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e) => {
        clicked = true
        startX = e.clientX
        startY = e.clientY
    })

    canvas.addEventListener("mouseup", (e) => {
        clicked = false
        const width = e.clientX - startX
        const height = e.clientY - startY
        existingShapes.push({
            type: "rect",
            x: startX,
            y: startY,
            width: width,
            height: height
        })
    })

    canvas.addEventListener("mousemove", (e) => {
        if(clicked){
            const width = e.clientX - startX
            const height = e.clientY - startY
            clearCanvas(existingShapes, canvas, ctx)
            ctx.strokeStyle = "rgba(255, 255, 255)"
            ctx.strokeRect(startX, startY, width, height)
        }
    })
}

function clearCanvas(existingShapes: Shapes[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    ctx.clearRect(0, 0, canvas.width, canvas.height )
    ctx.fillStyle = "rgba(0, 0, 0 )"

    existingShapes.map((shapes) => {
        if(shapes.type === "rect"){
            ctx.strokeStyle = "rgba(255, 255, 255)"
            ctx.strokeRect(shapes.x, shapes.y, shapes.width, shapes.height)
        }
    })
}