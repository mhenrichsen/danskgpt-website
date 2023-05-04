import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Alt er nu muligt",
  desc: "Med DanskGPT er mulighederne næsten ubegrænsede.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Skalér jeres arbejdeskraft",
      desc: "Med de rigtige prompts kan I blive 10x mere effektive.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Fungerer som en menneskelig assistent",
      desc: "DanskGPT kan svare på spørgsmål, opsmummere tekster og meget mere.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Ingen logging",
      desc: "DanskGPT er bygget med privatliv for øje. Derfor logger vi ikke noget som helst.",
      icon: <FaceSmileIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
