import React from 'react';
const metrics = [
    {
      id: 1,
      stat: "Styled-Components",
    },
    {
      id: 2,
      stat: "Jenkins",
    },
    {
      id: 3,
      stat: "Collaboration",
    },
    {
      id: 4,
      stat: "Jenkins",
    },
    {
      id: 5,
      stat: "Jest",
    },
    {
      id: 6,
      stat: "Skill",
    },
  ];

const HonorableMentions = ({}) => {

    return (
        <>
        <p className="mt-6 text-3xl leading-9 font-extrabold text-white">
              Honorable Mentions
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
              quis in viverra tristique sem. Ornare feugiat viverra eleifend
              fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus
              laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus
              quis at.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-y-4 gap-x-6">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-indigo-300">
                    {item.stat}
                  </span>
                </p>
              ))}
            </div>
            </>
    )
}

export default HonorableMentions;