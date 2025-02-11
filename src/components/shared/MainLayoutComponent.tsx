import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

type Props = {
  childComponent: React.ReactNode;
};
const MainLayoutComponent = ({ childComponent }: Props) => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">{childComponent}</main>
      <Footer />
      <MobileBottomBar />
    </>
  );
};

export default MainLayoutComponent;
