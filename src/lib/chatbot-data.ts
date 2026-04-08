export type BotQA = {
  keywords: string[];
  answer: {
    hindi: string;
    english: string;
  };
};

// Language detection helper
function detectLanguage(text: string): 'hindi' | 'english' {
  const hindiWords = ['hai', 'hain', 'kya', 'kaise', 'kitne', 'mein', 'se', 'ko', 'ka', 'ki', 'ke', 'aap', 'hum', 'main', 'ye', 'wo', 'kahan', 'kyun', 'kab', 'kaun', 'chahiye', 'banao', 'karo', 'ho', 'hun', 'tha', 'thi', 'the', 'gaya', 'gayi', 'gaye', 'kar', 'karna', 'karne', 'karke', 'bhi', 'nahi', 'nahin', 'acha', 'accha', 'bahut', 'sabse', 'sab', 'kuch', 'koi', 'agar', 'lekin', 'par', 'aur', 'ya', 'phir', 'wahan', 'yahan', 'isme', 'usse', 'iske', 'uske', 'jab', 'tab', 'abhi', 'ab', 'pehle', 'baad', 'saath', 'bina', 'liye', 'wale', 'wali', 'wala', 'dena', 'lena', 'diya', 'liya', 'diye', 'liye', 'jana', 'aana', 'jaana', 'aaana', 'ghar', 'kaam', 'paisa', 'paise', 'rupaye', 'din', 'raat', 'samay', 'time', 'baat', 'cheez', 'jagah', 'log', 'aadmi', 'aurat', 'ladka', 'ladki', 'bachcha', 'bacche', 'mata', 'pita', 'bhai', 'behen', 'dost', 'yaar', 'sir', 'madam', 'ji', 'sahab', 'sahib'];

  const words = text.toLowerCase().split(/\s+/);
  let hindiCount = 0;

  for (const word of words) {
    if (hindiWords.includes(word)) {
      hindiCount++;
    }
  }

  // If more than 20% words are Hindi, consider it Hindi
  return (hindiCount / words.length) > 0.2 ? 'hindi' : 'english';
}

