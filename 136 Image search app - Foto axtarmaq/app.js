const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const imageContainer = document.getElementById("image-container");

// https://api.unsplash.com/search/photos?

const token = "aaz4b6e9T6EJGhZ6cD12_mheyf3rUHlSs2qk9E95X2I";

function run() {
  searchButton.addEventListener("click", searchImage);

  searchInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      searchImage();
    }
  });
}
run();

async function searchImage() {
  const value = searchInput.value.trim();
  imageContainer.innerHTML = "";

  if (!value) {
    alert("Deyer daxil edilmeyib");
    return;
  }

  const url = `https://api.unsplash.com/search/photos?query=${value}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${token}`,
      },
    });

    const data = await response.json();

    if (data.results.length == 0) {
      alert("Data movcud deil");
      searchInput.value = "";
      return;
    }

    data.results.forEach((image) => {
      const div = document.createElement("div");
      div.className = "image-card";

      const img = document.createElement("img");

      img.src = image.urls.small;

      div.appendChild(img);

      imageContainer.appendChild(div);
    });

    searchInput.value = "";
  } catch (error) {
    console.log(error);
  }
}
