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
                return "bg-gradient-to-r from-emerald-500 to-teal-600 text-white";
            default:
                return "bg-white border-[1px] border-solid border-gray-700 text-gray-800 font-medium";
        }
    }, [buttonType]);

    return (
        <button
            type={type}
            id={id || ""}
            disabled={disable || isLoading}
            className={
                `flex flex-row items-center text-base font-medium justify-center cursor-pointer rounded-md px-4 py-2 !uppercase
                ${(disable || isLoading)
                    ? "opacity-60 !cursor-not-allowed"
                    : "opacity-100"} 
                ${isLoading ?
                    '!bg-[#009196FF]'
                    : ''} ${styleType} ${className}`}
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
    )
}
