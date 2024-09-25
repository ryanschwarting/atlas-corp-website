import { Carousel } from "@/components/Carousel";
import { ContactUs } from "@/components/ContactUs";
import { TeamPage } from "@/components/TeamPage";
import { HomePage } from "@/components/HomePage";
import { Services } from "@/components/Services";
import { Blogs } from "@/components/Blogs";
import { Newsletter } from "@/components/Newsletter";
import { Projects } from "@/components/Projects";

export default function Home() {
  const images = [
    { src: "/nfl-shield.png", width: 90, height: 90 },
    { src: "/absolutvariation.jpg", width: 100, height: 100 },
    { src: "/bulovalogo.jpeg", width: 90, height: 90 },
    { src: "/ChainlinkLogoBlue.png", width: 120, height: 120 },
    { src: "/DAZN_logo.svg", width: 90, height: 90 },
    { src: "/dcavelogo.jpeg", width: 90, height: 90 },
    { src: "/DCL.png", width: 120, height: 100 },
    { src: "/DG.jpeg", width: 90, height: 90 },
    { src: "/Diesel.svg", width: 100, height: 100 },
    { src: "/FXR-logo.png", width: 100, height: 100 },
    { src: "/GoDA_LOGO_Black.jpg", width: 90, height: 90 },
    { src: "/jagerlogo.png", width: 90, height: 90 },
    { src: "/kimosabelogo.png", width: 90, height: 90 },
    { src: "/LBPlogo.png", width: 90, height: 90 },
    { src: "/KBHome.svg", width: 90, height: 90 },
    // { src: "/MetaverseGroup.jpeg", width: 90, height: 90 },
    { src: "/MillerLite.png", width: 90, height: 90 },
    { src: "/SportsData.jpeg", width: 90, height: 90 },
    { src: "/genius-sports.png", width: 90, height: 90 },
  ];
  return (
    <div className="mx-auto font-mono">
      <HomePage />
      <Carousel images={images} />
      <Services />
      <Projects />
      <TeamPage />
      <Blogs />
      <ContactUs />
      <Newsletter />
    </div>
  );
}
