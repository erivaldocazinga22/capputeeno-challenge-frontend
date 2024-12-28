import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonToBackProps extends React.HTMLAttributes<HTMLButtonElement>{
    iconSrc?: string 
    text?: string
}

export const ButtonToBack = ({text="Voltar", className, ...props}: ButtonToBackProps) => {
    const location = useLocation();

    const ToBackFn = ()=> {
        if(location.pathname === "/") return;
        window.history.back();
    }

    return (
        <button type="button" className={cn("flex items-center gap-1", className)} {...props} onClick={ToBackFn}>
            <ArrowLeft />
            <span>{text}</span>
        </button>
    )
}