"use client"
import * as React from 'react';
import AtomButton from '../atoms/a_button';
import AtomText from '../atoms/a_text';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

const loginSchema = Yup.object({
    email: Yup.string().required("Email is required").min(10).test(
        "is-gmail",
        "Email must end with @gmail.com",
        (val: string) => val ? val.endsWith("@gmail.com") : false
    ),
    password: Yup.string().required("Password is required").min(6),
})

type SignUpFormValues = Yup.InferType<typeof loginSchema>

interface IWelcomeBoxProps {
}

const OrganismsWelcomeBox: React.FunctionComponent<IWelcomeBoxProps> = (props) => {
    const router = useRouter()

    const form = useForm<SignUpFormValues>({ resolver: yupResolver(loginSchema), defaultValues: { email: "", password: "" }})

    const onSubmit = async (values: SignUpFormValues) => {
        try {
            Swal.fire({
                icon: "success",
                title: "Done",
                text: `Welcome ...!`,
                confirmButtonText: "Explore now!",
                allowOutsideClick: false,
                allowEscapeKey: false,
            }).then((result:any) => {
                router.push("/")
            })
        } catch (err: any) {
            Swal.fire({
                icon: "error",
                title: "I'm sorry",
                text: err.response.data.message,
            })
        }
    }

    return (
        <div className='flex flex-wrap text-center lg:text-start w-full'>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col justify-between text-center bg-cover p-5 md:p-7 lg:p-10 relative'
                style={{backgroundImage:"url('/background/background-1.jpg')"}}>
                <AtomText type='sub-title' text='Famnest'/>
                <AtomText type='sub-title' text='Build your dream family'/>
                <div className="absolute inset-0 bg-black/25 rounded-2xl"></div>
            </div>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col justify-between px-0 py-10 lg:px-10 lg:py-0'>
                <div>
                    <AtomText type='sub-title' text='Redefining how families plan, share, and grow together'/>
                </div>
                <div className='my-10 border-2 border-black p-5 rounded-2xl md:my-0 lg:my-0 shadow-lg'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField control={form.control} name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField control={form.control} name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {
                                    form.formState.isSubmitting ? "Let me check first..." : "Sign In"
                                }
                            </Button>
                        </form>
                    </Form>
                </div>
                <div>
                    <div className='flex gap-2 mb-3'>
                        <AtomButton type='btn-primary' text='Give me A Tour'/>
                        <AtomButton type='btn-primary' text='Register My Family'/>
                    </div>
                    <AtomText type='content' text='Experience seamless coordination for every family member, from tasks and schedules to goals and memories. Discover how smart family management can bring balance, joy, and togetherness into everyday life.'/>
                </div>
            </div>
        </div>
    )
};

export default OrganismsWelcomeBox;
