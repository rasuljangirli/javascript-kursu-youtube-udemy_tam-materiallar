const searchBtn = document.getElementById("search-btn");
const usernameInput = document.getElementById("username-input");
const userCard = document.getElementById("user-card");
const errorText = document.getElementById("error");

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const profileLink = document.getElementById("profile-link");

// https://api.github.com/users/rasuljangirli

searchBtn.addEventListener("click", async () => {
  const usernameInputValue = usernameInput.value.trim();

  userCard.classList.add("hidden");
  if (usernameInputValue == "") {
    errorText.textContent = "Isdifadeci adi daxil edin";
    return;
  }
  errorText.textContent = "";

  const baseUrl = "https://api.github.com/users";
  const url = `${baseUrl}/${usernameInputValue}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Isdifadeci movcud deil ve ya server xetasi oldu");
    }

    const data = await response.json();

    avatar.src = data.avatar_url;
    name.textContent = data.name || data.login;
    bio.textContent = data.bio || "Bio movcud deil";
    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;
    profileLink.href = data.html_url;

    userCard.classList.remove("hidden");
    usernameInput.value = "";
  } catch (error) {
    errorText.textContent = error.message;
  }
});
