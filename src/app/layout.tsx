import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import classNames from 'classnames';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mats Fjeldstad - Portfolio',
  description:
    'Mats Fjeldstad is a frontend developer based in Norway. Working with React, TypeScript, and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classNames('scroll-smooth scrollbar-hide', inter.className)}>
        <div className="relative h-full min-h-screen w-full bg-gray-950 ">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
