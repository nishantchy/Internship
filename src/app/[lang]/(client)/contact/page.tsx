import { Content, ContactForm } from "@/components/contact";
import PageHeader from "@/components/PageHeader";

const page = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  return (
    <section>
      <PageHeader
        lang={lang}
        title={{
          en: "Contact Us",
          np: "सम्पर्क गर्नुहोस्",
        }}
        breadcrumbs={[
          {
            label: {
              en: "Home",
              np: "होम",
            },
            href: "/",
          },
          {
            label: {
              en: "Contact Us",
              np: "सम्पर्क गर्नुहोस्",
            },
            href: "/contact",
          },
        ]}
      />
      <div className="">
        <div className="container mx-auto grid py-11 md:grid-cols-2 lg:w-full">
          <ContactForm lang={lang} />
          <Content lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default page;
