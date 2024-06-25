import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Posterizer",
  description:
    "Posterizer offers a fun and interactive environment with cool tools that make communicating with your friends and followers easy. You can customize your profile, create posts, and even discover new content from other users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
