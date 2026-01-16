"use client";
import { useFormik } from "formik";

import { MdRefresh } from "react-icons/md";

import { CustomInput, CustomSelect } from "@/components/shared";
import { Checkbox } from "@/components/ui/checkbox";
import validationSchema from "@/lib/validations/register";
import { Locale } from "@/i18n.config";
import { useMutation } from "@tanstack/react-query";
import { Register } from "@/lib/api/registeration";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const RegistrationForm = ({ lang, dict }: { lang: Locale; dict: any }) => {
  const { registrationForm: t } = dict;

  const mutation = useMutation({
    mutationFn: Register,
    onSuccess: (data) => {
      toast.success("Registration successful!", {
        description: "You have been registered successfully.",
      });
      formik.resetForm();
    },
    onError: (error: Error) => {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      jobTitle: "",
      companyWebsite: "",
      gender: "",
      hearAboutHub: "",
      interestedIn: "",
      country: "",
      agreeToMarketing: false,
    },
    validationSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    formik.handleSubmit(e);
  };

  return (
    <section className="bg-[#EFF1F57A] py-[40px] md:py-[65px] px-[30px]">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-[25px]">
          <p className="text-blue-600 font-bold text-xs md:text-sm mb-2 tracking-wider">
            {t.tagline}
          </p>
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold">
            {t.title}
            <br />
            {t.subtitle}
          </h2>
        </div>

        <div className="border-t-1 border-[#D9D9D9] pt-[25px]">
          <form onSubmit={handleSubmit} className="space-y-[10px]">
            <CustomInput
              type="text"
              name="firstName"
              placeholder={t.fields.firstName}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />

            <CustomInput
              type="text"
              name="lastName"
              placeholder={t.fields.lastName}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
            />

            <CustomInput
              type="email"
              name="email"
              placeholder={t.fields.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />

            <CustomInput
              type="text"
              name="companyName"
              placeholder={t.fields.companyName}
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.companyName}
              touched={formik.touched.companyName}
            />

            <CustomInput
              type="text"
              name="jobTitle"
              placeholder={t.fields.jobTitle}
              value={formik.values.jobTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.jobTitle}
              touched={formik.touched.jobTitle}
            />

            <CustomInput
              type="url"
              name="companyWebsite"
              placeholder={t.fields.companyWebsite}
              value={formik.values.companyWebsite}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.companyWebsite}
              touched={formik.touched.companyWebsite}
            />

            <CustomSelect
              name="gender"
              placeholder={t.fields.iAm}
              value={formik.values.gender}
              onValueChange={(value) => formik.setFieldValue("gender", value)}
              error={formik.errors.gender}
              touched={formik.touched.gender}
              options={[
                { value: "Male", label: t.options.gender.male },
                { value: "Female", label: t.options.gender.female },
              ]}
            />

            <CustomSelect
              name="hearAboutHub"
              placeholder={t.fields.howDidYouHear}
              label="Source"
              value={formik.values.hearAboutHub}
              onValueChange={(value) =>
                formik.setFieldValue("hearAboutHub", value)
              }
              error={formik.errors.hearAboutHub}
              touched={formik.touched.hearAboutHub}
              options={[
                {
                  value: "social-media",
                  label: t.options.howDidYouHear.socialMedia,
                },
                { value: "event", label: t.options.howDidYouHear.event },
                { value: "referral", label: t.options.howDidYouHear.referral },
                { value: "search", label: t.options.howDidYouHear.search },
                { value: "other", label: t.options.howDidYouHear.other },
              ]}
            />

            <CustomInput
              type="text"
              name="interestedIn"
              placeholder={t.fields.interestedIn}
              value={formik.values.interestedIn}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.interestedIn}
              touched={formik.touched.interestedIn}
            />

            <CustomSelect
              name="country"
              placeholder={t.fields.countryOfResidence}
              value={formik.values.country}
              onValueChange={(value) => formik.setFieldValue("country", value)}
              error={formik.errors.country}
              touched={formik.touched.country}
              options={[
                { value: "UAE", label: t.options.countries.uae },
                { value: "SA", label: t.options.countries.sa },
                { value: "US", label: t.options.countries.us },
                { value: "UK", label: t.options.countries.uk },
                { value: "other", label: t.options.countries.other },
              ]}
            />

            <div className="flex items-start gap-3 mt-[20px] mb-[35px]">
              <Checkbox
                id="agreeToMarketing"
                checked={formik.values.agreeToMarketing}
                onCheckedChange={(checked) => {
                  formik.setFieldValue("agreeToMarketing", checked);
                }}
                className="mt-1"
              />
              <label
                htmlFor="agreeToMarketing"
                className="text-xs sm:text-sm cursor-pointer"
              >
                {t.marketing}
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-between align-center gap-4">
              <button
                type="submit"
                className="px-16 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wider transition-colors"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <Spinner className="m-auto " />
                ) : (
                  t.buttons.submit
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  toast.success("Form cleared!", {
                    description: "All fields have been reset.",
                  });
                  formik.resetForm();
                }}
                className="px-8 py-4 bg-transparent text-sm transition-colors flex items-center justify-center gap-2 hover:text-blue-700"
              >
                <MdRefresh className="text-xl " />
                {t.buttons.clear}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
