const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-inp");
const articleList = document.getElementById("articleList");
const allArticles = document.querySelectorAll("article");
const allArticlesArr = Array.from(allArticles);

// Function to filter articles based on search query
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = searchInput.value.toLowerCase().trim();
  searchForm.reset();

  const filtered = allArticlesArr.filter((article) =>
    article.textContent.toLowerCase().includes(query),
  );

  articleList.innerHTML = "";
  filtered.forEach((article) => articleList.appendChild(article));
});
