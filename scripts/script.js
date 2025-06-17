// comment AHHHHHHHHHHHHHH

document.addEventListener("DOMContentLoaded", () => {
    console.log("HELLO");

    loadBlogEntries();

    const funBtn = document.getElementById("funBtn");
    if (funBtn) {
    funBtn.addEventListener("click", () => {
        document.body.classList.toggle("LUCK");
        console.log("A pot of gold!");
        });
    }
});

function addBlogEntry(content) {
    const blog = document.getElementById("blog-entries");
    if (!blog) return;

    const card = document.createElement("div");
    card.className = "card p-3 mb-3 shadow-sm";
    card.textContent = content;
    blog.appendChild(card);
}

function loadBlogEntries() {
    const entries = [
        "Slew a dragon just like Saint George.",
        "Tamed a mighty beast with snacks of pork.",
        "Infused a rock with arcane lightning to think and do my bidding, although for some reason it likes to repeat itself at times."
    ];

    entries.forEach(entry => addBlogEntry(entry));
}

