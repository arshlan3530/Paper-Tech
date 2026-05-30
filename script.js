const apiKey = "b5ca59eb2c8649649b6b57a1acdf9261"; // Get from newsapi.org
const url = `https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const container = document.getElementById("news-container");
        container.innerHTML = "";

        data.articles.forEach(article => {
            const card = document.createElement("div");
            card.classList.add("news-card");

            card.innerHTML = `
                <img src="${article.urlToImage || ''}" alt="">
                <h3>${article.title}</h3>
                <p>${article.description || ''}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();