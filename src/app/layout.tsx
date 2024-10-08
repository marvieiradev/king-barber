import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "./_components/ui/sonner";
import Footer from "./_components/footer";
import AuthProvider from "./_providers/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "King Barber",
  description: "Agende com os melhores barbeiros da região!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="flex flex-col h-full">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              toast:
                "md:w-[500px] md:text-lg flex itens-center bg-primary border-none",
              description: "md:text-lg",
              actionButton: "md:text-lg",
            },
          }}
        />
      </body>
    </html>
  );
}
