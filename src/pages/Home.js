import React, { useContext } from "react";
import { GlobalContext } from "../Context";

import Layout from "../Layout";
import ProductCard from "../components/ProductCard";
import NotFoundComponent from "../components/NotFound";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const { data, loading, notFound, requestError } = useContext(GlobalContext);

  return (
    <Layout>
      {notFound && <NotFoundComponent />}

      {requestError ? (
        <h1 className="error-text">
          Um erro foi encontrado, recarregue e página e tente novamente
        </h1>
      ) : (
        <div className="wrapperProducts">
          {loading
            ? Array(15)
                .fill()
                .map((el, idx) => {
                  return <Skeleton key={idx} />;
                })
            : data.map((item) => {
                return (
                  <ProductCard
                    key={item.node.id}
                    img={item.node.photo.image_public_id}
                    title={item.node.title.name}
                    currentPrice={item.node.price.current}
                    originalPrice={item.node.price.original}
                    path={item.node.path}
                  />
                );
              })}
        </div>
      )}
    </Layout>
  );
};

export default Home;
