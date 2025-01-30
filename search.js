const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-inp");
let articleList = document.getElementById("articleList");
const allArticles = document.querySelectorAll("article");

// Create a copy of the original array
const allArticlesArr = Array.from(allArticles);

searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const searchQuery = searchInput.value.toLowerCase().trim(); // Get search query
  console.log(searchQuery);

  searchForm.reset();

  // Reset articleList to the original list of articles
  articleList.innerHTML = "";
  allArticlesArr.forEach(function (article) {
    articleList.appendChild(article);
  });

  // Filter articles based on search query
  const filteredArticles = allArticlesArr.filter(function (article) {
    return article.textContent.toLowerCase().includes(searchQuery);
  });

  // Update the display to show only the matching articles
  articleList.innerHTML = "";
  filteredArticles.forEach(function (article) {
    articleList.appendChild(article);
  });
});
