import { MarqueeBackward, MarqueeForward } from './marquee';
import AnimatedGridBackground from './ui/animatedGridBackground';

const LinksArray = [
  { id: 1, type: 'nav', name: 'about' },
  { id: 2, type: 'nav', name: 'experience' },
  { id: 3, type: 'nav', name: 'contact' },
  { id: 4, type: 'project', name: 'project1', img: 'https://picsum.photos/id/22/200' },
  { id: 5, type: 'project', name: 'project2', img: 'https://picsum.photos/id/23/200' },
  { id: 6, type: 'project', name: 'project3', img: 'https://picsum.photos/id/24/200' },
  { id: 7, type: 'project', name: 'project4', img: 'https://picsum.photos/id/25/200' },
  { id: 8, type: 'project', name: 'project5', img: 'https://picsum.photos/id/26/200' },
  { id: 9, type: 'project', name: 'project6', img: 'https://picsum.photos/id/27/200' },
];

export default function Home() {
  return (
    <>
      <AnimatedGridBackground />
      <main className="max-w-screen min-h-screen flex flex-col justify-center items-center text-light-text">
        <div className="overflow-hidden w-screen sm:max-w-screen-md">
          <MarqueeForward items={LinksArray} />
        </div>
        <div className="overflow-hidden w-screen sm:max-w-screen-md -z-50 opacity-15">
          <MarqueeBackward items={LinksArray} />
        </div>
        <div className="overflow-hidden w-screen sm:max-w-screen-md -z-50 opacity-15">
          <MarqueeForward items={LinksArray} />
        </div>
        <div className="overflow-hidden w-screen sm:max-w-screen-md">
          <p className="text-white py-2">Projects</p>
          <MarqueeBackward items={LinksArray} />
        </div>
      </main>
    </>
  );
}
