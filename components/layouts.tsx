import { Navbar } from '@/components/ui/navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen h-screen max-h-screen flex flex-col justify-center overflow-hidden relative">{children}</main>
    </>
  );
}
