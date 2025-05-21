'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Loader2 } from 'lucide-react' // Added Loader2 for loading state
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useState } from 'react' // Import useState
import emailjs from '@emailjs/browser' // Import EmailJS

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

    // These are the parameters your EmailJS template expects
    // Ensure your template variables match these (e.g., {{from_name}}, {{reply_to}}, etc.)
    const templateParams = {
      from_name: values.fullName,
      reply_to: values.email, // EmailJS often uses 'reply_to' for the sender's email
      phone: values.phone,
      message: values.message,
      // You can add a 'to_name' if your template uses it, e.g., to_name: "Admin"
    }

    try {
      // If you haven't initialized EmailJS globally (e.g., in your _app.tsx or layout),
      // you can initialize it here or pass the public key directly to send().
      // emailjs.init(EMAILJS_PUBLIC_KEY); // Optional if passing public key to send()

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
      )

      setSubmitStatus('success')
      setSubmitMessage('Message sent successfully! We will get back to you soon.')
      form.reset() // Reset form fields on success
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setSubmitMessage('Failed to send message. Please try again later or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="FULL NAME *"
                    {...field}
                    className="border-0 border-b border-black rounded-none px-0 placeholder:text-black focus-visible:ring-0 focus-visible:border-black"
                    disabled={isSubmitting}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="EMAIL *"
                      type="email"
                      {...field}
                      className="border-0 border-b border-black rounded-none px-0 placeholder:text-black focus-visible:ring-0 focus-visible:border-black"
                      disabled={isSubmitting}
                    />
                  </div>
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
                  <div className="relative">
                    <Input
                      placeholder="PHONE *"
                      type="tel"
                      {...field}
                      className="border-0 border-b border-black rounded-none px-0 placeholder:text-black focus-visible:ring-0 focus-visible:border-black"
                      disabled={isSubmitting}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Textarea
                    placeholder="MESSAGE *"
                    {...field}
                    className="border-0 border-b border-black rounded-none px-0 placeholder:text-black resize-none focus-visible:ring-0 focus-visible:border-black min-h-[100px]"
                    disabled={isSubmitting}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end items-center"> {/* Added items-center for vertical alignment */}
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