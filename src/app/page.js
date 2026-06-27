import Banner from "@/components/Banner";
import FeaturedProperties from "@/components/FeaturedProperties";
import ForOwners from "@/components/OwnersSection";
import TopLocations from "@/components/TopLocations";
import WhyChooseUs from "@/components/WhyChoose";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProperties></FeaturedProperties>
      <WhyChooseUs></WhyChooseUs>
      <TopLocations></TopLocations>
      <ForOwners></ForOwners>
    </div>
  );
}
