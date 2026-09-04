import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import './globals.css';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: '--font-ibm-plex-sans-thai',
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ทำเนียบข้อมูลสาธารณะ',
  description: 'ค้นหาและสำรวจรายชื่อจากเอกสารเผยแพร่สาธารณะ แยกตามจังหวัด อำเภอ และหน่วยงาน',
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
