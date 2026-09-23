import { Nav, Hero, Intro, Collection, HowItWorks, Story, Signup, Footer } from './components/Sections.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Collection />
        <HowItWorks />
        <Story />
        <Signup />
      </main>
      <Footer />
    </>
  );
}
