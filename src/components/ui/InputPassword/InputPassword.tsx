import { ChangeEventHandler } from "react";

interface InputPasswordProps {
    id: string;
    name: string;
    hasError: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputPassword: React.FC<InputPasswordProps> = ({
    id,
    name,
    hasError,
    onChange
}) => {
    return (
        <input
            id={id}
            name={name}
            type="password"
            required
            autoComplete="password"
            onChange={onChange}
            className={`block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 ${ hasError ? "outline-red-500 focus:outline-red-500" : "outline-gray-300 focus:outline-green-700" } placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 text-lg`}
        />
    )
}

export default InputPassword;