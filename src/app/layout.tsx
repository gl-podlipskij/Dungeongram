import type { Metadata } from "next";
import {ReactNode} from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {GlobalStyles, ThemeProvider} from "@mui/material";
import theme from "@/theme/theme";
import globalStyles from "@/theme/globalStyles";


export const metadata: Metadata = {
  title: "Dungeongram",
  description: "for real dnd lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles styles={globalStyles}/>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
