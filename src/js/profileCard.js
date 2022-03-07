function openProfile(profileID, profileButton) {
  let card = document.getElementById(profileID);
  card.classList.toggle("profile-open");
  if (card.classList.contains("profile-open")) {
    profileButton.innerText = "-";
  } else {
    profileButton.innerText = "+";
  }
}
