import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import { MagicCard } from '@/components/magicui/magic-card';

export function MarqueeCard({ item }) {
  return (
    <MagicCard
      className={`cursor-pointer flex flex-col p-4 justify-center bg-transparent  text-center ${item.style} whitespace-nowrap w-32 h-32 font-light tracking-wider text-lg hover:font-semibold hover:scale-110 transform transition duration-75 border-transparent rounded-none text-white`}
      gradientColor='rgb(30 41 59)'
    >
      {item.img ? 
      <img src={item.img} className='grayscale hover:grayscale-0'></img>  
      : 
      <p className='size-full rounded-none'>{item.name}</p>
      }
    </MagicCard>
  );
}

export function MarqueeForward({items}) {
  return (
    <div className="relative flex max-w-screen flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {items.map((item) => (
          <MarqueeCard key={item.id} item={item} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black"></div>
    </div>
  );
}

export function MarqueeBackward({items}) {
  return (
    <div className="relative flex max-w-screen flex-col items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {items.map((item) => (
          <MarqueeCard key={item.id} item={item}/>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black"></div>
    </div>
  );
}
