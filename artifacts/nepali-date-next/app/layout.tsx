import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { JsonLd, webApplicationLd, organizationLd, websiteLd } from "@/components/seo/JsonLd";
import { ROOT_METADATA } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const GTM_ID = "GTM-WT32SWZP";

// Standard GTM init snippet, kept verbatim so the inline <script> in <head>
// matches what Google's container instructions produce.
const GTM_INLINE = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

// Font weights are tuned to what the UI actually uses:
//  - Manrope (body sans)  : font-normal/medium/semibold/bold
//  - Jakarta (serif heads): adds font-extrabold for prose H1 defaults and
//    font-black for the Nepali patro display heading
//  - JetBrains Mono       : 400 + 700 (code blocks and the Kathmandu clock)
// Loading the previous 7 weights per family ballooned the font payload
// without any visible benefit. Re-add a weight if a new style needs it.
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = ROOT_METADATA;

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Google Tag Manager — keep as high in <head> as possible */}
        <script dangerouslySetInnerHTML={{ __html: GTM_INLINE }} />
        {/* End Google Tag Manager */}
        <JsonLd data={[organizationLd, websiteLd, webApplicationLd]} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — first thing in <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
