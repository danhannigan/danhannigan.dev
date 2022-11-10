import React from "react";
import PageLayout from "../components/PageLayout";
import { getUsingTable } from "../lib/getAirtableData";

const Using = ({ usingTable }) => {
  return (
    <PageLayout
      title="Uses"
      description="A list of the things I use daily"
      image={[
        {
          url: "https://danhannigan.dev/images/danhannigan-og-image-2022.png",
          width: 800,
          height: 800,
          alt: "Dan Hannigan",
        },
      ]}
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
