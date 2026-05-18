import { strengths } from "@/data/profile";

// 東海オンエア メンバーカラー
const colors = [
  { bg: "bg-[#F39800]" },  // オレンジ（てつや）
  { bg: "bg-[#FFE500]" },  // 黄色（しばゆー）
  { bg: "bg-[#00A0E9]" },  // 青（りょう）
  { bg: "bg-[#00A73C]" },  // 緑（としみつ）
  { bg: "bg-[#E85298]" },  // ピンク（ゆめまる）
  { bg: "bg-[#8B4513]" },  // 茶色（虫眼鏡）
];

const icons: Record<string, React.ReactNode> = {
  chat: (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    </svg>
  ),
  cpu: (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 3v2H7.5C6.67 5 6 5.67 6 6.5V8H4v2h2v4H4v2h2v1.5c0 .83.67 1.5 1.5 1.5H9v2h2v-2h2v2h2v-2h1.5c.83 0 1.5-.67 1.5-1.5V16h2v-2h-2v-4h2V8h-2V6.5c0-.83-.67-1.5-1.5-1.5H15V3h-2v2h-2V3H9zm-.5 4h7c.28 0 .5.22.5.5v9c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5z" />
    </svg>
  ),
  rocket: (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5zm0 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.42 9.36c-.36-.62-.65-1.24-.88-1.86H4.28l1.77 1.77 2.53.09zM16.3 15c-.23.62-.52 1.24-.88 1.86l2.53-.09 1.77-1.77H16.3zM5 19l2 4h3l-2-4H5zm9 0l-2 4h3l2-4h-3z" />
    </svg>
  ),
  users: (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  ),
};

export default function Strengths() {
  return (
    <section id="strengths" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl sm:text-5xl font-black bg-[#FFE500] text-[#1A1A1A] px-6 py-3 border-4 border-[#1A1A1A] rounded-lg shadow-[6px_6px_0_#1A1A1A] transform rotate-1">
            強み
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A] font-bold">
            経験を通じて培った、自分ならではの武器！
          </p>
        </div>

        {/* Strength Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className={`${colors[index % colors.length].bg} p-6 border-4 border-[#1A1A1A] rounded-2xl shadow-[6px_6px_0_#1A1A1A] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#1A1A1A] transition-all`}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border-3 border-[#1A1A1A] shadow-[3px_3px_0_#1A1A1A]">
                <span className="text-[#1A1A1A]">{icons[strength.icon]}</span>
              </div>
              <h3 className="text-xl font-black text-[#1A1A1A] mb-2">
                {strength.title}
              </h3>
              <p className="text-[#1A1A1A] text-sm font-medium leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
