const aboutCards = [
  {
    title: "Key Strength",
    items: [
      { text: "문제 해결 중심의 리더십" },
      { text: "구조적 커뮤니케이션 역량" },
      { text: "보안과 개발을 아우르는 IT 스킬" },
    ],
  },
  {
    title: "Education & Experience",
    items: [
      { text: "우리FISA 클라우드 서비스 개발 5기 수료" },
      { text: "삼성청년SW·AI아카데미 12기 Java 수료" },
      { text: "K-Shield Junior 12기 보안관리 및 진단과정 수료" },
      { text: "보안 솔루션 엔지니어", tag: "1년 5개월" },
    ],
  },
  {
    title: "Awards & Certificates",
    items: [
      { text: "가족이 함께 성장하는 금융 교육 플랫폼", tag: "우수상" },
      { text: "신용도 시스템 기반 금융 교육 플랫폼", tag: "우수상" },
      { text: "직장인을 위한 건강 증진 웹 서비스", tag: "최우수상" },
      {
        text: "정보처리기사, SQLD, 리눅스 마스터 2급, 네트워크 관리사 2급 취득",
      },
    ],
  },
];

function AboutCard({ title, items }) {
  return (
    <div className="rounded-xl border border-[var(--dark-border)] bg-[var(--dark-bg)] p-8 transition hover:-translate-y-1 hover:border-[var(--color-accent-hover)]">
      <h3 className="mb-5 fs-base font-semibold text-[var(--color-accent)]">
        {title}
      </h3>

      <ul>
        {items.map((item) => (
          <li
            key={item.text}
            className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--dark-border)] py-2 fs-base-sm text-[var(--dark-text)] last:border-b-0"
          >
            <span>{item.text}</span>

            {item.tag && (
              <span className="rounded bg-[var(--color-accent-hover)] px-2 py-1 fs-xs font-medium text-[var(--dark-border)]">
                {item.tag}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <section
      className="min-h-screen px-4 py-20 flex items-center bg-[var(--dark-bg-secondary)]"
      id="about"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="relative mb-12 inline-block fs-xxl font-bold after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-[60px] after:rounded after:bg-[var(--color-accent)]">
          About
        </h2>

        <p className="mb-12 max-w-[800px] fs-lg leading-8 text-[var(--dark-text-secondary)]">
          다양한 이해관계자와의 협업을 통해 실천력과 조율력을 키운 개발자입니다.
          <br />
          팀워크 속에서 균형을 찾고, 문제의 본질을 놓치지 않는 개발을
          지향합니다.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {aboutCards.map((card) => (
            <AboutCard key={card.title} title={card.title} items={card.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
