import SiteDiscription from "./SiteDiscription";
import TopCategories from "./TopCategories";
import Contact from "./Contact";
import UsefulLinks from "./UsefulLinks";
import CopyRight from "./CopyRight";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-color-light pt-[80px] text-primary-color-light dark:bg-secondary-color dark:text-primary-color">
      <div className="mx-auto flex w-[90%] flex-col gap-8 pb-[15px] sm:grid sm:w-5/6 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {/* SITE DISCRIPTION */}
        <SiteDiscription />
        {/* TOP CATEGORIES */}
        <TopCategories />
        {/* USEFUL LINKs */}
        <UsefulLinks />
        {/* CONTACT */}
        <Contact />
      </div>
      {/* COPYRIGHT */}
      <CopyRight />
    </footer>
  );
}
