const toggle = document.querySelector('#lang-toggle');
const translatable = document.querySelectorAll('[data-en][data-zh]');

function setLanguage(language) {
  const isChinese = language === 'zh';
  document.documentElement.lang = isChinese ? 'zh-CN' : 'en';
  document.title = isChinese ? '喻彭 · 人工智能研究者' : 'Peng Yu · AI Researcher';

  translatable.forEach((element) => {
    element.textContent = element.dataset[isChinese ? 'zh' : 'en'];
  });

  toggle.innerHTML = isChinese
    ? '<span>EN</span><span aria-hidden="true">/</span><span class="lang-active">中</span>'
    : '<span class="lang-active">EN</span><span aria-hidden="true">/</span><span>中</span>';
  toggle.setAttribute('aria-label', isChinese ? 'Switch to English' : '切换为中文');
  toggle.setAttribute('aria-pressed', String(isChinese));
}

setLanguage('en');
toggle.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh');
});

document.querySelector('#year').textContent = new Date().getFullYear();
