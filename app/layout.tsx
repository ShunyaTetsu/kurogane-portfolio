import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Cinzel } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
});

const cinzel = Cinzel({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KUROGANE — まだ世にないものをカタチにする",
  description: "「作る熱が、使う感動になる。」心が動くものだけを手がけるKUROGANEのポートフォリオサイト。アプリ開発・SNS戦略のご相談はこちらから。",
  openGraph: {
    title: "KUROGANE — まだ世にないものをカタチにする",
    description: "「作る熱が、使う感動になる。」心が動くものだけを手がけるKUROGANEのポートフォリオサイト。アプリ開発・SNS戦略のご相談はこちらから。",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${cinzel.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
