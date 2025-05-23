export default function WelcomeMsg({ lang }: { lang: string }) {
  const content = {
    en: {
      title: "Welcome to Baburam Acharya Foundation",
      description:
        "Baburam Acharya Foundation is a significant institution established to honor the legacy of Baburam Acharya, one of Nepal's most distinguished historians, often referred to as the 'Itihas Shiromani' (the crown jewel of history). Baburam Acharya played a pivotal role in documenting and preserving Nepal's historical and cultural heritage, making him a revered figure in Nepali history.",
    },
    np: {
      title: "बाबुराम आचार्य फाउन्डेसनमा स्वागत छ",
      description:
        "बाबुराम आचार्य फाउन्डेसन बाबुराम आचार्यको सम्पदालाई सम्मान गर्न स्थापित एक महत्वपूर्ण संस्था हो। बाबुराम आचार्यलाई नेपालका एक प्रमुख इतिहासकारको रुपमा चिनिन्छ, जसलाई प्रायः 'इतिहास शिरोमणि' (इतिहासको मुकुटमणि) भनेर सम्बोधन गरिन्छ। उनले नेपालको ऐतिहासिक र सांस्कृतिक सम्पदालाई दस्तावेजीकरण र संरक्षण गर्न महत्त्वपूर्ण भूमिका खेलेका थिए, जसले उनलाई नेपाली इतिहासमा एक आदरणीय व्यक्तित्व बनाएको छ।",
    },
  };

  return (
    <div className="section container mx-auto w-full">
      <h1 className="text-center text-title font-bold tracking-tight">
        {content[lang as keyof typeof content].title}
      </h1>
      <p className="pt-[32px] text-center text-description">
        {content[lang as keyof typeof content].description}
      </p>
    </div>
  );
}
