import React from 'react';
import JobComponent from './JobComponent';

const loremIpsem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ligula ex. Nam sed nisi tincidunt, bibendum enim non, luctus nisl. Etiam sed egestas purus. Cras eleifend condimentum velit, non elementum lorem volutpat eu. Aliquam elementum augue a commodo varius. Aliquam porta placerat aliquam. Curabitur euismod eros dolor, sed venenatis arcu tempus at. Sed convallis iaculis erat, ut porttitor mauris fringilla et. Fusce volutpat condimentum est, et suscipit turpis condimentum lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam rhoncus pulvinar libero a gravida. Vivamus lobortis vehicula sagittis. Aliquam nibh nulla, imperdiet eleifend ipsum sed, molestie vehicula felis. Cras a elit lobortis, feugiat lacus nec, lobortis velit.
<b>
Phasellus fringilla iaculis turpis nec lacinia. Nam accumsan libero nisi, et dapibus ex pulvinar vitae. Morbi aliquam felis id metus condimentum, id elementum enim ornare. Integer tincidunt imperdiet nulla, sed scelerisque leo efficitur eget. Nulla porttitor faucibus mi euismod tincidunt. Ut eleifend lacus vel scelerisque semper. Donec lectus elit, mattis eget ante et, efficitur facilisis urna. Vestibulum vitae diam a ligula efficitur accumsan at vitae mauris. Nunc rutrum ullamcorper odio, sed imperdiet lectus fermentum dapibus.
<b>
Vivamus imperdiet a lorem malesuada condimentum. Phasellus mollis nibh id diam blandit ultricies. Nunc laoreet ex gravida, imperdiet ante interdum, suscipit neque. Aenean vestibulum dui erat, eu laoreet lectus accumsan vitae. Curabitur sed faucibus nisi, quis pellentesque lacus. Aliquam condimentum rhoncus dapibus. Nullam tincidunt ullamcorper mauris, vel auctor nibh. Cras venenatis dui in faucibus finibus. Donec placerat porta lorem, quis blandit sapien aliquet sed. Nulla fringilla eleifend feugiat. Sed id maximus eros, eu malesuada neque. In tincidunt sapien at libero hendrerit, vel malesuada felis maximus.
`

export default {
  title: 'Design System/Organisms/JobComponent',
  component: JobComponent,
};

const Template = ({description,...args}) => {
return <JobComponent{...args} >{loremIpsem}</JobComponent>};

export const Primary = Template.bind({});
Primary.args = {
    job: {
        title: "Job Posting",
        imageURL:"CodingfastlaneLogoFull.png",
        company:"Company Name",
        skills: ["React","Node","PostgreSQL"],
        id:1,
      },
};
