import ThemeProvider from "@/components/providers/ThemeProvider";

import Header from "@/components/Header";

import { Toaster } from "@/components/ui/toaster";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {children}
      <Toaster />
    </ThemeProvider>
  );
};

export default Providers;
