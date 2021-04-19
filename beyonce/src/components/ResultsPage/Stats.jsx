import React from 'react';


const stats = [
    { name: 'CSS', stat: '71.89%' },
    { name: 'Testing', stat: '58.16%' },
    { name: 'React', stat: '24.57%' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


//   <div className="flex items-baseline ">
//                 {item.stat}
//                 </div>

const Stats = ({}) => {

    return(
        <div className="px-32 md:px-6/12 lg:px-72">
      
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6 text-center">
            <dt className="text-base font-normal text-2xl font-semibold text-indigo-600">{item.name}</dt>
            <dd className="mt-1 flex justify-center items-baseline">
              
            <span className="text-sm font-medium text-gray-500">{item.stat}</span>
              

            </dd>
          </div>
        ))}
      </dl>
    </div>
    )
}

export default Stats;