import MainLayout from '@/components/layouts';
import BlurFade from '@/components/magicui/blur-fade';
import AnimatedGridBackground from '@/components/ui/animatedGridBackground';

export default function Page() {
  return (
    <>
      <MainLayout>
        <AnimatedGridBackground />
        <h1 className="text-white">All projects</h1>
      </MainLayout>
    </>
  );
}