export const botQA: BotQA[] = [
  // ── Greetings ──
  {
    keywords: ["hello", "hi", "hey", "namaste", "hii", "helo", "hlo", "namaskar", "good morning", "good evening", "good afternoon", "sup", "hiya"],
    answer: {
      hindi: "Namaste! 🙏 Main hoon RoyalBot — RoyalFinity Technologies ka virtual assistant.\n\nMain aapki help kar sakta hoon:\n• 🌐 Website & App development\n• 📣 Digital Marketing & SEO\n• 🎨 Branding & Design\n• 💰 Pricing & packages\n• 📞 Contact & support\n\nKya jaanna chahte hain? Seedha poochh sakte hain! 😊",
      english: "Hello! 🙏 I'm RoyalBot — RoyalFinity Technologies' virtual assistant.\n\nI can help you with:\n• 🌐 Website & App development\n• 📣 Digital Marketing & SEO\n• 🎨 Branding & Design\n• 💰 Pricing & packages\n• 📞 Contact & support\n\nWhat would you like to know? Feel free to ask! 😊"
    }
  },

  // ── About company ──
  {
    keywords: ["royalfinity technologies", "royalfinity", "aapki company", "tumhari company", "kaun ho aap", "who are you", "about company", "company ke bare mein", "kya hai ye", "what is royalfinity", "company kahan hai", "ye company kaisi hai"],
    answer: {
      hindi: "RoyalFinity Technologies ek full-service digital agency hai! 🚀\n\n📍 Location: Faridabad, Haryana, India\n\n🏆 Hamare achievements:\n• 78+ successful projects\n• 45+ happy clients\n• 2+ years of experience\n• 99% client satisfaction rate\n• Global clients — India, US, UK, UAE\n\n💡 Hum kya karte hain:\nWebsites, Mobile Apps, Digital Marketing, Branding, ERP Software, AI Solutions — sab kuch ek hi jagah!\n\nKisi specific service ke baare mein jaanna hai? 😊",
      english: "RoyalFinity Technologies is a full-service digital agency! 🚀\n\n📍 Location: Faridabad, Haryana, India\n\n🏆 Our achievements:\n• 78+ successful projects\n• 45+ happy clients\n• 2+ years of experience\n• 99% client satisfaction rate\n• Global clients — India, US, UK, UAE\n\n💡 What we do:\nWebsites, Mobile Apps, Digital Marketing, Branding, ERP Software, AI Solutions — everything under one roof!\n\nWant to know about any specific service? 😊"
    }
  },

  // ── All services ──
  {
    keywords: ["services", "kya kya karte ho", "kya offer karte ho", "kya banate ho", "sab services", "all services", "konsi services", "kya kaam karte ho", "kya kya milega", "service list"],
    answer: {
      hindi: "RoyalFinity Technologies ki complete service list:\n\n🌐 Website Development — Business, E-commerce, Landing Pages\n📱 Mobile & Web Apps — Android, iOS, Cross-platform\n📣 Digital Marketing — SEO, Google Ads, Social Media\n🎨 Branding & Design — Logo, UI/UX, Graphics\n💻 Software & ERP — Custom software, CRM, Automation\n🤖 AI & Automation — Chatbots, ML, Process Automation\n🛒 E-commerce — Online stores, Payment integration\n\nHar service mein hum design se lekar delivery tak sab handle karte hain! 💪\n\nKisi ek service ke baare mein detail mein jaanna hai?",
      english: "RoyalFinity Technologies complete service list:\n\n🌐 Website Development — Business, E-commerce, Landing Pages\n📱 Mobile & Web Apps — Android, iOS, Cross-platform\n📣 Digital Marketing — SEO, Google Ads, Social Media\n🎨 Branding & Design — Logo, UI/UX, Graphics\n💻 Software & ERP — Custom software, CRM, Automation\n🤖 AI & Automation — Chatbots, ML, Process Automation\n🛒 E-commerce — Online stores, Payment integration\n\nWe handle everything from design to delivery for each service! 💪\n\nWant to know more details about any specific service?"
    }
  },

  // ── Website development ──
  {
    keywords: ["website development", "website banana", "website banwana", "website chahiye", "website bnao", "web development", "website design", "website kaise banate ho", "website kitne din mein", "website ka kaam", "business website", "landing page", "wordpress", "company website", "professional website", "website bnwani hai"],
    answer: {
      hindi: "Hamare Website Development service ke baare mein sab kuch:\n\n✅ Kya milega:\n• Custom Business Websites\n• E-commerce Stores (Shopify, WooCommerce)\n• WordPress & CMS Platforms\n• High-converting Landing Pages\n• SEO-ready & Mobile Responsive\n• Fast loading (under 3 seconds)\n• SSL Security included\n\n⏱️ Delivery Timeline:\n• Basic website: 5–7 din\n• Business website: 2–3 hafte\n• E-commerce: 3–4 hafte\n\n💰 Pricing (70% OFF chal raha hai! 🎉):\n• Basic: ₹15,000 se shuru\n• Business: ₹30,000–₹80,000\n• E-commerce: ₹40,000–₹1,00,000+\n\n🔧 Tech stack: React, Next.js, WordPress, PHP\n\nFree consultation ke liye:\n📞 +91 92118 16999\n💬 WhatsApp us!",
      english: "Everything about our Website Development service:\n\n✅ What you get:\n• Custom Business Websites\n• E-commerce Stores (Shopify, WooCommerce)\n• WordPress & CMS Platforms\n• High-converting Landing Pages\n• SEO-ready & Mobile Responsive\n• Fast loading (under 3 seconds)\n• SSL Security included\n\n⏱️ Delivery Timeline:\n• Basic website: 5–7 days\n• Business website: 2–3 weeks\n• E-commerce: 3–4 weeks\n\n💰 Pricing (70% OFF running! 🎉):\n• Basic: Starting ₹15,000\n• Business: ₹30,000–₹80,000\n• E-commerce: ₹40,000–₹1,00,000+\n\n🔧 Tech stack: React, Next.js, WordPress, PHP\n\nFor free consultation:\n📞 +91 92118 16999\n💬 WhatsApp us!"
    }
  },

  // ── Mobile app ──
  {
    keywords: ["mobile app", "app banana", "app banwana", "android app", "ios app", "app development", "app chahiye", "app bnao", "flutter", "react native", "play store", "app store", "mobile application", "app kitne mein", "app kitne din mein"],
    answer: {
      hindi: "Mobile App Development ke baare mein:\n\n📱 Hum ye apps banate hain:\n• Android (Kotlin / Java)\n• iOS (Swift / Objective-C)\n• Cross-platform (React Native, Flutter)\n• Progressive Web Apps (PWA)\n\n✅ Kya milega:\n• Complete UI/UX Design\n• Backend API development\n• Payment gateway integration\n• Push notifications\n• App Store & Play Store submission\n• 3 months free support\n\n⏱️ Timeline: 4–8 hafte\n\n💰 Pricing:\n• Basic app: ₹50,000–₹1,00,000\n• Medium complexity: ₹1,00,000–₹3,00,000\n• Enterprise app: ₹3,00,000+\n\nAapka app idea share karein:\n📞 +91 92118 16999",
      english: "About Mobile App Development:\n\n📱 We build these apps:\n• Android (Kotlin / Java)\n• iOS (Swift / Objective-C)\n• Cross-platform (React Native, Flutter)\n• Progressive Web Apps (PWA)\n\n✅ What you get:\n• Complete UI/UX Design\n• Backend API development\n• Payment gateway integration\n• Push notifications\n• App Store & Play Store submission\n• 3 months free support\n\n⏱️ Timeline: 4–8 weeks\n\n💰 Pricing:\n• Basic app: ₹50,000–₹1,00,000\n• Medium complexity: ₹1,00,000–₹3,00,000\n• Enterprise app: ₹3,00,000+\n\nShare your app idea:\n📞 +91 92118 16999"
    }
  },

  // ── Digital marketing ──
  {
    keywords: ["digital marketing", "marketing", "seo", "google ads", "facebook ads", "instagram ads", "social media marketing", "ads chalwane", "ads chalao", "lead generation", "traffic badhao", "online marketing", "promotion", "google pe rank", "social media", "content marketing"],
    answer: {
      hindi: "Digital Marketing se apna business grow karein! 📈\n\n🔍 SEO (Search Engine Optimization):\n• Google pe top rank karwao\n• Organic traffic badhao\n• Local SEO bhi available\n\n📢 Paid Advertising:\n• Google Search & Display Ads\n• Facebook & Instagram Ads\n• YouTube Ads\n• Retargeting campaigns\n\n📱 Social Media Marketing:\n• Content creation & posting\n• Community management\n• Influencer marketing\n\n📊 Results jo hum deliver karte hain:\n• Average 3x ROI\n• 200% traffic growth\n• 60% more leads\n\n💰 Starting: ₹10,000/month\n\nFree audit ke liye:\n📞 +91 92118 16999",
      english: "Grow your business with Digital Marketing! 📈\n\n🔍 SEO (Search Engine Optimization):\n• Get top Google rankings\n• Increase organic traffic\n• Local SEO also available\n\n📢 Paid Advertising:\n• Google Search & Display Ads\n• Facebook & Instagram Ads\n• YouTube Ads\n• Retargeting campaigns\n\n📱 Social Media Marketing:\n• Content creation & posting\n• Community management\n• Influencer marketing\n\n📊 Results we deliver:\n• Average 3x ROI\n• 200% traffic growth\n• 60% more leads\n\n💰 Starting: ₹10,000/month\n\nFor free audit:\n📞 +91 92118 16999"
    }
  },

  // ── Branding & design ──
  {
    keywords: ["branding", "logo", "logo banana", "logo design", "brand identity", "graphic design", "ui ux", "ui/ux", "design chahiye", "poster", "banner design", "visiting card", "business card", "brand banwana", "logo kitne mein", "design kitne mein"],
    answer: {
      hindi: "Branding & Design — aapki pehchaan banate hain hum! 🎨\n\n✅ Kya milega:\n• Logo & Complete Brand Identity\n• UI/UX Design (websites & apps)\n• Marketing Materials (posters, banners, cards)\n• Social Media Templates\n• Motion Graphics & Animations\n• Packaging Design\n• Brand Guidelines Document\n\n⏱️ Timeline:\n• Logo: 48 ghante mein first draft\n• Complete branding: 1–2 hafte\n\n💰 Pricing:\n• Logo only: ₹8,000–₹25,000\n• Complete branding: ₹25,000–₹80,000\n• UI/UX Design: ₹20,000–₹1,00,000+\n\n♾️ Unlimited revisions jab tak aap satisfied na ho!\n\n📞 +91 92118 16999",
      english: "Branding & Design — we create your unique identity! 🎨\n\n✅ What you get:\n• Logo & Complete Brand Identity\n• UI/UX Design (websites & apps)\n• Marketing Materials (posters, banners, cards)\n• Social Media Templates\n• Motion Graphics & Animations\n• Packaging Design\n• Brand Guidelines Document\n\n⏱️ Timeline:\n• Logo: First draft in 48 hours\n• Complete branding: 1–2 weeks\n\n💰 Pricing:\n• Logo only: ₹8,000–₹25,000\n• Complete branding: ₹25,000–₹80,000\n• UI/UX Design: ₹20,000–₹1,00,000+\n\n♾️ Unlimited revisions until you're satisfied!\n\n📞 +91 92118 16999"
    }
  },

  // ── ERP / Software ──
  {
    keywords: ["erp", "software", "crm", "custom software", "business software", "inventory", "management software", "accounting software", "hrm", "payroll", "software banana", "erp banana", "business management"],
    answer: {
      hindi: "Custom Software & ERP Solutions:\n\n💼 Kya banate hain:\n• Custom ERP Systems\n• CRM (Customer Relationship Management)\n• Inventory Management System\n• HR & Payroll Software\n• Finance & Accounting Module\n• Cloud-based Applications\n• Business Process Automation\n\n✅ Benefits:\n• 40% efficiency gain\n• 60% cost reduction\n• 99.9% uptime guarantee\n• Role-based access control\n• Real-time reporting\n\n⏱️ Timeline: 8–16 hafte\n💰 Starting: ₹1,00,000\n\nApni requirements share karein:\n📞 +91 92118 16999",
      english: "Custom Software & ERP Solutions:\n\n💼 What we build:\n• Custom ERP Systems\n• CRM (Customer Relationship Management)\n• Inventory Management System\n• HR & Payroll Software\n• Finance & Accounting Module\n• Cloud-based Applications\n• Business Process Automation\n\n✅ Benefits:\n• 40% efficiency gain\n• 60% cost reduction\n• 99.9% uptime guarantee\n• Role-based access control\n• Real-time reporting\n\n⏱️ Timeline: 8–16 weeks\n💰 Starting: ₹1,00,000\n\nShare your requirements:\n📞 +91 92118 16999"
    }
  },

  // ── AI & Automation ──
  {
    keywords: ["ai automation", "artificial intelligence", "chatbot banana", "chatbot banwana", "machine learning", "rpa", "business automation", "ai solution", "openai", "gpt integration", "ai chatbot", "automation solution"],
    answer: {
      hindi: "AI & Automation — future-ready solutions! 🤖\n\n✅ Kya milega:\n• Smart AI Chatbots (24/7 customer support)\n• RPA — Robotic Process Automation\n• Machine Learning Models\n• Computer Vision Solutions\n• NLP (Natural Language Processing)\n• OpenAI / Google AI Integration\n• Data Analytics & BI Dashboards\n\n📊 Results:\n• 80% tasks automated\n• 5x productivity boost\n• 60% cost savings\n• 24/7 availability\n\n💰 Starting: ₹1,00,000\n\nAI se apna business transform karein:\n📞 +91 92118 16999",
      english: "AI & Automation — future-ready solutions! 🤖\n\n✅ What you get:\n• Smart AI Chatbots (24/7 customer support)\n• RPA — Robotic Process Automation\n• Machine Learning Models\n• Computer Vision Solutions\n• NLP (Natural Language Processing)\n• OpenAI / Google AI Integration\n• Data Analytics & BI Dashboards\n\n📊 Results:\n• 80% tasks automated\n• 5x productivity boost\n• 60% cost savings\n• 24/7 availability\n\n💰 Starting: ₹1,00,000\n\nTransform your business with AI:\n📞 +91 92118 16999"
    }
  },

  // ── E-commerce ──
  {
    keywords: ["ecommerce", "e-commerce", "e commerce", "online store", "online dukan", "online shop", "shopify store", "woocommerce", "product website", "selling website", "buy sell website", "shopping website", "online selling", "products sell karne hain"],
    answer: {
      hindi: "E-commerce Store — online business shuru karein! 🛒\n\n✅ Kya milega:\n• Custom Online Store\n• Shopify / WooCommerce / Custom\n• Payment Integration:\n  - Razorpay, Stripe, PayPal\n  - UPI, Net Banking, EMI\n• Product catalog management\n• Inventory tracking\n• Mobile-optimized shopping\n• Abandoned cart recovery\n• Sales analytics dashboard\n\n💰 Pricing:\n• Basic (upto 50 products): ₹20,000–₹40,000\n• Intermediate (50–200 products): ₹40,000–₹80,000\n• Advanced (custom features): ₹80,000–₹2,00,000+\n\n🎉 Abhi 70% OFF!\n📞 +91 92118 16999",
      english: "E-commerce Store — start your online business! 🛒\n\n✅ What you get:\n• Custom Online Store\n• Shopify / WooCommerce / Custom\n• Payment Integration:\n  - Razorpay, Stripe, PayPal\n  - UPI, Net Banking, EMI\n• Product catalog management\n• Inventory tracking\n• Mobile-optimized shopping\n• Abandoned cart recovery\n• Sales analytics dashboard\n\n💰 Pricing:\n• Basic (up to 50 products): ₹20,000–₹40,000\n• Intermediate (50–200 products): ₹40,000–₹80,000\n• Advanced (custom features): ₹80,000–₹2,00,000+\n\n🎉 70% OFF now!\n📞 +91 92118 16999"
    }
  },

  // ── Pricing ──
  {
    keywords: ["price", "pricing", "cost", "kitne mein", "kitna lagega", "kitne paise", "charges", "fee", "rate", "budget", "affordable", "cheap", "quote", "paisa", "rupees", "rs.", "inr", "how much", "package", "packages", "plan"],
    answer: {
      hindi: "Hamare service pricing (🎉 70% OFF chal raha hai!):\n\n🌐 Website Development:\n  • Basic: ₹15,000–₹30,000\n  • Business: ₹30,000–₹80,000\n  • E-commerce: ₹40,000–₹1,00,000+\n\n📱 Mobile App:\n  • Basic: ₹50,000–₹1,00,000\n  • Medium: ₹1,00,000–₹3,00,000\n\n📣 Digital Marketing:\n  • Starting: ₹10,000/month\n\n🎨 Branding/Logo:\n  • Logo: ₹8,000–₹25,000\n  • Complete: ₹25,000–₹80,000\n\n💻 ERP/Software: ₹1,00,000+\n🤖 AI Solutions: ₹1,00,000+\n\n💡 Exact quote ke liye project details share karein:\n📞 +91 92118 16999\n📧 info@royalfinitytechnologies.com",
      english: "Our service pricing (🎉 70% OFF running!):\n\n🌐 Website Development:\n  • Basic: ₹15,000–₹30,000\n  • Business: ₹30,000–₹80,000\n  • E-commerce: ₹40,000–₹1,00,000+\n\n📱 Mobile App:\n  • Basic: ₹50,000–₹1,00,000\n  • Medium: ₹1,00,000–₹3,00,000\n\n📣 Digital Marketing:\n  • Starting: ₹10,000/month\n\n🎨 Branding/Logo:\n  • Logo: ₹8,000–₹25,000\n  • Complete: ₹25,000–₹80,000\n\n💻 ERP/Software: ₹1,00,000+\n🤖 AI Solutions: ₹1,00,000+\n\n💡 For exact quote, share project details:\n📞 +91 92118 16999\n📧 info@royalfinitytechnologies.com"
    }
  },

  // ── Discount / offer ──
  {
    keywords: ["discount", "offer", "70%", "70 percent", "sale", "promotion", "deal", "chhoot", "offer chal raha", "koi offer", "special offer", "limited offer"],
    answer: {
      hindi: "Haan! 🎉 Abhi hamare paas SPECIAL 70% DISCOUNT offer chal raha hai!\n\n✅ Ye offer include karta hai:\n• Sabhi services pe 70% off\n• Free consultation\n• Free domain (1 year)\n• Free SSL certificate\n• 3 months free support\n\n⚠️ Ye limited time offer hai — jaldi contact karein!\n\n📞 +91 92118 16999\n💬 WhatsApp: +91 92118 16999\n📧 info@royalfinitytechnologies.com",
      english: "Yes! 🎉 We have a SPECIAL 70% DISCOUNT offer running right now!\n\n✅ This offer includes:\n• 70% off on all services\n• Free consultation\n• Free domain (1 year)\n• Free SSL certificate\n• 3 months free support\n\n⚠️ This is a limited time offer — contact us quickly!\n\n📞 +91 92118 16999\n💬 WhatsApp: +91 92118 16999\n📧 info@royalfinitytechnologies.com"
    }
  },

  // ── Timeline / delivery ──
  {
    keywords: ["kitne din mein", "kitne time mein", "timeline", "delivery time", "kab milega", "kab tak", "how long", "duration", "time lagega", "jaldi", "urgent", "fast delivery", "quick"],
    answer: {
      hindi: "Project delivery timeline:\n\n⚡ Logo Design: 48 ghante (first draft)\n🌐 Basic Website: 5–7 din\n🏢 Business Website: 2–3 hafte\n🛒 E-commerce Store: 3–4 hafte\n📱 Mobile App: 4–8 hafte\n💻 ERP/Software: 8–16 hafte\n📣 Marketing Campaign: 3–5 din setup\n\n💡 Urgent project bhi handle karte hain!\nExtra charges apply ho sakte hain urgent cases mein.\n\n📞 +91 92118 16999",
      english: "Project delivery timeline:\n\n⚡ Logo Design: 48 hours (first draft)\n🌐 Basic Website: 5–7 days\n🏢 Business Website: 2–3 weeks\n🛒 E-commerce Store: 3–4 weeks\n📱 Mobile App: 4–8 weeks\n💻 ERP/Software: 8–16 weeks\n📣 Marketing Campaign: 3–5 days setup\n\n💡 We also handle urgent projects!\nExtra charges may apply for urgent cases.\n\n📞 +91 92118 16999"
    }
  },

  // ── Contact ──
  {
    keywords: ["contact", "reach", "phone number", "call karna", "email", "whatsapp number", "address", "kaise contact", "baat karni hai", "milna hai", "contact details", "number do"],
    answer: {
      hindi: "Hum se contact karein — hum hamesha available hain! 📞\n\n📞 Phone: +91 92118 16999\n📧 Email: info@royalfinitytechnologies.com\n💬 WhatsApp: +91 92118 16999\n📍 Office: 5C/15, New Industrial Township 5,\n   Faridabad, Haryana 121001\n\n🕐 Business Hours:\nMonday – Saturday: 10:00 AM – 7:00 PM IST\n\n💡 WhatsApp pe message karna sabse fast tarika hai!",
      english: "Contact us — we're always available! 📞\n\n📞 Phone: +91 92118 16999\n📧 Email: info@royalfinitytechnologies.com\n💬 WhatsApp: +91 92118 16999\n📍 Office: 5C/15, New Industrial Township 5,\n   Faridabad, Haryana 121001\n\n🕐 Business Hours:\nMonday – Saturday: 10:00 AM – 7:00 PM IST\n\n💡 WhatsApp messaging is the fastest way to reach us!"
    }
  },

  // ── Location ──
  {
    keywords: ["location", "address", "office", "kahan ho", "kahan hai", "faridabad", "haryana", "india", "where are you", "office kahan hai"],
    answer: {
      hindi: "Hamara office:\n\n📍 Main Office:\n5C/15, New Industrial Township 5\nFaridabad, Haryana 121001, India\n\n🕐 Mon–Sat: 10 AM – 7 PM IST\n📞 +91 92118 16999\n\n🌍 Hum globally bhi kaam karte hain:\nIndia, US, UK, UAE, aur duniya bhar ke clients ke saath!\n\nOnline meeting bhi arrange kar sakte hain. 😊",
      english: "Our office location:\n\n📍 Main Office:\n5C/15, New Industrial Township 5\nFaridabad, Haryana 121001, India\n\n🕐 Mon–Sat: 10 AM – 7 PM IST\n📞 +91 92118 16999\n\n🌍 We work globally with clients from:\nIndia, US, UK, UAE, and worldwide!\n\nWe can also arrange online meetings. 😊"
    }
  },

  // ── Team / founders ──
  {
    keywords: ["team", "founder", "ceo", "cto", "bhumika", "lavish", "kaun hai", "owner", "director", "management", "team kaisi hai", "kitne log hain"],
    answer: {
      hindi: "RoyalFinity Technologies ki leadership team:\n\n👩‍💼 Bhumika Gandhi — Co-Founder & CEO\n• Vision aur client success ki driving force\n• Long-term partnerships build karne mein expert\n• Client satisfaction unki top priority hai\n\n👨‍💻 Lavish Sachdeva — Co-Founder & CTO\n• Technical direction ke architect\n• Modern, scalable solutions ke specialist\n• Future-ready technology ka focus\n\n💪 Unke saath ek dedicated team hai:\n• Expert Developers\n• Creative Designers\n• Digital Marketing Specialists\n• AI & Automation Engineers",
      english: "RoyalFinity Technologies leadership team:\n\n👩‍💼 Bhumika Gandhi — Co-Founder & CEO\n• Driving force behind vision and client success\n• Expert in building long-term partnerships\n• Client satisfaction is her top priority\n\n👨‍💻 Lavish Sachdeva — Co-Founder & CTO\n• Architect of technical direction\n• Specialist in modern, scalable solutions\n• Focused on future-ready technology\n\n💪 Along with them, we have a dedicated team:\n• Expert Developers\n• Creative Designers\n• Digital Marketing Specialists\n• AI & Automation Engineers"
    }
  },

  // ── Portfolio / projects ──
  {
    keywords: ["portfolio", "projects", "kaam dekha", "sample", "example", "previous work", "clients", "kya banaya", "show me work", "kaam dikhao", "past projects"],
    answer: {
      hindi: "Hamare featured projects:\n\n🏭 Crictek Industries\n→ crictekindustries.com\nIndustrial corporate website\n\n💍 Shree Dauji Jewels\n→ shreedaujijewels.com\nPremium jewelry brand website\n\n🔧 RR Clamping Tools\n→ rrclampingtools.in\nIndustrial tools portfolio website\n\n📊 Overall stats:\n• 78+ projects delivered\n• 45+ happy clients\n• Industries: Manufacturing, Jewelry, Tools, Tech, Retail & more\n\nAur projects dekhne ke liye Portfolio section visit karein! 😊",
      english: "Our featured projects:\n\n🏭 Crictek Industries\n→ crictekindustries.com\nIndustrial corporate website\n\n💍 Shree Dauji Jewels\n→ shreedaujijewels.com\nPremium jewelry brand website\n\n🔧 RR Clamping Tools\n→ rrclampingtools.in\nIndustrial tools portfolio website\n\n📊 Overall stats:\n• 78+ projects delivered\n• 45+ happy clients\n• Industries: Manufacturing, Jewelry, Tools, Tech, Retail & more\n\nVisit our Portfolio section to see more projects! 😊"
    }
  },

  // ── Support / maintenance ──
  {
    keywords: ["support", "maintenance", "after delivery", "baad mein", "problem aaye", "bug fix", "update", "help milegi", "post delivery", "warranty", "guarantee"],
    answer: {
      hindi: "Hamare post-delivery support ke baare mein:\n\n✅ Har package mein included:\n• 3 months FREE support\n• Minor modifications & bug fixes\n• Technical assistance\n• Performance monitoring\n\n📦 Extended support plans:\n• 6 months: Additional charges\n• 1 year: Annual maintenance contract\n• 24/7 emergency support available\n\n💡 Aap akele nahi hain — hum hamesha saath hain!\n\n📞 +91 92118 16999\n📧 info@royalfinitytechnologies.com",
      english: "About our post-delivery support:\n\n✅ Included in every package:\n• 3 months FREE support\n• Minor modifications & bug fixes\n• Technical assistance\n• Performance monitoring\n\n📦 Extended support plans:\n• 6 months: Additional charges\n• 1 year: Annual maintenance contract\n• 24/7 emergency support available\n\n💡 You're not alone — we're always with you!\n\n📞 +91 92118 16999\n📧 info@royalfinitytechnologies.com"
    }
  },

  // ── Get started ──
  {
    keywords: ["get started", "start karna", "shuru karna", "kaise shuru", "project start", "kaam shuru", "how to start", "begin", "project dena", "kaam dena chahta hoon", "hire karna hai"],
    answer: {
      hindi: "Project shuru karna bahut aasaan hai! 🚀\n\nStep-by-step process:\n\n1️⃣ Contact karein\n   📞 +91 92118 16999 ya WhatsApp\n\n2️⃣ Free consultation\n   Apni requirements share karein\n\n3️⃣ Proposal & Quote\n   Hum 24 ghante mein detailed proposal bhejenge\n\n4️⃣ Agreement & Payment\n   Package confirm karein\n\n5️⃣ Kaam shuru!\n   Regular updates milte rahenge\n\n6️⃣ Delivery & Support\n   Project deliver + 3 months free support\n\n💡 Abhi 70% OFF chal raha hai — der mat karein!",
      english: "Starting a project is very easy! 🚀\n\nStep-by-step process:\n\n1️⃣ Contact us\n   📞 +91 92118 16999 or WhatsApp\n\n2️⃣ Free consultation\n   Share your requirements\n\n3️⃣ Proposal & Quote\n   We'll send detailed proposal within 24 hours\n\n4️⃣ Agreement & Payment\n   Confirm the package\n\n5️⃣ Work begins!\n   Regular updates will be provided\n\n6️⃣ Delivery & Support\n   Project delivery + 3 months free support\n\n💡 70% OFF is running now — don't delay!"
    }
  },

  // ── Quality / trust ──
  {
    keywords: ["quality", "achha kaam", "trustworthy", "reliable", "genuine", "fraud nahi", "sach mein", "bharosa", "trust", "review", "rating", "feedback", "satisfied clients"],
    answer: {
      hindi: "Hamare baare mein kyun trust karein? 🤝\n\n✅ Proof:\n• 78+ successfully delivered projects\n• 45+ satisfied clients\n• 99% client satisfaction rate\n• 2+ years in business\n• Real portfolio: crictekindustries.com, shreedaujijewels.com\n\n🏆 Hamare values:\n• Transparency — koi hidden charges nahi\n• Quality — best-in-class deliverables\n• Communication — regular updates\n• Support — 3 months free post-delivery\n\n💬 Client testimonials website pe dekh sakte hain!\n\nKoi bhi doubt ho toh seedha baat karein:\n📞 +91 92118 16999",
      english: "Why should you trust us? 🤝\n\n✅ Proof:\n• 78+ successfully delivered projects\n• 45+ satisfied clients\n• 99% client satisfaction rate\n• 2+ years in business\n• Real portfolio: crictekindustries.com, shreedaujijewels.com\n\n🏆 Our values:\n• Transparency — no hidden charges\n• Quality — best-in-class deliverables\n• Communication — regular updates\n• Support — 3 months free post-delivery\n\n💬 You can check client testimonials on our website!\n\nIf you have any doubts, talk to us directly:\n📞 +91 92118 16999"
    }
  },

  // ── Comparison / why choose ──
  {
    keywords: ["kyun choose karein", "why choose", "dusri company", "other agency", "better than", "kya fark hai", "unique", "special", "best agency", "aap kyu"],
    answer: {
      hindi: "RoyalFinity Technologies kyun choose karein? 🌟\n\n✅ Hamare advantages:\n• One-stop solution — sab kuch ek jagah\n• 70% discount — market se sabse affordable\n• Fast delivery — competitors se 2x faster\n• Dedicated project manager\n• Regular progress updates\n• 3 months free support (competitors mein nahi milta)\n• Transparent pricing — koi hidden charges nahi\n• Real portfolio — verified client websites\n\n💡 Hum sirf website nahi banate —\nHum aapka digital growth partner bante hain! 🚀\n\n📞 +91 92118 16999",
      english: "Why choose RoyalFinity Technologies? 🌟\n\n✅ Our advantages:\n• One-stop solution — everything under one roof\n• 70% discount — most affordable in the market\n• Fast delivery — 2x faster than competitors\n• Dedicated project manager\n• Regular progress updates\n• 3 months free support (not available with competitors)\n• Transparent pricing — no hidden charges\n• Real portfolio — verified client websites\n\n💡 We don't just build websites —\nWe become your digital growth partner! 🚀\n\n📞 +91 92118 16999"
    }
  },

  // ── Refund policy ──
  {
    keywords: ["refund", "paise wapas", "money back", "cancel", "cancellation", "return", "refund policy"],
    answer: {
      hindi: "Hamare refund policy ke baare mein:\n\n⚠️ Important:\nSabhi payments non-refundable hain ek baar service initiate hone ke baad.\n\n💡 Isliye hum recommend karte hain:\n✅ Pehle free consultation lein\n✅ Package details achhe se samjhein\n✅ Koi bhi doubt pehle clear karein\n✅ Phir payment karein\n\n🤝 Hum ensure karte hain ki aap 100% satisfied hon delivery se pehle!\n\nKoi concern ho toh:\n📞 +91 92118 16999\n📧 info@royalfinitytechnologies.com",
      english: "About our refund policy:\n\n⚠️ Important:\nAll payments are non-refundable once service is initiated.\n\n💡 That's why we recommend:\n✅ Take free consultation first\n✅ Understand package details properly\n✅ Clear any doubts beforehand\n✅ Then make payment\n\n🤝 We ensure you're 100% satisfied before delivery!\n\nIf you have any concerns:\n📞 +91 92118 16999\n📧 info@royalfinitytechnologies.com"
    }
  },

  // ── Payment methods ──
  {
    keywords: ["payment", "payment method", "kaise pay karein", "upi", "bank transfer", "online payment", "advance", "kitna advance", "payment kaise hoga"],
    answer: {
      hindi: "Payment ke baare mein:\n\n💳 Accepted payment methods:\n• UPI (GPay, PhonePe, Paytm)\n• Bank Transfer (NEFT/IMPS)\n• Razorpay (Cards, Net Banking)\n• Cash (for local clients)\n\n📋 Payment structure:\n• 50% advance — project start pe\n• 50% remaining — delivery pe\n\n💡 Large projects ke liye milestone-based payment bhi available hai.\n\nKoi bhi payment related query:\n📞 +91 92118 16999",
      english: "About payments:\n\n💳 Accepted payment methods:\n• UPI (GPay, PhonePe, Paytm)\n• Bank Transfer (NEFT/IMPS)\n• Razorpay (Cards, Net Banking)\n• Cash (for local clients)\n\n📋 Payment structure:\n• 50% advance — at project start\n• 50% remaining — at delivery\n\n💡 Milestone-based payment also available for large projects.\n\nFor any payment related queries:\n📞 +91 92118 16999"
    }
  },

  // ── SEO specific ──
  {
    keywords: ["seo kya hai", "seo kaise kaam karta", "google ranking", "website rank", "organic traffic", "search engine", "keyword ranking", "seo service"],
    answer: {
      hindi: "SEO (Search Engine Optimization) ke baare mein:\n\n🔍 SEO kya hai:\nYe process hai jisse aapki website Google pe top results mein aati hai — bina ads ke!\n\n✅ Hum kya karte hain:\n• Keyword research & strategy\n• On-page optimization (titles, meta, content)\n• Technical SEO (speed, mobile, structure)\n• Off-page SEO (backlinks, authority)\n• Local SEO (Google My Business)\n• Monthly reporting\n\n📈 Expected results:\n• 3–6 months mein visible improvement\n• Organic traffic 200% tak badh sakta hai\n\n💰 Starting: ₹10,000/month\n\n📞 +91 92118 16999",
      english: "About SEO (Search Engine Optimization):\n\n🔍 What is SEO:\nIt's the process to get your website on top Google results — without ads!\n\n✅ What we do:\n• Keyword research & strategy\n• On-page optimization (titles, meta, content)\n• Technical SEO (speed, mobile, structure)\n• Off-page SEO (backlinks, authority)\n• Local SEO (Google My Business)\n• Monthly reporting\n\n📈 Expected results:\n• Visible improvement in 3–6 months\n• Organic traffic can increase up to 200%\n\n💰 Starting: ₹10,000/month\n\n📞 +91 92118 16999"
    }
  },

  // ── Social media ──
  {
    keywords: ["social media", "instagram", "facebook", "youtube", "linkedin", "social media management", "page manage", "followers badhao", "social media handle"],
    answer: {
      hindi: "Social Media Management:\n\n📱 Platforms hum handle karte hain:\n• Instagram, Facebook, LinkedIn\n• YouTube, Twitter/X\n• Google My Business\n\n✅ Kya milega:\n• Content calendar & strategy\n• Daily/weekly posts\n• Reels & video content\n• Community management\n• Paid ad campaigns\n• Monthly analytics report\n\n📈 Results:\n• Followers growth\n• Better engagement\n• More leads from social\n\n💰 Starting: ₹8,000/month\n\n📞 +91 92118 16999",
      english: "Social Media Management:\n\n📱 Platforms we handle:\n• Instagram, Facebook, LinkedIn\n• YouTube, Twitter/X\n• Google My Business\n\n✅ What you get:\n• Content calendar & strategy\n• Daily/weekly posts\n• Reels & video content\n• Community management\n• Paid ad campaigns\n• Monthly analytics report\n\n📈 Results:\n• Followers growth\n• Better engagement\n• More leads from social\n\n💰 Starting: ₹8,000/month\n\n📞 +91 92118 16999"
    }
  },

  // ── Hosting / domain ──
  {
    keywords: ["hosting", "domain", "server", "website host", "domain name", "hosting chahiye", "website kahan host hogi", "ssl", "security"],
    answer: {
      hindi: "Hosting & Domain ke baare mein:\n\n🌐 Domain:\n• .com, .in, .co.in — available\n• Free domain 1 year (hamare packages mein)\n\n🖥️ Hosting:\n• Fast cloud hosting included\n• 99.9% uptime guarantee\n• Free SSL certificate\n• Daily backups\n• CDN for fast loading\n\n🔒 Security:\n• SSL encryption (HTTPS)\n• DDoS protection\n• Regular security updates\n\n💡 Hamare website packages mein hosting & domain included hota hai!\n\n📞 +91 92118 16999",
      english: "About Hosting & Domain:\n\n🌐 Domain:\n• .com, .in, .co.in — available\n• Free domain 1 year (included in our packages)\n\n🖥️ Hosting:\n• Fast cloud hosting included\n• 99.9% uptime guarantee\n• Free SSL certificate\n• Daily backups\n• CDN for fast loading\n\n🔒 Security:\n• SSL encryption (HTTPS)\n• DDoS protection\n• Regular security updates\n\n💡 Hosting & domain are included in our website packages!\n\n📞 +91 92118 16999"
    }
  },

  // ── Maintenance ──
  {
    keywords: ["website maintain", "website update", "content update", "website change", "website mein changes", "update karna hai", "website maintain karo"],
    answer: {
      hindi: "Website Maintenance & Updates:\n\n✅ Hum kya karte hain:\n• Content updates (text, images, products)\n• Security patches & updates\n• Performance optimization\n• Bug fixes\n• New features addition\n• Regular backups\n\n📦 Maintenance plans:\n• Basic: ₹3,000/month\n• Standard: ₹6,000/month\n• Premium: ₹12,000/month\n\n💡 Hamare packages mein 3 months free maintenance included hai!\n\n📞 +91 92118 16999",
      english: "Website Maintenance & Updates:\n\n✅ What we do:\n• Content updates (text, images, products)\n• Security patches & updates\n• Performance optimization\n• Bug fixes\n• New features addition\n• Regular backups\n\n📦 Maintenance plans:\n• Basic: ₹3,000/month\n• Standard: ₹6,000/month\n• Premium: ₹12,000/month\n\n💡 3 months free maintenance included in our packages!\n\n📞 +91 92118 16999"
    }
  },

  // ── Thank you ──
  {
    keywords: ["thank", "thanks", "shukriya", "bahut acha", "great", "awesome", "nice", "good", "helpful", "accha", "bahut helpful", "samajh aa gaya"],
    answer: {
      hindi: "Bahut shukriya! 😊 Khushi hui ki main help kar saka.\n\nAgar koi aur sawaal ho toh zaroor poochhin — main hamesha yahan hoon!\n\nAur agar project discuss karna ho:\n📞 +91 92118 16999\n💬 WhatsApp us anytime!\n\nRoyalFinity Technologies hamesha aapki service mein hai! 🙏",
      english: "Thank you so much! 😊 Happy to help you.\n\nIf you have any other questions, feel free to ask — I'm always here!\n\nAnd if you want to discuss a project:\n📞 +91 92118 16999\n💬 WhatsApp us anytime!\n\nRoyalFinity Technologies is always at your service! 🙏"
    }
  },

  // ── Bye ──
  {
    keywords: ["bye", "goodbye", "alvida", "ok bye", "see you", "later", "band karo", "theek hai", "ok thanks"],
    answer: {
      hindi: "Alvida! 👋 Aapka din shubh ho!\n\nKabhi bhi wapas aayein — hum hamesha yahan hain.\n\n📞 +91 92118 16999\n💬 WhatsApp: +91 92118 16999\n\nRoyalFinity Technologies — Aapka Digital Growth Partner! 🚀",
      english: "Goodbye! 👋 Have a great day!\n\nCome back anytime — we're always here.\n\n📞 +91 92118 16999\n💬 WhatsApp: +91 92118 16999\n\nRoyalFinity Technologies — Your Digital Growth Partner! 🚀"
    }
  },
];

