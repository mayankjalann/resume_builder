import React from 'react';

// Notice we are "destructuring" title and description from the props
const Title = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#dae2fd] mb-4 tracking-[-0.02em]">
        {title}
      </h2>
      <p className="text-[#c7c4d7] max-w-2xl mx-auto text-base">
        {description}
      </p>
    </div>
  );
};

export default Title;