import Hero from "@/components/sections/Hero";
import OfferingsTeaser from "@/components/sections/OfferingsTeaser";
import BadgeMarquee from "@/components/BadgeMarquee";
import Programs from "@/components/sections/Programs";
import CtaBand from "@/components/sections/CtaBand";
import Transformation from "@/components/sections/Transformation";
import Reviews from "@/components/sections/Reviews";
import CoachStory from "@/components/sections/CoachStory";
import WhyAchieve from "@/components/sections/WhyAchieve";
import GetStarted from "@/components/sections/GetStarted";
import Location from "@/components/sections/Location";
import FinalCta from "@/components/sections/FinalCta";
import MobileScheduleBar from "@/components/MobileScheduleBar";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferingsTeaser />
      <BadgeMarquee theme="dark" />
      <Programs />
      <CtaBand />
      <Transformation />
      <Reviews />
      <CoachStory />
      <WhyAchieve />
      <GetStarted />
      <Location />
      <FinalCta />
      <MobileScheduleBar />
    </>
  );
}
