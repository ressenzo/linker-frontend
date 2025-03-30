import { InputEmail, InputPassword, MainButton } from "@/components/ui";
import { useEffect, useState } from "react";

export default function SignUp() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        if (password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword) {
            setHasError(true)
        } else {
            setHasError(false)
        }
    }, [password, confirmPassword])

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-green-700">
                    Linker
                </h1>
                <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign up
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <InputEmail
                                hasError={hasError}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <InputPassword
                                id="password"
                                name="password"
                                hasError={hasError}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                                Repeat password
                            </label>
                        </div>
                        <div className="mt-2">
                            <InputPassword
                                id="confirm-password"
                                name="confirm-password"
                                hasError={hasError}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-red-500">
                            {hasError ? "Passwords are not the same" : null}
                        </div>
                    </div>


                    <div>
                        <MainButton
                            text="Sign up"
                            disabled={hasError}
                        />
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-green-700 hover:text-green-800">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}