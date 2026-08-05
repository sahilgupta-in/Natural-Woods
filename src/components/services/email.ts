import emailjs from "@emailjs/browser";

export interface ContactFormData 
extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (
  data: ContactFormData
) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};