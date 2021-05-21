import React from "react";
import Layout from '../Layout/Layout';
import ResultsPage from "./ResultsPage";


const steps = [
  {
    name: "Create Job Market Analysis",
    description: "Vitae sed mi luctus laoreet.",
    link: "",
    status: "complete",
  },
  {
    name: "Join Groups on LinkedIn",
    description: "Joining Groups that share the top skills of your Job Market anaylsis will help ...add text...",
    link: "https://www.linkedin.com/groups/",
    status: "current",
  },
  {
    name: "Review what skills you already have",
    description: "Likely you've already encountered many of these skills in your education. Spend 15 minutes adding these to your v0 resume draft",
    link: "",
    status: "upcoming",
  },
  {
    name: "Watch the behavioral matrix video",
    description: "In this 15 minute video Jason walks you through the next step: making a behavioral matrix.",
    link: "https://www.youtube.com/s",
    status: "upcoming",
  },
];

const marketProfile = {
  location: "Philadelphia, PA",
  selectedSkills: "Angular, PHP, Node",
  salary: "$78,000-90,000",
  title: "Software Engineer III",
};

const stats = [
  { name: "CSS", stat: "71.89%" },
  { name: "Testing", stat: "58.16%" },
  { name: "React", stat: "24.57%" },
];

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
  nextSteps: steps,
  marketProfile: marketProfile,
  stats: stats

};

