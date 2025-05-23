import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import BaburamImage from "../../../../../../public/home/Baburam_Acharya.png";

export default function Page({ params }: { params: { lang: string } }) {
  const { lang } = params;
  return (
    <>
      <PageHeader
        lang={lang}
        title={{
          en: "History",
          np: "इतिहास ",
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
              en: "History",
              np: "इतिहास ",
            },
            href: "/about-baburam-acharya/history",
          },
        ]}
      />
      <section className="section container mx-auto w-full text-description ">
        <div className="flex flex-col items-center justify-start gap-8 md:flex-row md:items-start">
          <Image
            src={BaburamImage}
            alt="Baburam Acharya Foundation"
            width={350}
            height={533}
            quality={100}
          />
          <p>
            Baburam Acharya (1888–1971) was a renowned historian and scholar who
            is often referred to as "Itihas Shiromani" or the "Crown Jewel of
            History" in Nepal for his monumental contributions to the study and
            documentation of Nepal's history. His scholarly work provided the
            foundation for much of what we know today about the country's
            historical and cultural heritage.
            <span className="separator"></span>
            <strong>Early Life and Education: </strong>
            <br />
            Baburam Acharya was born in 1888 in the district of Tanahun, Nepal.
            Coming from a Brahmin family, Acharya was naturally inclined toward
            education and scholarly pursuits. He received his early education in
            Nepal but traveled to India for higher studies. There, he deepened
            his understanding of Sanskrit, history, and religious scriptures.
            His fascination with Nepal's past motivated him to dedicate his life
            to uncovering and documenting historical records that were
            previously scattered or ignored.
            <span className="separator"></span>
            <strong>Contributions to Nepali History:</strong> <br /> Before
            Baburam Acharya’s scholarly works, much of Nepal’s history was
            either lost or fragmented. He was one of the first historians to
            provide a systematic and well-researched account of Nepal’s
            political, cultural, and religious past. His contributions include:
            <span className="separator"></span>
            <strong>Documentation of Historical Events: </strong> Baburam
            Acharya meticulously researched Nepal’s ancient and medieval
            history, working to correct inaccuracies and fill in gaps. He
            collected historical documents, including manuscripts, royal
            decrees, and ancient scripts that he analyzed and translated to make
            them accessible for further study.
          </p>
        </div>
        <div className="mt-[30px]">
          <p>
            <strong>Shah Dynasty and Unification of Nepal:</strong> One of his
            most important contributions was documenting the life and times of
            King Prithvi Narayan Shah, the founder of modern Nepal. His works
            provided in-depth insights into the unification of Nepal and the
            expansion of the Shah Dynasty. Acharya played a critical role in
            debunking myths and providing an accurate narrative of Nepal’s
            unification process. <span className="separator"></span>
            Clarification of Nepal’s Calendar System: He was instrumental in
            promoting and explaining Nepal’s calendar system and correcting
            historical timelines, ensuring they matched accurate historical
            records. His research helped standardize historical dates and
            events, which had previously been shrouded in confusion.
            <span className="separator"></span>
            <strong>Promotion of Nepali Language and Literature:</strong>{" "}
            Acharya was not just a historian but also a proponent of the Nepali
            language. He encouraged the use of Nepali in scholarly work and
            historical research. His writings helped raise awareness about the
            significance of preserving and promoting the Nepali language and
            heritage.
            <span className="separator"></span>
            Historical Writings and Books: Baburam Acharya authored many books
            and articles that became foundational texts for future historians.
            His well-known works include the history of the Shah dynasty,
            Nepal’s cultural and religious evolution, and various articles on
            Nepal’s ancient kingdoms and rulers.
            <span className="separator"></span>
            <strong>Challenges and Struggles:</strong> <br /> Despite his
            immense contributions, Baburam Acharya faced many challenges
            throughout his career. In the early 20th century, Nepal was ruled by
            the Rana dynasty, which severely restricted academic freedom.
            Historical records were often kept hidden, and there was little
            incentive for the Ranas to promote a unified sense of Nepalese
            history. Baburam Acharya, however, managed to gain access to
            critical documents and manuscripts through persistent effort and his
            deep connections with scholars.
            <span className="separator"></span>
            At times, his work was censored, and he encountered opposition from
            the ruling class. Yet, his commitment to uncovering Nepal’s true
            history never wavered, and he continued to work in relative
            isolation.<span className="separator"></span>
            <strong>Legacy:</strong> <br /> Baburam Acharya’s lasting impact on
            Nepal’s historical studies is undeniable. He is regarded as one of
            the greatest historians in the country, whose works serve as the
            backbone of modern Nepali history. His legacy lives on through his
            writings and the foundation of historical study that he built.
            <span className="separator"></span>
            Many historians and scholars consider Acharya’s efforts vital to the
            preservation of Nepal’s heritage. His ability to blend scholarly
            rigor with a passion for his country’s history made him an iconic
            figure, and his work continues to inspire researchers and historians
            in Nepal and abroad.
            <span className="separator"></span>
            In recognition of his contributions, Baburam Acharya was honored
            with the title "Itihas Shiromani" by the government and intellectual
            community of Nepal.
            <span className="separator"></span>
          </p>
        </div>
        <p className="font-semibold"> Publication</p>
        <ul className="list-disc pl-7">
          <li>
            The Bloodstained Throne: Struggles for Power in Nepal (1775–1914)
          </li>
          <li>अब यस्तो कहिल्यै नहोस्</li>
          <li>श्री ५ बडामहाराजधिराज पृथ्वीनारायण शाहको संक्षिप्त </li>
          <li>जनरल भीमसेन थापा: यिनको उत्थान तथा पतन</li>
          <li>चीन तिब्बत र नेपाल</li>
          <li>China Tibet and Nepal</li>
          <li>नेपालको सङ्क्षिप्त वृत्तान्त</li>
          <li>दिव्य उपदेश</li>
          <li>नेपालको संक्षिप्त वृतान्त</li>
          <li>हाम्रो राष्ट्र भाषा नेपाली</li>
          <li>भीमसेन थापा: उत्थान तथा पतन</li>
        </ul>
      </section>
    </>
  );
}
