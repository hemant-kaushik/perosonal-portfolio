import React, { useMemo } from "react";

interface buttonProps {
    id: string;
    type?: "button" | "submit";
    buttonType?: string;
    handleOnClick?: (e: any) => void;
    className?: string;
    children: React.ReactNode;
    disable?: boolean | any;
    isLoading?: boolean;
}

export const Button: React.FC<buttonProps> = ({
    id,
    type = 'button',
    buttonType = '',
    handleOnClick = () => { },
    className = "",
    children,
    disable = false,
    isLoading = false,
    ...rest

}) => {

    const styleType = useMemo(() => {
        switch (buttonType) {
            case "fill":
                return "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:brightness-110 hover:shadow-lg";
            default:
                return "bg-white border-[1px] border-solid border-gray-700 text-gray-800 font-medium hover:bg-gray-100 hover:shadow-md";
        }
    }, [buttonType]);

    return (
        <button
            type={type}
            id={id || ""}
            disabled={disable || isLoading}
            className={`
                flex flex-row items-center text-base font-medium justify-center cursor-pointer rounded-md px-4 py-2 uppercase
                transition-all duration-300 ease-in-out transform 
                ${(disable || isLoading)
                    ? "opacity-60 cursor-not-allowed"
                    : "opacity-100 hover:scale-[1.03]"} 
                ${isLoading ? '!bg-[#009196FF]' : ''} 
                ${styleType} ${className}
            `}
            onClick={handleOnClick}
            {...rest}
        >
            {isLoading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
                <>
                    {children}
                </>
            )}
        </button>
    );
};
