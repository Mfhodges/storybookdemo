import React from "react";
import LoadingAnimation from "./LoadingAnimation";

export default {
  title: "Design System/Atoms/LoadingAnimation",
  component: LoadingAnimation,
};

const Template = ({ ...args }) => {
  return (
    <div class="flex h-screen">
      <div class="m-auto">
        <LoadingAnimation {...args}></LoadingAnimation>
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
