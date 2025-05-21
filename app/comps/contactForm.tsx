'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  message: z.string().min(1, 'Message is required'),
})

export type ContactFormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('')
  const [submitMessage, setSubmitMessage] = useState('')

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)
    setSubmitStatus('')
    setSubmitMessage('')

    const templateParams = {
      from_name: values.fullName,
      reply_to: values.email,
      phone: values.phone,
      message: values.message,
    }

    // --- START: Retrieve and Validate Environment Variables ---
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // This check ensures all three are actual strings before proceeding.
    // If any are missing, it sets an error and exits.
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set correctly. Please check your .env.local file and Netlify environment settings.");
      setSubmitStatus('error');
      setSubmitMessage('Configuration error: Unable to send email. Please contact support if this persists.');
      setIsSubmitting(false);
      return; // Exit the function if variables are missing
    }
    // --- END: Retrieve and Validate Environment Variables ---

    try {
      // By this point, TypeScript knows serviceId, templateId, and publicKey are strings
      // because of the guard clause above.
      await emailjs.send(
        serviceId,   // Now guaranteed to be a string
        templateId,  // Now guaranteed to be a string
        templateParams,
        publicKey    // Now guaranteed to be a string
      )

      setSubmitStatus('success')
      setSubmitMessage('Message sent successfully! We will get back to you soon.')
      form.reset()
    } catch (error) {
      console.error('EmailJS Send Error:', error)
      let errorMessage = 'Failed to send message. Please try again later.';
      // Attempt to get more specific error text from EmailJS
      if (typeof error === 'object' && error !== null && 'text' in error) {
         errorMessage = `Failed to send message. Server responded: ${(error as { text: string }).text}.`;
         console.error('EmailJS error details:', (error as { text: string }).text);
      } else if (error instanceof Error) {
        errorMessage = `Failed to send message: ${error.message}`;
      }
      setSubmitStatus('error')
      setSubmitMessage(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4">
        {/* FullName Field */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="FULL NAME *"
                  {...field}
                  className="border-0 border-b border-black rounded-none px-0 placeholder:text-black focus-visible:ring-0 focus-visible:border-black"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email and Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="EMAIL *"
                    type="email"
                    {...field}
                    className="border-0 border-b border-black rounded-none px-0 placeholder:text-black focus-visible:ring-0 focus-visible:border-black"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="PHONE *"
                    type="tel"
                    {...field}
                    className="border-0 border-b border-black rounded-none px-0 placeholder:text-black focus-visible:ring-0 focus-visible:border-black"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="MESSAGE *"
                  {...field}
                  className="border-0 border-b border-black rounded-none px-0 placeholder:text-black resize-none focus-visible:ring-0 focus-visible:border-black min-h-[100px]"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button and Message */}
        <div className="flex justify-end items-center">
          {submitMessage && (
            <p
              className={`mr-4 text-sm ${
                submitStatus === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {submitMessage}
            </p>
          )}
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="hover:bg-transparent"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <ArrowRight className="h-6 w-6" />
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}