import { useLocation } from "react-router-dom";
import IconBack from "@/assets/Back.svg";
import { cn } from "@/lib/utils";

interface ButtonToBackProps extends React.HTMLAttributes<HTMLButtonElement>{
    iconSrc?: string 
    text?: string
}

export const ButtonToBack = ({text="Voltar", iconSrc, className, ...props}: ButtonToBackProps) => {
    const location = useLocation();

    const ToBackFn = ()=> {
        if(location.pathname === "/") return;
        window.history.back();
    }

    return (
        <button type="button" className={cn("flex items-center gap-1", className)} {...props} onClick={ToBackFn}>
            <img src={iconSrc??IconBack} alt="" />
            <span>{text}</span>
        </button>
    )
}