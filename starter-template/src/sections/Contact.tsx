import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-20" 
    >
      <div className="container relative z-20">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          {/* Grain Background */}
          <div
            className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
            style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover' }}
          ></div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              {/* Contact Button */}
              <a
                href="mailto:shisodesaurabh48@gmail.com?subject=Let%27s%20Collaborate&body=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
