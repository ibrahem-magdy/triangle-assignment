"use client";

import { Locale } from "@/i18n.config";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Column from "./column-links";
import SocialLink from "./social-link";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { getDictionary } from "@/lib/dictionaries";

const Footer = ({ lang, dict }: { lang: Locale; dict: any }) => {
  interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
  }

  const column1Links: string[] = [
    dict.footer.column1.startup,
    dict.footer.column1.discoverHub,
    dict.footer.column1.partners,
    dict.footer.column1.events,
    dict.footer.column1.techLicense,
  ];

  const column2Links: string[] = [
    dict.footer.column2.invest,
    dict.footer.column2.startups,
    dict.footer.column2.careers,
    dict.footer.column2.programs,
    dict.footer.column2.contact,
  ];

  const column3Links: string[] = [
    dict.footer.column3.whoWeAre,
    dict.footer.column3.investors,
    dict.footer.column3.news,
    dict.footer.column3.reports,
    dict.footer.column3.feedback,
  ];

  const socialLinks: SocialLinkProps[] = [
    { href: "#", icon: <ImFacebook /> },
    { href: "#", icon: <FaInstagram /> },
    { href: "#", icon: <FaYoutube /> },
    { href: "#", icon: <FaLinkedinIn /> },
    { href: "#", icon: <FaTiktok /> },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-[#EFF1F5] py-[54px]">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 xl:grid-cols-[4fr_5fr] xl:gap-8 mb-16">
          <div>
            <motion.div
              className="relative h-18 w-20 mb-[50px]"
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/${lang}`}>
                <Image
                  src="/assets/images/logo.png"
                  alt="HUB71 Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </Link>
            </motion.div>

            <motion.div className="mb-[10px]" variants={itemVariants}>
              <motion.p
                className="text-3xl md:text-4xl lg:text-5xl mb-1"
                variants={headingVariants}
              >
                <span className="text-[#0347FF] text-3xl md:text-4xl lg:text-[80px]">
                  {dict.footer.get}
                </span>
              </motion.p>
              <motion.p
                className="text-3xl md:text-4xl lg:text-[80px] font-black text-[#0347FF]"
                variants={headingVariants}
                transition={{ delay: 0.1 }}
              >
                {dict.footer.inTouch}
              </motion.p>
            </motion.div>

            <motion.div className="mb-[20px]" variants={itemVariants}>
              <p className="text-black font-bold text-sm md:text-base lg:text-xl mb-1">
                {dict.footer.subscribe}
              </p>
              <p className="text-black font-bold text-sm md:text-base lg:text-xl">
                {dict.footer.toOurNewsletter}
              </p>
            </motion.div>

            <motion.div className="relative max-w-md" variants={itemVariants}>
              <motion.input
                type="email"
                placeholder={dict.footer.yourMail}
                className="w-full px-4 py-4 pe-34 border-1 border-black bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
              />
              <motion.button
                className={`absolute ${
                  lang === "ar" ? "left-0" : "right-0"
                } top-0 bottom-0 px-6 bg-transparent text-black font-bold text-sm flex items-center gap-2 hover:text-blue-600 transition-colors`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {dict.footer.subscribe}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronRight
                    className={`w-5 h-5 ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="mt-4 lg:mt-0 grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6">
              <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
                <Column links={column1Links} />
              </motion.div>
              <motion.div variants={itemVariants} transition={{ delay: 0.3 }}>
                <Column links={column2Links} />
              </motion.div>
              <motion.div variants={itemVariants} transition={{ delay: 0.4 }}>
                <Column links={column3Links} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 relative"
          variants={itemVariants}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent opacity-35"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <div className="flex gap-[35px]">
            <motion.a
              href="#"
              className="text-black text-xs hover:text-blue-600 transition-colors tracking-wider"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {dict.footer.privacyNotice}
            </motion.a>
            <motion.a
              href="#"
              className="text-black text-xs hover:text-blue-600 transition-colors tracking-wider"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {dict.footer.termsOfUse}
            </motion.a>
          </div>

          <motion.div
            className="flex gap-4 items-center"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.3,
                    },
                  },
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialLink {...link} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
