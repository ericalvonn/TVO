import Button from "@/components/Button";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section tone="light">
      <p className="font-mono text-sm font-bold tracking-[0.2em] text-orange-acts">404</p>
      <h1 className="mt-2 text-5xl font-bold uppercase">Page not found</h1>
      <p className="mt-4 text-lg text-navy-primary/80">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Section>
  );
}
