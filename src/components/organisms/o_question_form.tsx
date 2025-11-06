"use client"
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import Swal from "sweetalert2"

// Validation
const questionSchema = Yup.object({
    email: Yup.string().required("Email is required").min(10).test(
        "is-gmail",
        "Email must end with @gmail.com",
        (val: string) => val ? val.endsWith("@gmail.com") : false
    ),
    question: Yup.string().required("Question is required").max(255),
})

type SignUpFormValues = Yup.InferType<typeof questionSchema>

interface IOrganismsQuestionBoxProps {
}

const OrganismsQuestionBox: React.FunctionComponent<IOrganismsQuestionBoxProps> = (props) => {  
    const form = useForm<SignUpFormValues>({ resolver: yupResolver(questionSchema), defaultValues: { email: "", question: "" }})

    const onSubmit = async (values: SignUpFormValues) => {
        try {
            Swal.fire({
                icon: "success",
                title: "Done",
                text: `Question sended!`,
                confirmButtonText: "Continue explore!",
                allowOutsideClick: false,
                allowEscapeKey: false,
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
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-10 gap-10">
            <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center text-center lg:text-left mx-auto" style={{maxWidth:"720px"}}>
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
                            <FormField control={form.control} name="question"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Question</FormLabel>
                                        <FormControl>
                                            <Textarea style={{minHeight:"160px"}} placeholder="Type your question" {...field} />
                                        </FormControl>
                                        <FormMessage>{form.formState.errors.question?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {
                                    form.formState.isSubmitting ? "Sending..." : "Send the Question"
                                }
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/3 flex flex-col justify-center text-center lg:text-left mb-6 md:mb-0">
                <AtomText type="sub-title" text="Ask Me A Question" />
                <AtomText type="content" text="Confused with how application works? or maybe need assistance to do something in our apps? Feel free to ask" />
            </div>
        </div>
    );
};

export default OrganismsQuestionBox;
