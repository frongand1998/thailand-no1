import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const ibmPlexSansThai = localFont({
  variable: '--font-ibm-plex-sans-thai',
  display: 'swap',
  src: [
    { path: '../public/fonts/ibm-plex-sans-thai-400.ttf', weight: '400' },
    { path: '../public/fonts/ibm-plex-sans-thai-500.ttf', weight: '500' },
    { path: '../public/fonts/ibm-plex-sans-thai-600.ttf', weight: '600' },
    { path: '../public/fonts/ibm-plex-sans-thai-700.ttf', weight: '700' },
  ],
});

export const metadata: Metadata = {
  title: 'Thailand Public Records Explorer | Search People and Agencies',
  description: 'ค้นหาและสำรวจรายชื่อจากเอกสารเผยแพร่สาธารณะ แยกตามจังหวัด อำเภอ และหน่วยงาน',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${ibmPlexSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
