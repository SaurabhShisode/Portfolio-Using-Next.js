import chattyCat from "@/assets/images/chattycat.png";
import spotify from "@/assets/images/spotify.png";
import portfolio from "@/assets/images/portfolio.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Discord Bot",
    year: "2024",
    title: "ChattyCat",
    results: [
      { title: "Boosted server engagement by 40%" },
      { title: "Simplified tasks" },
      { title: "Added fun with AI image generation" },
    ],
    link: "https://discord.com/oauth2/authorize?client_id=1302853336634232882&permissions=378944&integration_type=0&scope=bot",
    image: chattyCat,
  },
  {
    company: "Spotify Clone",
    year: "2024",
    title: "Spotify - Web Player",
    results: [
      { title: "Replicates Spotify's interface" },
      { title: "Responsive design for seamless use" },
      { title: "Includes volume adjustment and mute functionality" },
    ],
    link: "http://spotifystream.freewebhostmost.com/",
    image: spotify,
  },
  {
    company: "Portfolio",
    year: "2025",
    title: "Portfolio Website",
    results: [
      { title: "Modern design showcasing skills" },
      { title: "Responsive for desktop and mobile" },
      { title: "Interactive with animations and tech highlights" },
    ],
    link: "https://saurabhshisode.vercel.app/",
    image: portfolio,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-World Results</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">See how I transformed concepts into engaging digital experiences.</p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} 
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`
            }}>
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
