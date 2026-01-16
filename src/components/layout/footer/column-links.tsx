interface ColumnProps {
  links: string[];
}

const Column = ({ links }: ColumnProps) => {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-[-20px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black to-transparent opacity-35"></div>

      <ul className="space-y-[20px] pr-6 py-4 lg:py-16">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-black text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
