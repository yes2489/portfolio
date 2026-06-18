const aboutCards = [
  {
    title: "Key Strength",
    items: [
      "문제 해결 중심의 리더십",
      "구조적 커뮤니케이션 역량",
      "보안과 개발을 아우르는 IT 스킬",
    ],
  },
  {
    title: "Education & Experience",
    items: [
      "우리FISA 클라우드 서비스 개발 5기 수료",
      "삼성청년SW·AI아카데미 12기 Java 수료",
      "K-Shield Junior 12기 보안관리 및 진단과정 수료",
      "보안 솔루션 엔지니어 1년 5개월",
    ],
  },
];

function AboutCard({ title, items }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950 p-8 transition hover:-translate-y-1 hover:border-cyan-400">
      <h3 className="mb-5 text-base font-semibold text-cyan-400">{title}</h3>

      <ul>
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-slate-700 py-2 text-sm text-slate-300 last:border-b-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
