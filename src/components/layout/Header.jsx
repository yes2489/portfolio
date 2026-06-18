import { useLocation, useNavigate } from "react-router-dom";

function Header({ navItems = [] }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] border-b border-b-[var(--dark-bg-secondary)] bg-[rgba(15,23,42,0.8)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
        <button
          type="button"
          onClick={handleHome}
          className="fs-lg font-bold text-[var(--color-accent)]"
        >
          YES
        </button>

        <nav className="flex gap-4 fs-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleScroll(item.id)}
              className="text-[var(--dark-text)] transition hover:text-[var(--color-accent-hover)]"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;