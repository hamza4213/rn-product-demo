const ur = {
  common: {
    ok: "ٹھیک ہے!",
    cancel: "منسوخ کریں",
    back: "واپس جائیں",
    language: "زبان",
    darkMode: "ڈارک موڈ",
    theme: "تھیم",
  },
  welcomeScreen: {
    postscript:
      "پسٹ — شاید آپ کی ایپ اس طرح نہیں لگتی۔ (اگر آپ کے ڈیزائنر نے آپ کو یہی اسکرینز دی ہیں، تو پھر اسے شائع کریں!)",
    readyForLaunch: "آپ کی ایپ تقریباً لانچ کے لیے تیار ہے!",
    exciting: "(اوہ، یہ تو دلچسپ ہے!)",
  },
  errorScreen: {
    title: "کچھ غلط ہو گیا!",
    friendlySubtitle:
      "یہ وہ اسکرین ہے جو آپ کے صارفین کو اس وقت نظر آئے گی جب کوئی خرابی پیش آئے گی۔ آپ اس پیغام (`app/i18n/en.ts`) اور لے آؤٹ (`app/screens/ErrorScreen`) کو اپنی مرضی کے مطابق بنا سکتے ہیں۔ اگر آپ اسے مکمل طور پر ہٹانا چاہتے ہیں، تو `app/app.tsx` میں موجود <ErrorBoundary> چیک کریں۔",
    reset: "ایپ ری سیٹ کریں",
  },
  emptyStateComponent: {
    generic: {
      heading: "کتنا خالی... کتنا اداس",
      content:
        "ابھی تک کوئی ڈیٹا نہیں ملا۔ دوبارہ کوشش کرنے یا ایپ ری لوڈ کرنے کے لیے بٹن دبائیں۔",
      button: "چلیں دوبارہ کوشش کرتے ہیں",
    },
  },
  app: {
    title: "حمزہ اسٹور",
  },
  product: {
    details: "پروڈکٹ کی تفصیلات",
    addToCart: "کارٹ میں شامل کریں",
    price: "قیمت",
    products: "مصنوعات",
    errorlist: "مصنوعات کی فہرست لوڈ کرنے میں خرابی۔",
    errorDetails: "مصنوعات کی تفصیلات لوڈ کرنے میں خرابی۔",
  },
  settings: {
    title: "ترتیبات",
  },
};

export default ur;
export type Translations = typeof ur;
