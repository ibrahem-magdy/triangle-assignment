interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  fill?: boolean;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="text-black hover:text-blue-600 transition-colors text-2xl text-[#010A4A] hover:text-[#010A4A]"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
