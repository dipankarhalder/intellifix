"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { dashboard, forgot_page } from "@/lib/router";
import { forgot_content, login_content } from "@/lib/content";
import { SigninSchema } from "@/components/validation/schema";

export const SigninComponent = () => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof SigninSchema>) => {
    if (data.email === "dipankar.spring@gmail.com" && data.password === "Dip@123456") {
      router.push(dashboard)
    } else {
      toast({
        variant: "destructive",
        title: "Opps! Something went wrong.",
        description: "The email or password you entered is incorrect.",
      })
    }
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="you@example.com" 
                  {...field} 
                  className="h-12 px-5" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="********" 
                  {...field} 
                  className="h-12 px-5" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-right text-sm mt-4">
          <p>
            <Link 
              href={forgot_page} 
              className="font-medium underline hover:text-blue-700">
              {forgot_content.forgot_text}
            </Link>
          </p>
        </div>
        <Button className="w-full h-12" type="submit">
          {login_content.login}
        </Button>
      </form>
    </Form>
  )
}
