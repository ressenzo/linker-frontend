interface MainButtonProps {
    text: string;
    disabled: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
    text,
    disabled
}) => {
    return (
        <button
            type="submit"
            className={`${disabled ? "opacity-50" : "cursor-pointer hover:bg-green-800"} flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default MainButton;
