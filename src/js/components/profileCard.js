import { contactList } from "../mocks/contactListMock.js";

class ProfileCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const card = document.createElement("div");
    card.setAttribute("class", "profile-card");
    card.appendChild(this.generateMainContent(card));
    card.appendChild(this.generateLinks());
    card.appendChild(this.generateStats());

    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "src/styles/profileCard.css");

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(style, card);
  }

  generateMainContent(card) {
    const main = document.createElement("div");
    main.setAttribute("data-testid", "profile-picture");
    main.setAttribute("class", "profile-main");
    main.style.backgroundImage = `url(${this.getAttribute("img")})`;

    const mainText = main.appendChild(document.createElement("div"));
    mainText.setAttribute("class", "profile-text");

    const mainName = mainText.appendChild(document.createElement("h2"));
    mainName.setAttribute("class", "profile-name");
    mainName.textContent = this.getAttribute("profile-name");

    const mainPhrace = mainText.appendChild(document.createElement("p"));
    mainPhrace.setAttribute("class", "profile-phrace");
    mainPhrace.textContent = this.getAttribute("phrace");

    const mainButton = main.appendChild(document.createElement("button"));
    mainButton.setAttribute("type", "button");
    mainButton.setAttribute("class", "profile-button");
    mainButton.textContent = "+";
    mainButton.onclick = () => this.openProfile(card, mainButton);

    return main;
  }

  generateLinks() {
    const links = document.createElement("div");
    links.setAttribute("class", "profile-links");

    const linkText = document.createElement("p");
    linkText.setAttribute("class", "links-text");

    const linksTitle = links.appendChild(linkText.cloneNode());
    linksTitle.textContent = "Contact Me";

    contactList.forEach(({ name, icon, link }) => {
      const contactLink = links.appendChild(document.createElement("a"));
      contactLink.setAttribute("href", link);
      contactLink.setAttribute("class", "contact-link");

      const contactImage = contactLink.appendChild(
        document.createElement("img")
      );
      contactImage.setAttribute("src", icon);
      contactImage.setAttribute("alt", `${name} Link`);
    });

    const linksCTA = links.appendChild(linkText.cloneNode());
    linksCTA.textContent = this.getAttribute("cta");

    return links;
  }

  generateStats() {
    const profileStats = document.createElement("div");
    profileStats.setAttribute("class", "profile-stats");

    const stat = document.createElement("div");
    stat.setAttribute("class", "stat");
    const statTitle = document.createElement("p");
    statTitle.setAttribute("class", "stat-title");
    const statText = document.createElement("p");
    statText.setAttribute("class", "stat-text");

    const projects = profileStats.appendChild(stat.cloneNode());
    const projectsTitle = projects.appendChild(statTitle.cloneNode());
    projectsTitle.textContent = "Projects";
    const projectsText = projects.appendChild(statText.cloneNode());
    projectsText.textContent = parseInt(
      this.getAttribute("projects")
    ).toLocaleString();

    const forks = profileStats.appendChild(stat.cloneNode());
    const forksTitle = forks.appendChild(statTitle.cloneNode());
    forksTitle.textContent = "Forks";
    const forksText = forks.appendChild(statText.cloneNode());
    forksText.textContent = parseInt(
      this.getAttribute("forks")
    ).toLocaleString();

    const commits = profileStats.appendChild(stat.cloneNode());
    const commitsTitle = commits.appendChild(statTitle.cloneNode());
    commitsTitle.textContent = "Commits";
    const commitsText = commits.appendChild(statText.cloneNode());
    commitsText.textContent = parseInt(
      this.getAttribute("commits")
    ).toLocaleString();

    return profileStats;
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

customElements.define("profile-card", ProfileCard);
