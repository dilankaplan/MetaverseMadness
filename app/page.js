import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="realtive">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="realtive">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>
    <div className="realtive">
      <World />
      <div className="gradient-03 z-0" />
      <Insights />
    </div>
    <div className="realtive">
      <Insights />
      <div className="gradient-03 z-0" />

      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
