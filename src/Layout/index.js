import React, { useContext } from "react";
import { GlobalContext } from "../Context";

import Header from "../components/Header";
import Total from "../components/Total";
import Search from "../components/Search";

const Layout = ({ children }) => {
  const { total, loading } = useContext(GlobalContext);

  return (
    <main className="main">
      <Header />
      {!loading && (
        <section className="filtro">
          <Total total={total} />
          <Search />
        </section>
      )}

      {children}
    </main>
  );
};

export default Layout;
