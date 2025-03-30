import type { Metadata } from "next";
import "./globals.css";
import Page from "../components/ui/Navbar/page";
import Footer from "../components/ui/footer";
import WhatsappButton from " @/components/WhatsappButton";


export const metadata: Metadata = {
  title: "Fatima Kidney Care Hospital.",
  description: " Support those in need with a reliable and safe donation system. ",
  icons: {
    icon: "/donation.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="divide-y-4 divide-gray-700">
        <div className="border-t-4 border-gray-900">
          <Page />  
          <WhatsappButton /> {/* Add the WhatsApp button here */}
          <main className="min-h-screen">{children}</main>  {/* Only render the current route */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

