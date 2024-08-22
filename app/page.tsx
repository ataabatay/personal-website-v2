import AnimatedGridBackground from '../components/ui/animatedGridBackground';
import { ProjectsMarquee } from '../components/ui/ProjectsMarquee';
import MainLayout from '@/components/layouts';
import BlurFade from '@/components/magicui/blur-fade';

export default function Home() {
  return (
    <>
      <BlurFade delay={0.15} inView>
        <AnimatedGridBackground />
        <MainLayout>
          <div className="opacity-40 blur-lg -z-50">
            <ProjectsMarquee reverse={false} />
            <ProjectsMarquee reverse={true} />
          </div>
          <ProjectsMarquee reverse={false} />
        </MainLayout>
      </BlurFade>
    </>
  );
}
