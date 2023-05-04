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
      <Faq />
      <Cta />
      <SectionTitle pretitle="Send os en besked" title="Kom i kontakt" />
      <div class="flex justify-center items-center w-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
        <form action="https://api.web3forms.com/submit" method="POST">

          <div class="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
            <input type="hidden" name="access_key" value="b4971803-dd4b-4ddd-9c43-2c1346d4fc93" />
            <input type="text" name="name"  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Navn*" required />
            <input type="email" name="email" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Email*" required />
            <input type="text" name="Phone Number" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Telefon*" required></input>
            
            </div>
            <div class="my-4">
              <textarea name="message" placeholder="Besked*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button type="submit" class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline">
                Send besked
              </button>
            </div>
          </form>
          </div>
        </div>    
        
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;