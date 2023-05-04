import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Hvorfor er DanskGPT bedre end ChatGPT?",
    answer: "DanskGPT er træne udelukkende på et dansk datasæt, hvor ChatGPT er trænet på et primært engelsk datasæt. DanskGPT er derfor bedre til at forstå dansk, og kan derfor give bedre svar.",
  },
  {
    question: "Hvordan kommer jeg igang?",
    answer: "Skriv dig op på vores venteliste, så vil vi kontakte dig når vi er klar til at lukke flere brugere ind.",
  },
  {
    question: "Hvad koster det?",
    answer:
      "Vi har ikke en fast prissætning, men vurderer hver enkelt kundes behov individuelt. Kontakt os for at høre mere.",
  },
  {
    question: "Kan man få adgang som privatperson?",
    answer:
      "Nej, vi sælger udelukkende til virksomheder.",
  },
];

export default Faq;