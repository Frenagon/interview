import { getByRole, getByTestId, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import userEvent from "@testing-library/user-event";
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
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <profile-card
        img="${profileInfo.image}"
        profile-name="${profileInfo.name}"
        phrace="${profileInfo.phrace}"
        cta="${profileInfo.cta}"
        projects="${profileInfo.projects}"
        forks="${profileInfo.forks}"
        commits="${profileInfo.commits}"
      />
  `;
  document.body.appendChild(wrapper);
  return wrapper;
}

afterEach(() => (document.body.innerHTML = ""));

test("Profile Card renders the information correctly", () => {
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
