"use client"
import React from "react"
import { z } from "zod"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Lock, MailIcon } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
    email: z.string().email("Niepoprawny email"),
})
const LoginForm = () => {
    const router = useRouter()
    const form = useForm({
        defaultValues: {
            password: "",
            email: "",
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            // toast("You submitted the following values:", {
            //     description: (
            //         <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            //             <code>{JSON.stringify(value, null, 2)}</code>
            //         </pre>
            //     ),
            //     position: "bottom-right",
            //     classNames: {
            //         content: "flex flex-col gap-2",
            //     },
            //     style: {
            //         "--border-radius": "calc(var(--radius)  + 4px)",
            //     } as React.CSSProperties,
            // })
            await authClient.signIn.email({
                email: value.email,
                password: value.password,
            },
                {
                    onSuccess: () => {
                        toast.success("Zalogowano pomyślnie")
                        form.reset()
                        router.push("/")
                    },
                    onError: () => {
                        toast.error("Nieprawidłowy email lub hasło")
                    }
                }
            )
        },

    })
    return (
        <div className='mt-2 flex flex-col gap-6'>
            <form
                id="login-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}
            >
                <FieldGroup>
                    <form.Field
                        name="email"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name} className='text-sm font-semibold'>Adres email</FieldLabel>
                                    <div className='relative'>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            type="email"
                                            placeholder="email@student.pl"
                                            className='pl-8 h-10'
                                        />
                                        <MailIcon className='w-4 h-4 text-secondary absolute left-2 top-1/2 -translate-y-1/2' />
                                    </div>
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                    <form.Field
                        name="password"
                        children={(field) => {
                            const isInvalid =
                                field.state.meta.isTouched && !field.state.meta.isValid
                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name} className='text-sm font-semibold'>Hasło</FieldLabel>
                                    <div className='relative'>
                                        <Lock className='w-4 h-4 text-secondary absolute left-2 top-1/2 -translate-y-1/2' />
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            type="password"
                                            placeholder="********"
                                            className='pl-8 h-10'
                                        />
                                    </div>
                                    {isInvalid && (
                                        <FieldError errors={field.state.meta.errors} />
                                    )}
                                </Field>
                            )
                        }}
                    />
                </FieldGroup>
            </form>
            <Button type="submit" form="login-form" className='w-full h-14 font-bold text-lg'>
                Zaloguj się
            </Button>
        </div>
    )
}

export default LoginForm