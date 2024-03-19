class Navbar extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {

    this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('nav');
    wrapper.setAttribute('class', 'topnav');

    const links = ['AA', 'Sobre', 'Projeto', 'Contato'];

    links.forEach(text => {
      const anchor = document.createElement('a');
      anchor.textContent = text;
      anchor.setAttribute('class', 'topnav-anchor');
      wrapper.appendChild(anchor);
    });

    const iconAnchor = document.createElement('a');
    iconAnchor.setAttribute('class', 'icon');
    iconAnchor.setAttribute('href', 'javascript:void(0);');
    iconAnchor.addEventListener('click', () => this.toggleResponsive());

    const iconImage = document.createElement('img');
    iconImage.setAttribute('src', '../img/menu-icon.svg');
    iconImage.setAttribute('alt', 'Botão para abrir menu');

    iconAnchor.appendChild(iconImage);
    wrapper.appendChild(iconAnchor);

    const linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('href', '../css/navbar.css');

    this.shadowRoot.appendChild(linkElement);
    this.shadowRoot.appendChild(wrapper);
  }

  toggleResponsive() {
    const navbar = this.shadowRoot.querySelector('.topnav');
    navbar.classList.toggle('responsive');
  }
}

customElements.define('navbar-component', Navbar);
