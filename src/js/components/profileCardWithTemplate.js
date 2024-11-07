//import { contactList } from "../mocks/contactListMock.js";

class ProfileCardWithTemplate extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("profile-card-template");
    const card = template.content.cloneNode(true);

    const profilePicture = card.getElementById("profile-picture");
    profilePicture.style.backgroundImage = `url(${this.getAttribute("img")})`;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(card);

    const domCard = shadowRoot.getElementById("profile-card");
    const button = shadowRoot.getElementById("open-button");
    button.onclick = () => this.openProfile(domCard, button);
  }

  openProfile(card, button) {
    card.classList.toggle("profile-open");
    if (card.classList.contains("profile-open")) {
      button.textContent = "-";
    } else {
      button.textContent = "+";
    }
  }
}

customElements.define("profile-card-with-template", ProfileCardWithTemplate);
