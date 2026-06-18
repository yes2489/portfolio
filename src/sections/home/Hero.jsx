import profileWebp from "../../assets/home/profile.webp";
import ContactLink from "../../components/ContactLink";
import MailIcon from "../../components/icons/MailIcon";
import GitHubIcon from "../../components/icons/GitHubIcon";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pb-16 pt-32 lg:pt-28"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 text-center lg:grid-cols-2 lg:gap-16 lg:text-left">
        <div className="order-2 text-[var(--dark-text)] lg:order-1">
          <p className="mb-4 text-base font-medium text-[var(--color-accent)]">
            안녕하세요
          </p>

          <h1 className="mb-6 text-[2.25rem] font-bold leading-tight sm:text-[2.75rem] lg:text-[var(--font-size-hero)]">
            사람과 기술을 연결하는
            <br />
            <span className="text-[var(--color-accent)]">백엔드 개발자</span>
            <br />
            양은서입니다.
          </h1>

          <p className="mb-8 text-base leading-7 text-[var(--dark-text-secondary)] sm:text-lg">
            사용자의 시선으로 고민하고, 기술로 풀어내는 데 집중합니다.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
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

        <div className="order-1 flex justify-center lg:order-2">
          <picture className="h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-[var(--dark-border)] sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]">
            <source srcSet={profileWebp} type="image/webp" />
            <img
              className="h-full w-full object-cover"
              src={profileWebp}
              alt="양은서 프로필 사진"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Hero;
