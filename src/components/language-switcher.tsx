import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Lang = "uz" | "en" | "ru";

const LANGUAGES: { code: Lang; short: string; name: string }[] = [
  { code: "uz", short: "O'ZB", name: "O'zbekcha" },
  { code: "en", short: "ENG", name: "English" },
  { code: "ru", short: "РУС", name: "Русский" },
];

export function LanguageSwitcher({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`Til / Language: ${current.name}`}
        className="flex items-center gap-1.5 rounded-full border border-foreground bg-foreground px-3 py-1.5 text-xs font-bold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
      >
        <Globe className="h-3.5 w-3.5" aria-hidden />
        {current.short}
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => onChange(l.code)}
            lang={l.code}
            className="flex items-center justify-between gap-3 text-sm font-semibold"
          >
            <span>{l.name}</span>
            {l.code === lang && <Check className="h-4 w-4" aria-hidden />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
