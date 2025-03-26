// import Link from 'next/link'
import HomeHero from "../components/homeHero";
import { HomeBanner1 } from "../components/homeBanners";
import { HomeBanner2 } from "../components/homeBanners";
import GoogleMap from "../components/GoogleMap";
export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeBanner1 />
      <div className="px-4 sm:px-6">
        <GoogleMap />
      </div>
      <HomeBanner2 />
    </div>    
  );
}
