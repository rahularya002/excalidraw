
interface ToolButtonProps {
    onClick: () => void;
    className?: string;
    icon: React.ReactNode;
    activated?: boolean;
}

export const ToolButton = ({onClick, className, icon, activated}: ToolButtonProps) => {
    return(
        <button 
            onClick={onClick} 
            className={`p-2 hover:bg-gray-600/40 rounded-lg ${className } ${ activated ? 'bg-blue-600/40 hover:bg-blue-600/40' : '' }`}>{icon}
        </button>
    )
}