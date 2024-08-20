import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import { MagicCard } from '@/components/magicui/magic-card';

export function MarqueeNavCard({ navItem }) {
  return (
    <MagicCard
      className={`cursor-pointer flex flex-col p-4 justify-center bg-transparent  text-center ${navItem.style} whitespace-nowrap w-32 h-32 font-light tracking-wider text-md hover:font-semibold hover:scale-110 transform transition duration-75 text-white`}
      gradientColor="rgb(30 41 59)"
    >
      <p>{navItem.name}</p>
    </MagicCard>
  );
}

export function MarqueeProjectCard({ projectItem }) {
  return (
    <MagicCard
      className={`cursor-pointer flex flex-col p-4 justify-center bg-transparent  text-center ${projectItem.style} whitespace-nowrap w-32 h-32 font-light tracking-wider text-md text-white hover:relative hover:w-full hover:z-50 hover:scale-110 transform transition duration-300 grayscale hover:grayscale-0 hover:bg-slate-500"`}
    >
      <img src={projectItem.img}></img>
    </MagicCard>
  );
}

export function MarqueeForward({ items }) {
  return (
    <div className="relative flex max-w-screen flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {items.map((item) => (item.type === 'nav' ? <MarqueeNavCard navItem={item} /> : <></>))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black"></div>
    </div>
  );
}

export function MarqueeBackward({ items }) {
  return (
    <div className="relative flex max-w-screen flex-col items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {items.map((item) => (item.type === 'project' ? <MarqueeProjectCard projectItem={item} /> : <></>))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black"></div>
    </div>
  );
}
