<div class="navigation">
  <img
    class="logo"
    src="/images/houseoflords.jpg"
    alt="The House of Lords"
    width="232"
    height="230"
  />
  <nav class="links">
    <a href="/how/">How it works</a>
    <a href="/about/">About This Campaign</a>
    <a href="/faqs/">Frequently Asked Questions</a>
    <a href="/links/">News & Links</a>
    <a href="mailto:billybragg@secondarymandate.org" target="_blank">Contact Us</a>
  </nav>
</div>

<style lang="scss">
  .navigation {
    display: grid;
    grid-template-columns: 232px 1fr;
    align-items: center;
    align-content: start;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .logo {
    display: block;
    width: 232px;
    height: 230px;
  }

  .links {
    display: grid;
    gap: 1rem;

    & a {
      --wh: 1rem;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;

      &:focus,
      &:hover {
        color: var(--tint-primary);
      }

      &::before {
        content: "";
        width: var(--wh);
        height: var(--wh);
        border-radius: var(--wh);
        background-color: currentColor;
      }
    }
  }
</style>
