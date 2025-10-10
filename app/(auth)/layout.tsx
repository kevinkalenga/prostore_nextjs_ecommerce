import Header from "@/components/shared/header";
import Footer from "@/components/footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex-center min-h-screen w-full">
      {children}
     
    </div>
  );
}