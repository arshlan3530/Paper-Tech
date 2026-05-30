const apiKey = "c635a284b478a0aec92a3d0fdccbcc0d";  // 🔴 paste your key here
const url = "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&apikey=c635a284b478a0aec92a3d0fdccbcc0d";

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // check in console

        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function displayNews(articles) {
    const container = document.getElementById("news-container");
    container.innerHTML = "";

    articles.forEach(article => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news");

        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "No description available"}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        container.appendChild(newsItem);
    });
}

fetchNews();
