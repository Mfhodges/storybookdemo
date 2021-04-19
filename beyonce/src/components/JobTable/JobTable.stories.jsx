import React from "react";
import JobTable from "./JobTable";

const jobData = [{
    title: "Job Posting",
    imageURL: "CodingfastlaneLogoFull.png",
    company: "Company Name",
    location: "Remote",
    skills: [
      { name: "React", color: "blue" },
      { name: "Node", color: "pink" },
      { name: "PostgreSQL", color: "green" },

    ],
    id: 1,
  }, {
    title: "Job Posting",
    imageURL: "CodingfastlaneLogoFull.png",
    company: "Company Name",
    location: "Philadelphia, PA",
    skills: [
      { name: "React", color: "blue" },
      { name: "Node", color: "pink" },
      { name: "PostgreSQL", color: "green" },

    ],
    id: 2,
  },{
    title: "Job Posting",
    imageURL: "CodingfastlaneLogoFull.png",
    company: "Company Name",
    location: "Philadelphia, PA",
    skills: [
      { name: "React", color: "blue" },
      { name: "Node", color: "pink" },
      { name: "PostgreSQL", color: "green" },

    ],
    id: 3,
  },
  {
    title: "Job Posting",
    imageURL: "CodingfastlaneLogoFull.png",
    company: "Company Name",
    location: "Philadelphia, PA",
    skills: [
      { name: "React", color: "blue" },
      { name: "Node", color: "pink" },
      { name: "PostgreSQL", color: "green" },

    ],
    id: 4,
  },
  {
    title: "Job Posting",
    imageURL: "CodingfastlaneLogoFull.png",
    company: "Company Name",
    location: "Philadelphia, PA",
    skills: [
      { name: "React", color: "blue" },
      { name: "Node", color: "pink" },
      { name: "PostgreSQL", color: "green" },

    ],
    id: 5,
  }]

export default {
  title: "Design System/Organisms/JobTable",
  Card: JobTable,
};

const Template = ({...args }) => {
  return (
    <JobTable {...args} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
 jobs: jobData
};

