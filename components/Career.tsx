import { career } from "@/data/profile";

const typeColors = {
  work: { bg: "bg-[#E60012]", text: "text-white" },
  education: { bg: "bg-[#00A0E9]", text: "text-white" },
};

export default function Career() {
  return (
    <section id="career" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl sm:text-5xl font-black bg-[#00A73C] text-white px-6 py-3 border-4 border-[#1A1A1A] rounded-lg shadow-[6px_6px_0_#1A1A1A] transform rotate-1">
            経歴
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A] font-bold">
            これまでの歩み！
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-2 bg-[#FFE500] border-2 border-[#1A1A1A] rounded-full" />

          <div className="space-y-8">
            {career.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#E60012] border-4 border-[#1A1A1A] z-10 shadow-[2px_2px_0_#1A1A1A]" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white border-4 border-[#1A1A1A] rounded-2xl overflow-hidden shadow-[6px_6px_0_#1A1A1A] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#1A1A1A] transition-all">
                    {/* Card Header */}
                    <div
                      className={`${typeColors[item.type].bg} px-4 py-2 border-b-4 border-[#1A1A1A] flex items-center justify-between`}
                    >
                      <span className="font-black text-white text-sm">
                        {item.type === "work" ? "職歴" : "学歴"}
                      </span>
                      <span className="text-white text-sm font-bold">
                        {item.period}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-4">
                      <h3 className="text-lg font-black text-[#1A1A1A] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#E60012] font-bold mb-2">
                        {item.organization}
                      </p>
                      <p className="text-[#1A1A1A] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
