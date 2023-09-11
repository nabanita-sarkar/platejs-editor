import { cn } from '@/lib/utils';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { TailwindIndicator } from '@/components/tailwind-indicator';

import '@/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased'
            // fontSans.variable
          )}
        >
          <TooltipProvider
            disableHoverableContent
            delayDuration={500}
            skipDelayDuration={0}
          >
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </TooltipProvider>
        </body>
      </html>
    </>
  );
}
