import { Navbar } from '@/components/ui/navbar';
import BlurFade from './magicui/blur-fade';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <BlurFade delay={0.15} inView>
        <main className="max-w-screen h-screen max-h-screen flex flex-col justify-center overflow-hidden relative">
          {children}
        </main>
      </BlurFade>
    </>
  );
}
