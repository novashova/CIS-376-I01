// comment AHHHHHHHHHHHHHH

document.addEventListener("DOMContentLoaded", () => {
    console.log("HOWDY!");

    loadBlogEntries()

    const funBtn = document.getElementById("funBtn");
    if (funBtn) {
        funBtn.addEventListener("click", () => {
            document.body.classList.toggle("LUCK");
            console.log("gold!");
        });
    }

    const blogAdminBtn = document.createElement("a");
    blogAdminBtn.href = "https://novashova.github.io/devBlogAdmin/";
    blogAdminBtn.target = "_blank";
    blogAdminBtn.className = "btn btn-outline-secondary mt-3";
    blogAdminBtn.innerText = "Open Blog Admin";
    
    const blogSection = document.getElementById("blog");
    if (blogSection) blogSection.appendChild(blogAdminBtn);
});

// create a blog card
function addBlogEntry({ title, date, content, tags }) {
    const blog = document.getElementById("posts");
    if (!blog) return;

    const card = document.createElement("div");
    card.className = "card p-3 mb-3 shadow-sm text-start";
    card.innerHTML = `
        <h5>${title}</h5>
        <h6 class="text-muted">${date}</h6>
        <p>${content}</p>
        <p><small><strong>Tags:</strong> ${tags.join(", ")}</small></p>
    `;
    blog.appendChild(card);
}

async function loadBlogEntries() {
    const JSON_URL = "https://novashova.github.io/devBlogData/posts.json";
    try {
        const response = await fetch(JSON_URL);
        const posts = await response.json();
        posts.forEach(post => addBlogEntry(post));
    } catch (error) {
        console.error("Failed to fetch blog:", error);
        addBlogEntry({
            title: "Error loading blog",
            date: new Date().toISOString().split("T")[0],
            content: "Check your stuff!!.",
            tags: ["error"]
        });
    }
}

