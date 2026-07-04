import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Senior Full Stack Developer",
      text: "This builder completely changed how I present myself to recruiters. The AI optimization hit every keyword needed for my industry, and the glassmorphic design stands out instantly.",
      avatar: "AR"
    },
    {
      id: 2,
      name: "Samantha Lee",
      role: "Product Designer",
      text: "As a designer, I'm extremely picky about formatting. The precision and premium aesthetic of the exported PDF exceeded my expectations. I landed three interviews in my first week.",
      avatar: "SL"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Data Scientist",
      text: "The ATS-friendly architecture is the real deal. After months of rejections, updating my resume with this platform finally got me past the automated filters at top tech firms.",
      avatar: "DC"
    }
  ];

  return (
    <section className="relative bg-[#0b1326] py-24 px-6 md:px-12 font-['Geist',_sans-serif] overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#06b6d4]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#dae2fd] mb-4 tracking-[-0.02em]">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Elite Talent</span>
          </h2>
          <p className="text-[#c7c4d7] max-w-2xl mx-auto text-base">
            See how top-tier professionals are using our architecture to dominate the hiring process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="relative bg-[#171f33]/40 border border-white/10 rounded-2xl p-8 backdrop-blur-[24px] shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#dae2fd]">{review.name}</h4>
                  <p className="text-sm text-[#06b6d4]">{review.role}</p>
                </div>
              </div>
              <p className="text-[#c7c4d7] leading-[1.7] italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
