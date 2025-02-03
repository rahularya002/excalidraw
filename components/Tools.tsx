import { Circle, Minus, Pencil, Square } from "lucide-react";
import { ToolButton } from "./ui/ToolButton";

export const Tools = ({
    shapeType,
    setShapeType,
}: {
    shapeType: "rect" | "circle" | "line" | "pencil";
    setShapeType: (shape: "rect" | "circle" | "line" | "pencil") => void;
}) => {
    return (
        <div className="fixed top-2 inset-x-0 z-10 rounded-md bg-toolbar w-52 h-12 mx-auto">
            <div className="flex gap-2 items-center justify-center h-12">
                <ToolButton
                    onClick={() => setShapeType("rect")}
                    icon={<Square color="white" strokeWidth={1} />}
                    activated={shapeType === "rect"} // Activate if selected
                />
                <ToolButton
                    onClick={() => setShapeType("circle")}
                    icon={<Circle color="white" strokeWidth={1} />}
                    activated={shapeType === "circle"}
                />
                <ToolButton
                    onClick={() => setShapeType("line")}
                    icon={<Minus color="white" strokeWidth={1} />}
                    activated={shapeType === "line"}
                />
                <ToolButton
                    onClick={() => setShapeType("pencil")}
                    icon={<Pencil color="white" strokeWidth={1} />}
                    activated={shapeType === "pencil"}
                />
            </div>
        </div>
    );
};
