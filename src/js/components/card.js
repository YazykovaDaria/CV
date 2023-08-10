const activeClass = 'active';

export const getCard = (card) => {
  const cardEl = createEl('div', 'card');
  cardEl.innerHTML = `<h2 class="card__title text">${card.title}</h2>`;

  const hideWrapper = createEl('div', 'hide-wrapper');
  const hideEl = createEl('p', 'hide-description text', card.description);
  hideWrapper.innerHTML = `<img src="${card.img}" alt="project">`;
  hideWrapper.append(hideEl);

  const stackEl = createEl('p', 'text', card.stack);
  const buttonsEl = createEl('div', 'buttons-list buttons-list--projects');
  buttonsEl.innerHTML = `<a href="${card.gitLink}" class="button button--acsent">Code</a>
  <a href="${card.demoLink}" class="button">Demo</a>`

  cardEl.append(hideWrapper
, stackEl, buttonsEl);

  cardEl.addEventListener('mouseover', () => {
    hideEl.classList.add(activeClass);
  });

  cardEl.addEventListener('mouseout', () => {
    hideEl.classList.remove(activeClass);
  })
return cardEl;
}

function createEl(tag, className, content) {
  const element = document.createElement(tag);

  if (className) {
    className.split(' ').forEach((name) => {
      element.classList.add(name);
    });
  }
  if (content) {
    element.textContent = content;
  }

return element;
}
