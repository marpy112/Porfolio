const projects=[{title:'Social that stands out',description:'A playful social media concept built around bold typography, high contrast, and expressive shapes. Designed to bring a consistent visual identity to a campaign.'},{title:'A fresh perspective',description:'An illustrative brand identity exploring a bright palette, expressive lettering, and a simple graphic motif across a cohesive visual system.'},{title:'Type in motion',description:'An editorial poster concept that uses scale, hierarchy, and rhythm to make typography the main event.'}];
const dialog=document.querySelector('dialog');document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const project=projects[Number(button.dataset.project)];document.querySelector('#modal-title').textContent=project.title;document.querySelector('#modal-description').textContent=project.description;document.querySelector('#modal-art').replaceChildren(button.querySelector('.art').cloneNode(true));dialog.showModal()}));document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close()}});

document.querySelectorAll('.graphics-grid, .video-grid, .other-grid, .website-grid').forEach((grid, index) => {
  const items = Array.from(grid.children);
  if (items.length <= 3) return;
  const extraItems = items.slice(3);
  extraItems.forEach(item => { item.hidden = true; });
  grid.id = grid.id || 'portfolio-category-' + index;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'show-more';
  button.textContent = 'Show More (' + extraItems.length + ')';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', grid.id);
  grid.after(button);
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    if (expanded && extraItems.some(item => item.contains(document.activeElement))) button.focus();
    extraItems.forEach(item => { item.hidden = expanded; });
    button.setAttribute('aria-expanded', String(!expanded));
    button.textContent = expanded ? 'Show More (' + extraItems.length + ')' : 'Show Less';
  });
});
