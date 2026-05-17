import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-[#FFE500] via-[#FFF8CC] to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="relative inline-block mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-[#E60012] border-4 border-[#1A1A1A] flex items-center justify-center text-white text-5xl font-black shadow-[6px_6px_0_#1A1A1A] hover-shake">
            {profile.name.charAt(0)}
          </div>
          {/* 吹き出し */}
          <div className="absolute -top-4 -right-4 bg-[#00A0E9] text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-[#1A1A1A] rotate-12 shadow-[2px_2px_0_#1A1A1A]">
            よろしく！
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1A1A1A] mb-4 tracking-tight">
          <span className="inline-block bg-[#FFE500] px-4 py-2 border-4 border-[#1A1A1A] rounded-lg shadow-[6px_6px_0_#1A1A1A] transform -rotate-1">
            {profile.name}
          </span>
        </h1>

        {/* Title */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="bg-[#E60012] text-white px-4 py-2 text-lg font-bold border-2 border-[#1A1A1A] rounded-full shadow-[3px_3px_0_#1A1A1A]">
            デジタルコンテンツクリエイター
          </span>
          <span className="bg-[#00A0E9] text-white px-4 py-2 text-lg font-bold border-2 border-[#1A1A1A] rounded-full shadow-[3px_3px_0_#1A1A1A]">
            SNS運用
          </span>
        </div>

        {/* Tagline */}
        <div className="bg-white border-4 border-[#1A1A1A] rounded-2xl p-6 mb-8 shadow-[6px_6px_0_#1A1A1A] max-w-2xl mx-auto">
          <p className="text-2xl sm:text-3xl font-black text-[#1A1A1A]">
            「{profile.tagline}」
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg text-[#1A1A1A] max-w-2xl mx-auto mb-10 leading-relaxed bg-white/80 p-4 rounded-xl border-2 border-[#1A1A1A]">
          {profile.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#strengths"
            className="px-8 py-4 bg-[#E60012] text-white font-black text-lg border-4 border-[#1A1A1A] rounded-full shadow-[4px_4px_0_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
          >
            強みを見る →
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-[#00A73C] text-white font-black text-lg border-4 border-[#1A1A1A] rounded-full shadow-[4px_4px_0_#1A1A1A] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#1A1A1A] transition-all"
          >
            連絡する →
          </a>
        </div>
      </div>
    </section>
  );
}
