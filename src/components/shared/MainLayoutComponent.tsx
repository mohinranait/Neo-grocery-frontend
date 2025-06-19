// import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";
import CartSheets from "../sheets/CartSheets";
import Component from "../test-comp";

type Props = {
  childComponent: React.ReactNode;
};
const MainLayoutComponent = ({ childComponent }: Props) => {
  return (
    <>
      {/* <Header /> */}
      <Component />
      <main className="overflow-x-hidden">{childComponent}</main>
      <Footer />
      <MobileBottomBar />
      <CartSheets />
    </>
  );
};

export default MainLayoutComponent;
