import { ThemeProvider } from "@/components/ThemeProvider";
import { Michroma, Space_Grotesk } from "next/font/google";
import "./globals.css";

// font.family.primary — display face. Michroma ships weight 400 only.
const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

// Body face. Michroma is display-only, so long-form copy runs on a grotesk.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "Sahid Hossain",
  description: "Sahid Hossain Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${michroma.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
