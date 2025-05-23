// "use client";
// import React, { useEffect, useRef } from "react";
// import { useToast } from "@/components/ui/use-toast";
// import LabelWithAsterik from "@/components/LabelWithAsterik";
// import { Button } from "@/components/ui/button";
// import { CardContent, CardHeader } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { TContactForm, contactFormSchema } from "@/schemas/contact.schema";
// import { Loader2 } from "lucide-react";

// import emailjs from "@emailjs/browser";
// import {
//   getPublicKey,
//   getServiceID,
//   getTemplateId,
// } from "@/server/constants/contact";
// import { sendMail } from "@/server/actions/email.action";

// const content = {
//   en: {
//     feedback: "Send a message",
//     name: "Full name",
//     email: "Email",
//     desc: "Message",
//     send: "Send Message",
//     sending: "Sending Message",
//   },
//   np: {
//     feedback: "हामीलाई आफ्नो प्रतिक्रिया पठाउनुहोस्",
//     name: "पुरा नाम",
//     email: "इमेल ",
//     subject: "बिषय",
//     desc: "विवरण",
//     send: "सन्देश पठाउनुहोस्",
//     sending: "सन्देश पठाउँदै",
//   },
// };

// export const Form = ({ lang }: { lang: string }) => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const { toast } = useToast();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<TContactForm>({
//     resolver: zodResolver(contactFormSchema),
//   });

//   const onSubmit = async (payload: TContactForm) => {
//     await sendMail(payload);

//     if (true) {
//       reset();
//       toast({
//         title: "Thank You for contacting us. 🎉",
//         description:
//           "We've got your inquiry and are on it! Expect a response soon. Your thoughts matter to us! 🤝",
//         variant: "success",
//       });
//       return;
//     } else {
//       toast({
//         title: "Sorry something went wrong. 🚫",
//         description:
//           "Looks like there's a small glitch in the system. Please verify your information and resend your message. We're working to fix this issue! 🛠️",
//       });
//       return;
//     }
//   };

//   useEffect(() => {
//     console.log(errors);
//   }, [errors]);

//   return (
//     <div className="px-8">
//       <form
//         ref={formRef}
//         method="POST"
//         onSubmit={handleSubmit(onSubmit)}
//         action=""
//         className="rounded-xl bg-white md:w-[80%]"
//       >
//         <span className="mb-2 block rounded-md bg-primary py-1 text-center font-semibold text-white">
//           {content[lang as keyof typeof content].feedback}
//         </span>
//         <div className="rounded-xl border p-0">
//           <CardHeader>
//             <CardContent className="flex flex-col gap-4 p-0">
//               <div className="flex-1">
//                 <div className="flex flex-col gap-3">
//                   <LabelWithAsterik>
//                     {content[lang as keyof typeof content].name}
//                   </LabelWithAsterik>
//                   <Input
//                     {...register("fullName")}
//                     className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
//                     placeholder="Enter your Name"
//                   />
//                 </div>

//                 <p className="text-xs text-red-500">
//                   {errors ? errors.fullName?.message : ""}
//                 </p>
//               </div>
//               <div className="flex gap-2">
//                 <div className="flex-1">
//                   <div className="flex flex-1 flex-col gap-3">
//                     <LabelWithAsterik>
//                       {content[lang as keyof typeof content].email}
//                     </LabelWithAsterik>

//                     <Input
//                       {...register("email")}
//                       className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
//                       placeholder="Enter your email"
//                     />
//                   </div>

