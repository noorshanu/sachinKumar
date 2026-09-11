import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';

export default function Terms() {
  return (
    <div className="bg-brand-cream pt-[72px] md:pt-20">
      <section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-[11px] font-bold tracking-[0.2em] text-brand-orange uppercase">
            Legal
          </p>
          <h1 className="mt-3 text-[36px] font-extrabold tracking-[-0.03em] text-brand-text md:text-[44px]">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-brand-text-muted">Last updated: {new Date().getFullYear()}</p>

          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-brand-text-secondary">
            <p>
              By using this website, you agree to these Terms of Service. If you do not agree,
              please do not use the site.
            </p>
            <h2 className="text-lg font-bold text-brand-text">Educational purpose only</h2>
            <p>
              All content — including articles, mentorship materials, club updates, and book-related
              information — is for educational and informational purposes only. Nothing on this site
              constitutes financial, investment, legal, or tax advice.
            </p>
            <h2 className="text-lg font-bold text-brand-text">Risk acknowledgment</h2>
            <p>
              Cryptocurrency markets are highly volatile. You are solely responsible for your trading
              and investment decisions. Never risk funds you cannot afford to lose.
            </p>
            <h2 className="text-lg font-bold text-brand-text">Intellectual property</h2>
            <p>
              Site content, branding, and related materials are owned by Sachin Kumar unless
              otherwise stated. You may not copy or redistribute content without permission.
            </p>
            <h2 className="text-lg font-bold text-brand-text">Contact</h2>
            <p>
              Questions about these terms? Visit the{' '}
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
