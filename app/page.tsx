import AnimatedGridBackground from '../components/ui/animatedGridBackground';
import { ProjectsMarquee } from '../components/ui/ProjectsMarquee';

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
      <main className="max-w-screen h-screen flex flex-col text-light-text overflow-hidden">
        <ProjectsMarquee />
      </main>
    </>
  );
}
