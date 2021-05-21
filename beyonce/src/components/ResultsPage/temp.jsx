<>
<h1 className="text-4xl leading-10 font-extrabold text-gray-900 text-center">
  Your Top 3 Required Skills
</h1>
<h3 className="mt-4 text-xl leading-7 font-normal text-gray-500 text-center">
  According to your job market analysis, these are your top three required
  skills.
</h3>
<Stats stats={stats} />
<div className="relative bg-gray-900 sm:h-full md:grid md:grid-rows-2 grid-rows-none">
  <div className="absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
    <div className="h-full w-full xl:grid xl:grid-cols-2">
      <div className="h-full xl:relative xl:col-start-2">
        <div className="relative z-50 xl:h-full h-2 flex justify-center">
          <NextSteps steps={nextSteps} />
        </div>
        <img
          className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
          alt="People working on laptops"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
        />
      </div>
    </div>
  </div>
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
    <div className="relative pt-12 pb-64 sm:pt-20 sm:pb-96 xl:col-start-1 xl:pb-24">
      <Profile marketProfile={marketProfile} />
      <HonorableMeantions marketSkills={marketSkills} />
    </div>
  </div>
</div>
</>