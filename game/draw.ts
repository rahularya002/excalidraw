type Shapes = {
    type: "rect";
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    type: "circle";
    centerX: number;
    centerY: number; 
    radius: number;
} | {
    type: "line";
    endX: number;
    endY: number;
} | {
    type: "pencil";
    lastX: number;
    lastY: number;
};

export const draw = (canvas: HTMLCanvasElement, shapeType: "rect" | "circle" | "line" | "pencil") => {
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    let existingShapes: Shapes[] = [];

    if (!ctx) return;

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e) => {
        clicked = true;
        startX = e.clientX - rect.left;
        startY = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseup", (e) => {
        clicked = false;
        const width = (e.clientX - rect.left) - startX;
        const height = (e.clientY - rect.top) - startY;

        if (shapeType === "rect") {
            existingShapes.push({
                type: "rect",
                x: startX,
                y: startY,
                width: width,
                height: height
            });
        } else if (shapeType === "circle") {
            existingShapes.push({
                type: "circle",
                centerX: startX + width / 2,
                centerY: startY + height / 2,
                radius: Math.min(width, height) / 2
            });
        }

        clearCanvas(existingShapes, canvas, ctx);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (clicked) {
            const width = (e.clientX - rect.left) - startX;
            const height = (e.clientY - rect.top) - startY;
            clearCanvas(existingShapes, canvas, ctx);
            ctx.strokeStyle = "rgba(255, 255, 255)";

            if (shapeType === "rect") {
                ctx.strokeRect(startX, startY, width, height);
            } else if (shapeType === "circle") {
                const centerX = startX + width / 2;
                const centerY = startY + height / 2;
                const radius = Math.min(width, height) / 2;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
            }
        }
    });
};

function clearCanvas(existingShapes: Shapes[], canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0)";

    existingShapes.forEach((shape) => {
        ctx.strokeStyle = "rgba(255, 255, 255)";

        if (shape.type === "rect") {
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        } else if (shape.type === "circle") {
            ctx.beginPath();
            ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
        }
    });
}
