import Banner from "@/components/Banner";
import ForOwners from "@/components/OwnersSection";
import TopLocations from "@/components/TopLocations";
import WhyChooseUs from "@/components/WhyChoose";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <TopLocations></TopLocations>
      <ForOwners></ForOwners>
    </div>
  );
}
