import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher, type Lang } from "@/components/language-switcher";

const SITE_URL = "https://azamat-klaviatura.vercel.app";
const DOWNLOAD_URL = "https://github.com/Azamat-Raximov/azamat-klaviatura/releases/download/1.0/Setup.exe";
const TITLE = "Azamat Klaviatura — Windows uchun avtomatik almashtirgich";
const DESC = "Yangi alifboga avtomatik o'tkazuvchi Windows dasturi: o' → ö, g' → ğ, sh → ş, ch → ç.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Azamat Klaviatura",
  url: SITE_URL,
  description:
    "Free Windows 10/11 tray app that automatically converts Uzbek Latin text to the new Uzbek alphabet while you type (o' → ö, g' → ğ, sh → ş, ch → ç) in Telegram, Word, browsers and Notepad.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows 10, Windows 11",
  inLanguage: ["uz", "en", "ru"],
  downloadUrl: DOWNLOAD_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: [
    "Runs quietly in the system tray",
    "Works in Telegram, Word, browsers, Notepad — anywhere",
    "Automatically converts o' → ö, g' → ğ, sh → ş, ch → ç as you type",
    "Capital letters become Ö, Ğ, Ş, Ç",
    "Understands every apostrophe type: ' ` ’ ʻ",
    "Smart memory keeps converting correctly after Backspace",
    "Does not break Russian words on a Cyrillic keyboard",
    "Pause or resume from the tray menu",
    "Starts automatically with Windows",
  ],
  video: {
    "@type": "VideoObject",
    name: "Azamat Klaviatura — how it works",
    embedUrl: "https://www.youtube.com/embed/svgKiBKf1m0",
    thumbnailUrl: "https://i.ytimg.com/vi/svgKiBKf1m0/hqdefault.jpg",
    uploadDate: "2026-11-20",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Azamat Klaviatura, yangi alifbo, o'zbek lotin alifbosi, ö ğ ş ç, Windows klaviatura, Uzbek new alphabet, узбекский алфавит" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "uz_UZ" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: Index,
});

type Item = [string, string, string];
const T: Record<Lang, { dl: string; title: string; sub: [string, string, string]; feat: string; items: Item[]; video: string; btn: string }> = {
  uz: {
    dl: "Yuklab olish", title: "Yangi alifboda yozish endi oson!",
    sub: ["Telegram, Word, brauzer yoki bloknot — qayerda yozmang, ", "Azamat Klaviatura", " matningizni bir zumda yangi alifboga almashtiradi."],
    feat: "Dastur imkoniyatlari",
    items: [
      ["Kompyuterning orqa fonida (tray rejimida) ", "jimgina ishlaydi", " va xalaqit bermaydi"],
      ["", "Telegram, Word, brauzer, bloknot", " — istalgan joyda ishlaydi"],
      ["Yozish jarayonida ", "o' → ö, g' → ğ, sh → ş, ch → ç", " ga avtomatik o'zgartiradi"],
      ["Katta harflar ham mos ravishda ", "Ö, Ğ, Ş, Ç", " ga aylanadi"],
      ["Tutuq belgisining ", "barcha turlarini", " tushunadi: ' ` ’ ʻ"],
      ["", "Aqlli xotira", ": Backspace bilan xatoni o'chirsangiz ham to'g'ri almashtirishda davom etadi"],
      ["Kirill klaviaturada yozganda ", "ruscha so'zlarni buzmaydi", ""],
      ["Pastki o'ng burchakdagi menyu orqali ", "pauza qilish yoki qayta yoqish", " mumkin"],
      ["Kompyuter yoqilganda ", "avtomatik ishga tushadi", ""],
    ],
    video: "Dastur qanday ishlaydi", btn: "Dasturni yuklash",
  },
  en: {
    dl: "Download", title: "Typing in the new alphabet is now easy!",
    sub: ["Telegram, Word, browser or Notepad — wherever you type, ", "Azamat Klaviatura", " instantly converts your text to the new Uzbek alphabet."],
    feat: "Features",
    items: [
      ["Runs ", "quietly in the system tray", " without getting in your way"],
      ["Works in ", "Telegram, Word, browsers, Notepad", " — anywhere"],
      ["Automatically converts ", "o' → ö, g' → ğ, sh → ş, ch → ç", " as you type"],
      ["Capital letters become ", "Ö, Ğ, Ş, Ç", " accordingly"],
      ["Understands ", "every apostrophe type", ": ' ` ’ ʻ"],
      ["", "Smart memory", ": keeps converting correctly even after you fix a typo with Backspace"],
      ["", "Never breaks Russian words", " when typing on a Cyrillic keyboard"],
      ["", "Pause or resume", " anytime from the tray menu in the bottom-right corner"],
      ["", "Starts automatically", " when your computer turns on"],
    ],
    video: "How it works", btn: "Download the app",
  },
  ru: {
    dl: "Скачать", title: "Писать на новом алфавите теперь легко!",
    sub: ["Telegram, Word, браузер или блокнот — где бы вы ни писали, ", "Azamat Klaviatura", " мгновенно переводит текст на новый узбекский алфавит."],
    feat: "Возможности программы",
    items: [
      ["Работает ", "тихо в системном трее", " и не мешает"],
      ["Работает в ", "Telegram, Word, браузере, блокноте", " — везде"],
      ["Автоматически заменяет ", "o' → ö, g' → ğ, sh → ş, ch → ç", " при наборе"],
      ["Заглавные буквы становятся ", "Ö, Ğ, Ş, Ç", ""],
      ["Понимает ", "все виды апострофа", ": ' ` ’ ʻ"],
      ["", "Умная память", ": продолжает правильно заменять даже после исправления через Backspace"],
      ["", "Не портит русские слова", " при наборе на кириллице"],
      ["", "Пауза и включение", " в любой момент через меню в правом нижнем углу"],
      ["", "Автозапуск", " при включении компьютера"],
    ],
    video: "Как это работает", btn: "Скачать программу",
  },
};

function LazyVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="aspect-video overflow-hidden rounded-2xl border-4 border-foreground/20 shadow-2xl">
      {started && (
        <iframe className="h-full w-full"
          src="https://www.youtube.com/embed/svgKiBKf1m0?autoplay=1&mute=1&loop=1&playlist=svgKiBKf1m0&rel=0"
          title="Azamat Klaviatura" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      )}
    </div>
  );
}

function WinLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 88 88" className={className} fill="currentColor" aria-hidden>
      <path d="M0 12.4 35.7 7.6v34.5H0zM40.1 6.9 87.3 0v41.8H40.1zM0 45.7h35.7v34.6L0 75.4zM40.1 46.2h47.2V88l-47.2-6.7z" />
    </svg>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("uz");
  const t = T[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <header className="flex items-center justify-between gap-2 px-4 pt-3">
        <span className="text-sm font-extrabold leading-tight tracking-tight sm:text-base md:text-lg">Azamat Klaviatura</span>
        <div className="flex items-center gap-1">
          <a href={DOWNLOAD_URL}
            className="mr-1 flex items-center gap-2 whitespace-nowrap rounded-full sm:mr-2 bg-foreground px-4 py-2 text-xs font-bold text-background transition-opacity hover:opacity-90">
            <WinLogo className="h-4 w-4" />
            {t.dl} <span className="hidden opacity-70 sm:inline">Windows 10/11</span>
          </a>
          <LanguageSwitcher lang={lang} onChange={setLang} />
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center px-4 pb-14 pt-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">{t.title}</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-hero-muted md:text-lg">
            {t.sub[0]}<b className="text-foreground">{t.sub[1]}</b>{t.sub[2]}
          </p>
        </div>

        <div className="mx-auto mb-12 flex w-full max-w-2xl flex-col gap-12 lg:max-w-6xl lg:flex-row lg:items-start lg:gap-12">
          <section className="w-full lg:flex-1">
            <h2 className="mb-6 text-center text-xl font-bold tracking-wide md:text-2xl lg:text-left">{t.feat}</h2>
            <ul className="space-y-3 text-base text-hero-muted md:text-lg lg:text-base xl:text-lg">
              {t.items.map(([a, b, c], i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-foreground" />
                  <span className="leading-relaxed">{a}<b className="font-semibold text-foreground">{b}</b>{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="w-full lg:sticky lg:top-6 lg:flex-1">
            <h2 className="mb-6 text-center text-xl font-bold tracking-wide md:text-2xl lg:text-left">{t.video}</h2>
            <LazyVideo />
            <p className="mt-3 text-sm leading-relaxed text-hero-muted">
              *dastur 100% xavfsiz va uni ochiq kodini{" "}
              <a
                href="https://github.com/Azamat-Raximov/azamat-klaviatura"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline underline-offset-4 hover:opacity-80"
              >
                github sahifada
              </a>{" "}
              ko&apos;rishingiz mumkin
            </p>
          </section>
        </div>

        <a href={DOWNLOAD_URL}
          className="flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-extrabold uppercase tracking-wide text-background shadow-2xl transition-transform hover:scale-105">
          <WinLogo className="h-5 w-5" /> {t.btn}
        </a>
        <p className="mt-3 text-sm text-hero-muted">Windows 10 / 11</p>
      </main>

      <footer className="border-t border-foreground/10 px-4 py-6 text-center text-sm text-hero-muted">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">Azamat Raximov</span>
          <span className="mx-2" aria-hidden>·</span>
          <a href="https://t.me/azamat_442" target="_blank" rel="noopener noreferrer"
            className="font-semibold text-foreground underline-offset-4 hover:underline">
            Telegram: @azamat_442
          </a>
        </p>
      </footer>
    </div>
  );
}
