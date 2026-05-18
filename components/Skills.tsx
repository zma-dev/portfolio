import { skills } from "@/data/profile";

// 東海オンエア メンバーカラー
const categoryColors = [
  { bg: "bg-[#F39800]", bar: "bg-[#F39800]" },  // オレンジ（てつや）
  { bg: "bg-[#00A0E9]", bar: "bg-[#00A0E9]" },  // 青（りょう）
  { bg: "bg-[#00A73C]", bar: "bg-[#00A73C]" },  // 緑（としみつ）
  { bg: "bg-[#8B4513]", bar: "bg-[#8B4513]" },  // 茶色（虫眼鏡）
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#FFF8CC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl sm:text-5xl font-black bg-[#00A0E9] text-white px-6 py-3 border-4 border-[#1A1A1A] rounded-lg shadow-[6px_6px_0_#F39800] transform -rotate-1">
            スキル
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A] font-bold">
            これまでの経験で培った技術スタック！
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-white border-4 border-[#1A1A1A] rounded-2xl overflow-hidden shadow-[6px_6px_0_#1A1A1A]"
            >
              {/* Category Header */}
              <div
                className={`${categoryColors[categoryIndex % categoryColors.length].bg} px-6 py-4 border-b-4 border-[#1A1A1A]`}
              >
                <h3 className="text-xl font-black text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-[#1A1A1A]">
                        {skill.name}
                      </span>
                      <span className="font-black text-[#E60012]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full border-2 border-[#1A1A1A] overflow-hidden">
                      <div
                        className={`h-full ${categoryColors[categoryIndex % categoryColors.length].bar} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
