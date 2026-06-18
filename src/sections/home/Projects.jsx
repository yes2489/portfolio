import teenyFinnyWebp from "../../assets/home/teenyFinny.webp";
import teenyFinnyPng from "../../assets/home/teenyFinny.png";
import luFinWebp from "../../assets/home/luFin.webp";
import luFinPng from "../../assets/home/luFin.png";
import keyWeWebp from "../../assets/home/keyWe.webp";
import keyWePng from "../../assets/home/keyWe.png";
import officeOlympicsWebp from "../../assets/home/officeOlympics.webp";
import officeOlympicsPng from "../../assets/home/officeOlympics.png";

const projects = [
  {
    title: "TeenyFinny",
    description: "가족이 함께 성장하는 금융 교육 플랫폼",
    href: "https://github.com/TeenyFinny",
    webp: teenyFinnyWebp,
    image: teenyFinnyPng,
    alt: "TeenyFinny 프로젝트",
    tags: ["Next.js", "Java", "SpringBoot", "FullStack"],
  },
  {
    title: "LuFin",
    description: "신용도 시스템 기반 금융 교육 플랫폼",
    href: "/projects/lufin.html",
    webp: luFinWebp,
    image: luFinPng,
    alt: "LuFin 프로젝트",
    tags: ["Java", "SpringBoot", "MySQL", "Redis", "Backend"],
  },
  {
    title: "KeyWe",
    description:
      "시니어의 키오스크 주문을 원격으로 지원하는 서비스",
    href: "https://github.com/yes2489/KeyWe",
    webp: keyWeWebp,
    image: keyWePng,
    alt: "KeyWe 프로젝트",
    tags: ["Java", "SpringBoot", "MySQL", "MSA", "Backend"],
  },
  {
    title: "Office Olympics",
    description: "팀워크 및 건강 증진 웹 플랫폼",
    href: "https://github.com/yes2489/OfficeOlympics",
    webp: officeOlympicsWebp,
    image: officeOlympicsPng,
    alt: "Office Olympics 프로젝트",
    tags: ["Java", "SpringBoot", "MySQL", "Backend"],
  },
];

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-xl border border-[var(--dark-border)] bg-[var(--dark-bg-secondary)] transition hover:-translate-y-1 hover:[var(--color-accent-hover)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <picture>
          <source srcSet={project.webp} type="image/webp" />
          <img
            src={project.image}
            alt={project.alt}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        </picture>

        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-accent)]/90 opacity-0 transition group-hover:opacity-100">
          <span className="fs-base font-semibold text-[var(--dark-border)]">
            View Project →
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 fs-lg font-semibold text-[var(--dark-text)]">
          {project.title}
        </h3>

        <p className="mb-4 fs-sm leading-relaxed text-[var(--dark-text-secondary)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--dark-border)] bg-[var(--dark-bg)] px-3 py-1 fs-xs text-[var(--color-accent)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center px-6 py-24 pt-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="relative mb-12 inline-block fs-xxl font-bold after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-[60px] after:rounded after:bg-[var(--color-accent)]">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
