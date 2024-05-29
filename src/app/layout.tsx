import type { Metadata } from "next";
import 'aos/dist/aos.css';
import "./globals.css";
import Header from "./(root)/_components/layouts/Header";

export const metadata: Metadata = {
  title: "NeeChaNz - Commission Website",
  description: 'เว็บโชว์ผลงานและสั่งงาน Commission',
  keywords: '_NeeChaNz ツ, _NeeChaNz, NeeChaNz, Dimension Studio, Minecraft, Plugin, Modding',
  icons: '/logo.png',

  metadataBase: new URL('https://neechanz.ppekkungz.in.th'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'th-TH': '/th-TH',
    },
  },
  openGraph: {
    images: '/logo.png',
    url: 'https://neechanz.ppekkungz.in.th',
    type: 'article', // or website
    locale: 'th_TH',
    description: 'เว็บโชว์ผลงานและสั่งงาน Commission',
  },
  twitter: {
    images: '/logo.png',
    title: 'NeeChaNz - Commission Website',
    card: 'summary_large_image',
    site: '_NeeChaNz ツ',
    creator: '@PPekKunGzDev, @_KimKunG, @NovaSystem, @DimensionStudio',
    description: 'เว็บโชว์ผลงานและสั่งงาน Commission',
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
          {children}
      </body>
    </html>
  );
}
