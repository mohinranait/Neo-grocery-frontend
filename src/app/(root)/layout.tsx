import Footer from "@/src/components/shared/Footer";
import Header from "@/src/components/shared/Header";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};
const MainLayout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
