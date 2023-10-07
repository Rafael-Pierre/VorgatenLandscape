import { HeaderMiddle } from "./components/header";
import ImagePrincipal from "./components/imagePrincipal";
import About from "./components/about";
import Services from "./components/services";
import TextImage from "./components/textImage";

const links = [
  {
    link: "https://youtu.be/kB2aFxpiljE",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/services",
    label: "Services",
  },
];

export default function Home() {
  return (
    <main className="main-container">
      <HeaderMiddle links={links} />

      <div className="top-container">
        <TextImage />
      </div>
      <div className="bottom-container">
        <About />
        <Services />
      </div>
    </main>
  );
}
