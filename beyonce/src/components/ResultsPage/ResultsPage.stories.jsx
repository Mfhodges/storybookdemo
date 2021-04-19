import React from "react";
import Layout from '../Layout/Layout';
import ResultsPage from "./ResultsPage";


export default {
  title: "Design System/Templates/ResultsPage",
  Card: ResultsPage,
};

const Template = ({...args }) => {
  return (
      <Layout isFullWidth={true}>
    <ResultsPage {...args} />
    </Layout>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};

