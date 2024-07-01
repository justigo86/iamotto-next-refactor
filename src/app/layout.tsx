import type { Metadata } from "next";
import "../index.scss";
import { ThemeProvider } from "src/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <noscript>You need to enable JavaScript to run this app.</noscript> */}
          <div id="root">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
