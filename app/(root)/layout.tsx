import Header from "@/components/shared/header";
import Footer from "@/components/footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
     <Header />
      <main className="flex-1 wrapper">
        {children}
      </main>
     <Footer />
    </div>
  );
}
