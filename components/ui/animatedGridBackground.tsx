'use client';

import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';

export default function AnimatedGridBackground() {
  return (
    <div className="absolute flex flex-col h-screen w-screen items-left justify-center p-20 text-white">
      <div className='text max-w-sm self-center'>
        <p>Hi, I&apos;m</p>
        <h1 className="z-10 whitespace-pre-wrap text-8xl font-medium">
          ata.
        </h1>
        <p>I&apos;m a full-stack software developer.</p>
      </div>
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={0.5}
        className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')}
      />
    </div>
  );
}
