import { MarqueeBackward, MarqueeForward } from './marquee';
import AnimatedGridBackground from './ui/animatedGridBackground';

const mainPagesArray = [
  { id: 1, name: 'about', style: 'bg-transparent'},
  { id: 1, name: 'projects', style: 'bg-transparent'},
  { id: 1, name: 'past', style: 'bg-transparent'},
  { id: 1, name: 'contact', style: 'bg-transparent' },
];

const projectsArray = [
  { id: 1, name: 'project1', style: 'white', img: 'https://picsum.photos/id/22/200' },
  { id: 2, name: 'project2', style: 'white', img: 'https://picsum.photos/id/23/200' },
  { id: 3, name: 'project3', style: 'white', img: 'https://picsum.photos/id/24/200' },
  { id: 4, name: 'project4', style: 'white', img: 'https://picsum.photos/id/25/200' },
  { id: 5, name: 'project5', style: 'white', img: 'https://picsum.photos/id/26/200' },
  { id: 6, name: 'project6', style: 'white', img: 'https://picsum.photos/id/27/200' },
]

export default function Home() {
  return (
    <>
      <AnimatedGridBackground/>
      <main className="max-w-screen min-h-screen flex flex-col justify-center items-center text-light-text">
        <div className="overflow-hidden w-screen sm:max-w-screen-md">
          <MarqueeForward items={mainPagesArray}/>
        </div>
        <div className="overflow-hidden w-screen sm:max-w-screen-md -z-50 opacity-15">
          <MarqueeBackward items={projectsArray}/>
        </div>
        <div className="overflow-hidden w-screen sm:max-w-screen-md -z-50 opacity-15">
          <MarqueeForward items={mainPagesArray}/>
        </div>
        <div className="overflow-hidden w-screen sm:max-w-screen-md">
          <MarqueeBackward items={projectsArray}/>
        </div>
      </main>
    </>
  );
}
