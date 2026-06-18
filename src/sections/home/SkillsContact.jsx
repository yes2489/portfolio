import ContactLink from "../../components/ContactLink";
import MailIcon from "../../components/icons/MailIcon";
import GitHubIcon from "../../components/icons/GitHubIcon";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Java", "Spring", "SpringBoot"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MariaDB", "MSSQL"],
  },
  {
    title: "DevOps",
    skills: ["Linux", "Shell Script"],
  },
];

function SkillCategory({ title, skills }) {
  return (
    <div className="rounded-xl border border-[var(--dark-border)] bg-[var(--dark-bg)] p-6">
      <h3 className="mb-6 fs-sm font-semibold uppercase tracking-wider text-[var(--dark-text)]">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-[var(--dark-border)] bg-[var(--dark-bg-secondary)] 
                px-4 py-2 fs-sm text-[var(--dark-text-secondary)] transition
                hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsContact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col justify-center bg-[var(--dark-bg-secondary)] px-6 py-24"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-1 flex-col">
            <h2 className="relative mb-12 inline-block fs-xxl font-bold after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-[60px] after:rounded after:bg-[var(--color-accent)]">
              Skills
            </h2>

            <div className="grid flex-1 gap-6 md:grid-cols-3">
              {skillCategories.map((category) => (
                <SkillCategory
                  key={category.title}
                  title={category.title}
                  skills={category.skills}
                />
              ))}
            </div>
          </div>

          <div
            id="contact"
            className="flex flex-1 flex-col justify-center border-t border-[var(--dark-border)] pt-8"
          >
            <h2 className="relative mb-12 inline-block fs-xxl font-bold after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-[60px] after:rounded after:bg-[var(--color-accent)]">
              Contact
            </h2>

            <p className="mb-6 fs-lg leading-8 text-[var(--dark-text-secondary)]">
              프로젝트나 협업에 관심이 있으시다면 연락주세요.
            </p>

            <div className="flex flex-wrap gap-4">
              <ContactLink href="mailto:yes24150@gmail.com">
                <MailIcon />
                yes24150@gmail.com
              </ContactLink>

              <ContactLink href="https://github.com/yes2489" isExternal>
                <GitHubIcon />
                GitHub
              </ContactLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
