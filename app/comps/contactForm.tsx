'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Updated grid to stack on small screens */}
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
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" variant="ghost" size="icon" className="hover:bg-transparent">
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </form>
    </Form>
  )
}
