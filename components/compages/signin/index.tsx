"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { forgot_page } from "@/lib/router";
import { forgot_content, login_content } from "@/lib/content";
import { SigninSchema } from "@/components/validation/schema";

export const SigninComponent = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: z.infer<typeof SigninSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
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
