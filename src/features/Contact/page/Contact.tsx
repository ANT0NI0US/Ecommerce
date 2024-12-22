import ContactInformation from "../components/ContactInformation";
import ContactHeader from "../components/ContactHeader";
import ContactForm from "../components/ContactForm";
import CommonSection from "@/ui/CommonSection";
import Container from "@/ui/Container";
import useHelmet from "@/hooks/useHelmet";

export default function Contact() {
  useHelmet("Contact");
  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <Container Styles="md:py-[80px] py-[40px]">
          <ContactHeader />
          <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
            {/* CONTACT INFORMATION */}
            <ContactInformation />

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
