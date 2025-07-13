import {Geist} from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
export const primaryFont = localFont({
    src : "../../public/fonts/primary.otf",
});
