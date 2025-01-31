import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MobileBottomBar from "@/components/shared/MobileBottomBar";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default MainLayout;
