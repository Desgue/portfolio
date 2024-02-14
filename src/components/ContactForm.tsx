import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name must not be empty."
    }),
    email: z.string().email( {
      message: "Email must be valid.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters long."
    }),
  })

  function onSubmitHandler(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
      })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>

              <FormControl>
                <Input className=" focus-visible:ring-[#6E07F3]" placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
  
              <FormControl>
                <Input className=" focus-visible:ring-[#6E07F3]" placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                We'll never share your email with anyone else.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>

              <FormControl>
                <Textarea  className=" h-[200px] " placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-[420px] border-[#6E07F3]  text-[#6E07F3] font-medium  hover:bg-[#6E07F3] hover:text-white" variant="outline">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm