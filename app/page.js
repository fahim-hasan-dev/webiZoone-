"use client";

import BannerComponent from "./components/banner/banner";
import ClientReview from "./components/clientReview/ClientReview";
import Newsletter from "./components/newsletter/Newsletter";
import Services from "./components/services";
import WorkingProcess from "./components/workingProcess/WorkingProcess";
import FeaturedWorks from "./components/featuredWorks/FeaturedWorks";
import About from "./components/about/About";
import CompanyStats from "./components/companyStats/CompanyStats";

export default function Home() {
  return (
    <main className="">
      <BannerComponent />
      <Services />
      <FeaturedWorks />
      <About />
      <WorkingProcess />
      <CompanyStats/>
      <ClientReview />
      {/* <Newsletter /> */}
    </main>
  );
}
