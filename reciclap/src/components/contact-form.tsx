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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Send, Users, Phone, Mail } from "lucide-react"

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
        const message = `*Consulta sobre EcoKausa - Prototipo*\n\nNombre: ${values.name}\nEmail: ${values.email}\nMensaje: ${values.message}`
        const whatsappURL = `https://wa.me/936224203?text=${encodeURIComponent(message)}`
        window.open(whatsappURL, "_blank")
    }

    return (
        <section id="contact" className="py-32 bg-gradient-to-t from-emerald-50 to-white">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                        <Users className="mr-2 h-4 w-4" />
                        Contacto
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        ¿Tienes alguna consulta?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Contáctanos para conocer más sobre nuestro prototipo de plataforma de reciclaje
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {/* Información de contacto */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Información de contacto
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Estamos desarrollando una solución innovadora para el reciclaje. 
                                Contáctanos si tienes preguntas sobre el proyecto.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                    <Phone className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Teléfono</p>
                                    <p className="text-gray-600">+51 936 224 203</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                    <Mail className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <p className="text-gray-600">contacto@ecokausa.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">WhatsApp</p>
                                    <p className="text-gray-600">Prototipo en desarrollo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <Card className="border-0 shadow-xl bg-white">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-2xl text-center">
                                Envíanos un mensaje
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 font-medium">
                                                    Nombre
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Tu nombre"
                                                        className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                                        {...field}
                                                    />
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
                                                <FormLabel className="text-gray-700 font-medium">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="tu@email.com"
                                                        type="email"
                                                        className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                                        {...field}
                                                    />
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
                                                <FormLabel className="text-gray-700 font-medium">
                                                    Mensaje
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="¿Qué te gustaría saber sobre nuestro prototipo?"
                                                        className="min-h-[120px] border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold group"
                                    >
                                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        Enviar consulta
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
