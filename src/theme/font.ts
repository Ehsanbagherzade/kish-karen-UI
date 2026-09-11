import localFont from "next/font/local";

export const iranYekan = localFont({
  src: [
    {
      path: "../assets/fonts/Iranyekan(FaNum).woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iranyekan-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iranyekan-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
});
