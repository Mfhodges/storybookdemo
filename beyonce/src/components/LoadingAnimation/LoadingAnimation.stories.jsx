import React from "react";
import LoadingAnimation from "./LoadingAnimation";

export default {
  title: "Design System/Atoms/LoadingAnimation",
  component: LoadingAnimation,
};

const Template = () => {
  /* Markup to center the animation */
  return (
    <div class="flex h-screen">
      <div class="m-auto">
        <LoadingAnimation ></LoadingAnimation>
      </div>
    </div>
  );
};

export const Primary = Template.bind({});
