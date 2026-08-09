
(() => {
  const slide = document.currentScript.closest('.slide');
  if (!slide || slide.dataset.activeChatReady === '1') return;
  slide.dataset.activeChatReady = '1';
  const iframe = slide.querySelector('.reuse-frame');
  if (!iframe) return;
  let wasCurrent = slide.classList.contains('is-current');
  const reload = () => {
    const src = iframe.getAttribute('src');
    iframe.setAttribute('src', src);
  };
  const observer = new MutationObserver(() => {
    const isCurrent = slide.classList.contains('is-current');
    if (isCurrent && !wasCurrent) reload();
    wasCurrent = isCurrent;
  });
  observer.observe(slide, { attributes: true, attributeFilter: ['class'] });
})();
