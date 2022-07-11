import React from "react";
import PageLayout from "../layouts/PageLayout";
import { getUsingTable } from "../lib/getAirbnbData";

const Using = ({ usingTable }) => {
  return (
    <PageLayout>
      {usingTable.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </PageLayout>
  );
};

export default Using;

export async function getStaticProps() {
  return {
    props: {
      usingTable: await getUsingTable(),
    },
  };
}
