import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>DanskGPT - Den danske version af ChatGPT</title>
        <meta
          name="description"
          content="DanskGPT er en dansk version af OpenAI's ChatGPT. Den kan bruges til at svare på spørgsmål, opsummere tekster og meget mere."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Både lokalt og i skyen"
        title="DanskGPT kan deployes alle steder"
        id="muligheder">
        Modellen kan deployes både lokalt og i skyen. Vi har gjort det nemt at
        finde den løsning der lige præcist passer dig. I kan vælge mellem at bruge
        vores API, eller få modellen udleveret som en docker container.
        
      </SectionTitle>
      <Benefits data={benefitOne} />

      <SectionTitle
        pretitle="Se hvordan det virker"
        title="DanskGPT til dokumenthåndtering">
        Se videoen der indeholder eksempler på hvordan DanskGPT kan bruges.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="Spørgsmål?" title="Ofte stillede spørgsmål">
        Nedenfor finder du svar på de mest stillede spørgsmål. Hvis du ikke kan
        finde svar på dit spørgsmål, så er du velkommen til at kontakte os.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;