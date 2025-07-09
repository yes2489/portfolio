// DOMContentLoaded → HTML 구조가 모두 로드된 이후 실행됨
document.addEventListener("DOMContentLoaded", () => {
  fadeInMainContent();
  setupSmoothScroll();
  observeIntroCards();
});

/* 메인 슬로건 떠오르기 효과  */
function fadeInMainContent() {
  const mainContent = document.querySelector("#main-fadeIn");
  if (mainContent) {
    // DOM이 완전히 로드되고 난 후 약간의 delay로 자연스러운 효과
    setTimeout(() => {
      mainContent.classList.add("show");
    }, 300);
  }
}

/* 스크롤 이동 */
function setupSmoothScroll() {
  // href가 "#"로 시작하는 모든 내부 링크 선택
  const links = document.querySelectorAll("a[href^='#']");

  // 각 링크에 클릭 이벤트 등록
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 동작 막기

      // 클릭한 링크의 href 속성값 추출
      const targetId = this.getAttribute("href");

      // 해당 id를 가진 요소를 선택
      const target = document.querySelector(targetId);

      // 부드럽게 스크롤 이동
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* intro-section 안의 카드들을 스크롤 시 떠오르게 보여주는 기능 */
function observeIntroCards() {
  const cards = document.querySelectorAll(".intro-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target;

        if (entry.isIntersecting) {
          // 카드가 화면에 보일 때
          cards.forEach((el, index) => {
            if (el === card) {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 200); // 순서에 따라 애니메이션 딜레이
            }
          });
        } else {
          // 카드가 화면에서 사라질 때
          card.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // 모든 카드를 관찰 대상으로 등록
  cards.forEach((card) => observer.observe(card));
}
