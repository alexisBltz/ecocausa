"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Por favor, introduce un email válido.",
    }),
    message: z.string().min(10, {
        message: "El mensaje debe tener al menos 10 caracteres.",
    }),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Construir el mensaje para WhatsApp
        const message = `*Estoy muy interesado en formar parte de EcoKausa estos son mis datos, quiero reciclar/negociar*\n\nNombre: ${values.name}\nEmail: ${values.email}\nMensaje: ${values.message}`

        const whatsappURL = `https://wa.me/936224203?text=${encodeURIComponent(message)}`

        window.open(whatsappURL, "_blank")
    }

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container max-w-2xl">
                <h2 className="mb-12 text-center text-3xl font-bold">Unete a nosotros</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombres Completos</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Tu nombre" {...field} />
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
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="tu@email.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="¿En qué podemos ayudarte?, estamos atentos las 24h"
                                            className="min-h-[120px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                            Enviar mensaje a WhatsApp
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    )
}
