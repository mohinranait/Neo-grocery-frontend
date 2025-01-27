import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};
const MainLayout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
