const projects=[{title:'Social that stands out',description:'A playful social media concept built around bold typography, high contrast, and expressive shapes. Designed to bring a consistent visual identity to a campaign.'},{title:'A fresh perspective',description:'An illustrative brand identity exploring a bright palette, expressive lettering, and a simple graphic motif across a cohesive visual system.'},{title:'Type in motion',description:'An editorial poster concept that uses scale, hierarchy, and rhythm to make typography the main event.'}];
const dialog=document.querySelector('dialog');document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const project=projects[Number(button.dataset.project)];document.querySelector('#modal-title').textContent=project.title;document.querySelector('#modal-description').textContent=project.description;document.querySelector('#modal-art').replaceChildren(button.querySelector('.art').cloneNode(true));dialog.showModal()}));document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close()}});

const header = document.querySelector('header');
const menuToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#primary-navigation');
const compactNavigation = window.matchMedia('(max-width: 760px)');

function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) setMenuOpen(false);
});
compactNavigation.addEventListener('change', () => setMenuOpen(false));
header.classList.add('nav-ready');

const compactOutputs = window.matchMedia('(max-width: 600px)');

document.querySelectorAll('.graphics-grid, .video-grid, .other-grid, .website-grid').forEach((grid, index) => {
  const items = Array.from(grid.children);
  if (items.length <= 3) return;
  let expanded = false;
  grid.id = grid.id || 'portfolio-category-' + index;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'show-more';
  button.setAttribute('aria-controls', grid.id);
  grid.after(button);

  function updatePreviews() {
    const previewCount = compactOutputs.matches ? 4 : 3;
    const extraItems = items.slice(previewCount);
    if (!expanded && extraItems.some(item => item.contains(document.activeElement))) button.focus();
    items.forEach((item, itemIndex) => { item.hidden = !expanded && itemIndex >= previewCount; });
    button.hidden = extraItems.length === 0;
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Show Less' : 'Show More (' + extraItems.length + ')';
  }

  button.addEventListener('click', () => {
    expanded = !expanded;
    updatePreviews();
  });
  compactOutputs.addEventListener('change', updatePreviews);
  updatePreviews();
});
