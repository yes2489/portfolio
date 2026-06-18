export default function ContactLink({ href, children, isExternal = false }) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center gap-3 rounded-lg 
            border border-[var(--dark-border)] px-6 py-4 bg-[var(--dark-bg)]
            fs-base text-[var(--dark-text-secondary)] transition
            hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
    >
      {children}
    </a>
  );
}
