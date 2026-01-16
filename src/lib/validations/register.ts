// lib/validations/register.ts
import * as Yup from "yup";
import type { Locale } from "@/i18n.config";

const validationMessages = {
  en: {
    required: "This field is required",
    email: "Invalid email address",
    url: "Invalid URL format",
  },
  ar: {
    required: "هذا الحقل مطلوب",
    email: "عنوان البريد الإلكتروني غير صالح",
    url: "تنسيق URL غير صالح",
  },
};

const validationSchema = (lang: Locale = "en") => {
  const messages = validationMessages[lang];

  return Yup.object({
    firstName: Yup.string().required(messages.required),
    lastName: Yup.string().required(messages.required),
    email: Yup.string().email(messages.email).required(messages.required),
    companyName: Yup.string().required(messages.required),
    jobTitle: Yup.string().required(messages.required),
    companyWebsite: Yup.string().url(messages.url).required(messages.required),
    gender: Yup.string().required(messages.required),
    hearAboutHub: Yup.string(),
    interestedIn: Yup.string(),
    country: Yup.string(),
    agreeToMarketing: Yup.boolean(),
  });
};

export default validationSchema;