//                   <p className="text-xs text-red-500">
//                     {errors ? errors.email?.message : ""}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex flex-col gap-3">
//                   <LabelWithAsterik>
//                     {content[lang as keyof typeof content].desc}
//                   </LabelWithAsterik>
//                   <Textarea
//                     rows={5}
//                     {...register("description")}
//                     className="focus:ring-none bg-gray-50 font-normal  text-neutral-800 focus:outline-none"
//                     placeholder="Describe your enquiry here"
//                   />
//                 </div>
//                 <p className="text-xs text-red-500">
//                   {errors ? errors.description?.message : ""}
//                 </p>
//               </div>
//             </CardContent>
//             <div className="flex  items-center justify-between gap-3 py-3">
//               <Button disabled={isSubmitting} className="w-full text-white">
//                 {isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <Loader2 size={20} className="animate-spin" />
//                     Cancelling
//                   </span>
//                 ) : (
//                   "Cancel"
//                 )}
//               </Button>
//               <Button disabled={isSubmitting} className="w-full text-white">
//                 {isSubmitting ? (
//                   <span className="flex items-center justify-center gap-2">
//                     <Loader2 size={20} className="animate-spin" />
//                     Submitting
//                   </span>
//                 ) : (
//                   "Submit"
//                 )}
//               </Button>
//             </div>
//           </CardHeader>
//         </div>
//       </form>
//     </div>
//   );
// };
"use client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// Zod schema for form validation
const contactFormSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type TContactForm = z.infer<typeof contactFormSchema>;

const content = {
  en: {
    feedback: "Send a message",
    name: "Full name",
    email: "Email",
    desc: "Message",
    send: "Send Message",
    sending: "Sending Message",
    cancel: "Cancel",
  },
  np: {
    feedback: "हामीलाई आफ्नो प्रतिक्रिया पठाउनुहोस्",
    name: "पुरा नाम",
    email: "इमेल ",
    subject: "बिषय",
    desc: "विवरण",
    send: "सन्देश पठाउनुहोस्",
    sending: "सन्देश पठाउँदै",
    cancel: "रद्द गर्नुहोस्",
  },
};

export const ContactForm = ({ lang = "en" }: { lang?: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof TContactForm, string>>
  >({});
  const { toast } = useToast();

  const validateForm = (formData: FormData): boolean => {
    const data = {
      from_name: formData.get("from_name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      contactFormSchema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof TContactForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof TContactForm] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!validateForm(formData)) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      if (result.text === "OK") {
        toast({
          title: "Thank You for contacting us! 🎉",
          description: "We've received your message and will respond soon.",
          variant: "success",
        });
        form.reset();
        setErrors({});
      }
    } catch (error) {
      toast({
        title: "Sorry, something went wrong. 🚫",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Email send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = (event: React.FormEvent<HTMLFormElement>) => {
    event.currentTarget.reset();
    setErrors({});
  };

  return (
    <div className="px-8">
      <form method="POST" onSubmit={handleSubmit} onReset={handleCancel}>
        <span className="mb-2 block rounded-md py-1 text-start font-semibold">
          {content[lang as keyof typeof content].feedback}
        </span>
        <div>
          <CardHeader>
            <CardContent className="flex flex-col gap-6 p-0">
              <div className="flex-1">
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-medium">
                    {content[lang as keyof typeof content].name}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="from_name"
                    required
                    className="h-12 bg-gray-50 px-4 text-base font-normal text-neutral-800 focus:outline-none"
                    placeholder="Enter your Name"
                  />
                  {errors.from_name && (
                    <span className="text-sm text-red-500">
                      {errors.from_name}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-medium">
                    {content[lang as keyof typeof content].email}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    className="h-12 bg-gray-50 px-4 text-base font-normal text-neutral-800 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">{errors.email}</span>
                  )}
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <label className="text-lg font-medium">
                    {content[lang as keyof typeof content].desc}
                    <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    className="min-h-[120px] bg-gray-50 p-4 text-base font-normal text-neutral-800 focus:outline-none"
                    placeholder="Describe your enquiry here"
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500">
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>

            <div className="flex items-center justify-start gap-4 py-4">
              <Button
                type="reset"
                variant="outline"
                className="h-11 w-32 border-button text-base text-button"
              >
                {content[lang as keyof typeof content].cancel}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 w-32 bg-button text-base text-white"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </Button>
            </div>
          </CardHeader>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
