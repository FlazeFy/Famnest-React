"use client"
import * as React from 'react'
import AtomText from '../atoms/a_text'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import Swal from "sweetalert2"
import { createFeedbackRepo } from '@/repositories/r_feedback'
import { consumeErrorAPI } from '@/helpers/message'
import AtomStarInput from '../atoms/a_star_input'

// Validation
const feedbackSchema = Yup.object({
    feedback_rate: Yup.number().required("Feedback rate is required").min(1, "Minimum rating is 1").max(5, "Maximum rating is 5"),
    feedback_body: Yup.string().required("Feedback body is required").max(255),
})

type FeedbackFormValues = Yup.InferType<typeof feedbackSchema>

interface IOrganismsFeedbackBoxProps {}

const OrganismsFeedbackBox: React.FunctionComponent<IOrganismsFeedbackBoxProps> = (props) => {  
    const form = useForm<FeedbackFormValues>({ resolver: yupResolver(feedbackSchema), defaultValues: { feedback_rate: 0, feedback_body: "" }})

    const onSubmit = async (values: FeedbackFormValues) => {
        try {
            const message = await createFeedbackRepo({
                feedback_rate: values.feedback_rate,
                feedback_body: values.feedback_body,
            })
    
            Swal.fire({
                icon: "success",
                title: "Done",
                text: message,
                confirmButtonText: "Continue explore!",
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
    
            form.reset()
        } catch (err: any) {
            consumeErrorAPI(err)
        }
    }
    
    return (
        <div className='shadow-lg rounded-2xl p-10 mt-5'>
            <AtomText type='sub-title' text='Give Us Feedback'/>
            <hr className='my-5'/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <Controller control={form.control} name="feedback_rate" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Rate us from 1 - 5</FormLabel>
                            <FormControl>
                                <AtomStarInput id="feedback_rate-input" value={field.value} handleChange={field.onChange} />
                            </FormControl>
                            <FormMessage>{form.formState.errors.feedback_rate?.message}</FormMessage>
                        </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="feedback_body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Feedback</FormLabel>
                                <FormControl>
                                    <Textarea style={{minHeight:"160px"}} placeholder="Type your feedback" {...field} />
                                </FormControl>
                                <FormMessage>{form.formState.errors.feedback_body?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                        { form.formState.isSubmitting ? "Sending..." : "Send the Feedback" }
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default OrganismsFeedbackBox;
