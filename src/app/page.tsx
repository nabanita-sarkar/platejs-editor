import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/plate-ui/button';
import Editor from '@/components/plate/editor';

export default function PlatejsEditor() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Plate Playground.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Plugin system & primitive component library.{' '}
          <br className="hidden sm:inline" />
          CLI for styled components. Customizable. Open Source. And Next.js 13
          Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: 'outline' })}
        >
          GitHub
        </a>
      </div>

      <div className="max-w-[1336px] rounded-lg border bg-background shadow">
        <Editor />
      </div>
    </section>
  );
}