export const defaultReply = {
  hindi: "Hmm, mujhe exactly samajh nahi aaya. 🤔\n\nAap in topics ke baare mein pooch sakte hain:\n• 🌐 Website / App banana\n• 📣 Digital Marketing & SEO\n• 💰 Pricing & packages\n• 🛒 E-commerce store\n• 🤖 AI & Automation\n• 📞 Contact details\n• ⏱️ Delivery timeline\n\nYa seedha baat karein:\n📞 +91 92118 16999\n💬 WhatsApp us!",
  english: "Hmm, I didn't quite understand that. 🤔\n\nYou can ask about these topics:\n• 🌐 Website / App development\n• 📣 Digital Marketing & SEO\n• 💰 Pricing & packages\n• 🛒 E-commerce store\n• 🤖 AI & Automation\n• 📞 Contact details\n• ⏱️ Delivery timeline\n\nOr contact us directly:\n📞 +91 92118 16999\n💬 WhatsApp us!"
};

export function getBotReply(input: string): string {
  const lower = input.toLowerCase().trim();
  const language = detectLanguage(input);

  let bestMatch: BotQA | null = null;
  let bestScore = 0;

  for (const qa of botQA) {
    for (const kw of qa.keywords) {
      if (lower.includes(kw) && kw.length > bestScore) {
        bestScore = kw.length;
        bestMatch = qa;
      }
    }
  }

  if (bestMatch) {
    // Check if answer has both languages or is old format
    if (typeof bestMatch.answer === 'object' && bestMatch.answer[language]) {
      return bestMatch.answer[language];
    } else if (typeof bestMatch.answer === 'string') {
      // Fallback for old format entries
      return bestMatch.answer;
    }
  }

  return defaultReply[language];
}
