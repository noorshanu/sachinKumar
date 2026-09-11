import Hero from '../components/home/Hero';
import ClubSection from '../components/home/ClubSection';
import Mentorship from '../components/home/Mentorship';
import AboutPreview from '../components/home/AboutPreview';
import BookPreview from '../components/home/BookPreview';
import Partners from '../components/home/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <ClubSection />
      <Mentorship />
      <AboutPreview />
      <Partners />
      <BookPreview />
    </>
  );
}
