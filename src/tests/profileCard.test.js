import { getByRole, getByTestId, getByText } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "../js/profileCard.js";

const profileInfo = {
  image: "http://placecorgi.com/410",
  name: "Captain Cornelius",
  phrace: "Let's go on an adventure",
  cta: "I Have Free Cookies!",
  projects: 1448987,
  forks: 3,
  commits: 4763,
};

function getProfileCard() {
  const card = document.createElement("profile-card");
  card.setAttribute("id", "testing-profile");
  card.setAttribute("img", profileInfo.image);
  card.setAttribute("profile-name", profileInfo.name);
  card.setAttribute("phrace", profileInfo.phrace);
  card.setAttribute("cta", profileInfo.cta);
  card.setAttribute("projects", profileInfo.projects);
  card.setAttribute("forks", profileInfo.forks);
  card.setAttribute("commits", profileInfo.commits);
  document.body.appendChild(card);
  return card.shadowRoot;
}

afterEach(() => document.body.removeChild(document.body.firstChild));

test("Profile Card renders the information correctly", async () => {
  const container = getProfileCard();

  expect(getByTestId(container, "profile-picture")).toHaveStyle(
    `background-image: url(${profileInfo.image})`
  );
  expect(getByText(container, profileInfo.name)).toBeInTheDocument();
  expect(getByText(container, profileInfo.phrace)).toBeInTheDocument();
  expect(getByText(container, profileInfo.cta)).toBeInTheDocument();

  const projects = getByText(
    container,
    profileInfo.projects.toLocaleString()
  ).parentElement;
  expect(projects.firstChild).toHaveTextContent(/projects/i);
  expect(projects.lastChild).toHaveTextContent(
    profileInfo.projects.toLocaleString()
  );

  const forks = getByText(
    container,
    profileInfo.forks.toLocaleString()
  ).parentElement;
  expect(forks.firstChild).toHaveTextContent(/forks/i);
  expect(
    getByText(container, profileInfo.forks.toLocaleString())
  ).toBeInTheDocument();

  const commits = getByText(
    container,
    profileInfo.commits.toLocaleString()
  ).parentElement;
  expect(commits.firstChild).toHaveTextContent(/commits/i);
  expect(
    getByText(container, profileInfo.commits.toLocaleString())
  ).toBeInTheDocument();
});

test("The button text changes when you click it", () => {
  const container = getProfileCard();

  const button = getByRole(container, "button");
  expect(button).toHaveTextContent("+");
  userEvent.click(button);
  expect(button).toHaveTextContent("-");
  userEvent.click(button);
  expect(button).toHaveTextContent("+");
});
