import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'Github',
    href: 'https://github.com/SaurabhShisode',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/NotSaurabh_?t=3bcDO6XXSiNBVk8EQSiXew&s=09',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/saurabh_shisode_?igsh=MWZ3cHRwNmM0NTJxNA==',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saurabh-shisode-686476248/',
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30"
        style={{
          maskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)',
          WebkitMaskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)',
        }}
      ></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
