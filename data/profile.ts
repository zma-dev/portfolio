export const profile = {
  name: "岩崎 一真",
  nameEn: "Kazuma Iwasaki",
  title: "デジタルコンテンツクリエイター / SNS運用",
  tagline: "言語化力×AI活用で、無形の価値を形にする",
  bio: "リモ合同会社にてデジタルコンテンツクリエイター・SNS運用代行として活動。AI活用スキルと言語化力を武器に、面白い・楽しい・凄いと感じてもらえるコンテンツを作り込むことを得意としています。相手に合わせた説明力と、フットワークの軽さで新しい挑戦を続けています。",
  image: "/images/profile.jpg",
  social: {
    github: "https://github.com/zma-dev",
    twitter: "https://x.com/",
    linkedin: "https://linkedin.com/in/",
    email: "",
  },
};

export const skills = [
  {
    category: "AI・クリエイティブツール",
    items: [
      { name: "ChatGPT / Claude", level: 90 },
      { name: "Midjourney", level: 80 },
      { name: "Runway（動画生成）", level: 75 },
      { name: "動画編集", level: 70 },
    ],
  },
  {
    category: "マーケティング・運用",
    items: [
      { name: "SNS運用（X, Instagram）", level: 85 },
      { name: "コンテンツ企画・制作", level: 85 },
      { name: "コミュニティ運営", level: 80 },
      { name: "クライアントワーク", level: 80 },
    ],
  },
  {
    category: "コミュニケーション",
    items: [
      { name: "言語化・説明力", level: 95 },
      { name: "プレゼンテーション", level: 85 },
      { name: "1on1コミュニケーション", level: 90 },
      { name: "人脈構築", level: 85 },
    ],
  },
  {
    category: "言語・資格",
    items: [
      { name: "日本語（ネイティブ）", level: 100 },
      { name: "英語（TOEIC 715点）", level: 70 },
      { name: "FP3級", level: 75 },
      { name: "普通自動車免許", level: 100 },
    ],
  },
];

export const career = [
  {
    type: "work" as const,
    title: "デジタルコンテンツクリエイター / SNS運用代行",
    organization: "リモ合同会社（業務委託）",
    period: "2025年11月 - 現在",
    description:
      "AI木曜会での繋がりをきっかけに参画。SNS運用代行、デジタルコンテンツの企画・制作を担当。AIツールを活用した効率的なコンテンツ制作に取り組む。",
  },
  {
    type: "work" as const,
    title: "代理店営業",
    organization: "アフラック生命保険株式会社（水戸支社）",
    period: "2022年4月 - 2025年10月",
    description:
      "3年間、代理店営業・コンサルティング業務に従事。BtoBtoCの営業スキル、クライアントとの関係構築力を培う。並行してAI活用やコミュニティ参加を通じて自己成長を追求。",
  },
  {
    type: "work" as const,
    title: "塾講師（アルバイト）",
    organization: "森塾",
    period: "2017年 - 2022年（約5年間）",
    description:
      "大学在学中に5年間継続。生徒に合わせた指導法の確立、逆算設計による学習プラン作成を実践。「相手に合わせて噛み砕いて説明する」スキルを磨く。",
  },
  {
    type: "education" as const,
    title: "法学部 政治学科 卒業",
    organization: "法政大学",
    period: "2018年4月 - 2022年3月",
    description:
      "武蔵大学から仮面浪人を経て入学。ダイビングサークルに所属しライセンス取得。学業と塾講師を両立しながら、多様な経験を積む。",
  },
  {
    type: "education" as const,
    title: "普通科 卒業",
    organization: "千葉県立柏南高等学校",
    period: "2012年4月 - 2015年3月",
    description:
      "野球部に3年間所属。1年生から学級委員長を務め、リーダーシップを発揮。球技祭や文化祭でも積極的に活動。",
  },
];

// 強み・特徴
export const strengths = [
  {
    title: "言語化力",
    description:
      "自分の理解している内容を、相手のレベルに合わせて噛み砕いて説明。マイナスをプラスに言い換える力も得意。",
    icon: "chat",
  },
  {
    title: "AI活用スキル",
    description:
      "ChatGPT、Midjourney、Runwayなど各種AIツールを実務レベルで活用。コンテンツ制作の効率化を実現。",
    icon: "cpu",
  },
  {
    title: "フットワークの軽さ",
    description:
      "興味があることには距離や時間を気にせず行動。新しいコミュニティや機会に積極的に飛び込む。",
    icon: "rocket",
  },
  {
    title: "人間心理の実践知",
    description:
      "経験の中で培った、自然と人の心を掴むコミュニケーション術。初対面でも会話ができ、人脈構築が得意。",
    icon: "users",
  },
];
