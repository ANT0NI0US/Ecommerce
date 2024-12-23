import SiteDescription from "./SiteDescription";
import TopCategories from "./TopCategories";
import UsefulLinks from "./UsefulLinks";
import CopyRight from "./CopyRight";
import Container from "@/ui/Container";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-color-light text-primary-color-light dark:bg-secondary-color dark:text-primary-color">
      <Container Styles="flex flex-col gap-6 sm:gap-8 py-[40px] sm:grid sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:py-[30px] md:py-[80px]">
        {/* SITE DESCRIPTION */}
        <SiteDescription />
        {/* TOP CATEGORIES */}
        <TopCategories />
        {/* USEFUL LINKs */}
        <UsefulLinks />
      </Container>
      {/* COPYRIGHT */}
      <CopyRight />
    </footer>
  );
}
