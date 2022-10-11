import React from "react";
import PageLayout from "../components/PageLayout";
import { getUsingTable } from "../lib/getAirbnbData";

const Using = ({ usingTable }) => {
  return (
    <PageLayout
      title="Uses"
      description="A list of the things I use daily"
      image=""
    >
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
