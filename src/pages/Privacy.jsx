import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';

export default function Privacy() {
  return (
    <div className="bg-brand-cream pt-[72px] md:pt-20">
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
            Legal
          </p>
          <h1 className="mt-3 text-[36px] font-extrabold tracking-[-0.03em] text-brand-text md:text-[44px]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-brand-text-muted">Last updated: {new Date().getFullYear()}</p>

          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-brand-text-secondary">
            <p>
              This Privacy Policy explains how Sachin Kumar (&quot;we&quot;, &quot;us&quot;) collects,
              uses, and protects information when you visit this website or contact us.
            </p>
            <h2 className="text-lg font-bold text-brand-text">Information we collect</h2>
            <p>
              We may collect information you voluntarily provide (such as name, email, and message
              content) when you use our contact forms or join community channels we operate.
            </p>
            <h2 className="text-lg font-bold text-brand-text">How we use information</h2>
            <p>
              We use your information to respond to inquiries, improve the site, and share relevant
              educational updates related to trading, mentorship, and our book — only where
              appropriate and with your consent where required.
            </p>
            <h2 className="text-lg font-bold text-brand-text">Third-party services</h2>
            <p>
              This site may link to third-party platforms (social media, exchanges, Telegram). Their
              privacy practices are governed by their own policies.
            </p>
            <h2 className="text-lg font-bold text-brand-text">Contact</h2>
            <p>
              For privacy questions, please reach out via the{' '}
              <Link to="/contact" className="font-semibold text-brand-orange hover:underline">
                Contact
              </Link>{' '}
              page.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
