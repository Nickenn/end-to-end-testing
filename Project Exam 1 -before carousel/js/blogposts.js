const baseUrl = "https://nicksite.one/boardblog/wp-json/wp/v2/posts?_embed";
const blogpostsContainer = document.querySelector(".blogposts-container");
const search = document.querySelector(".search");

async function fetchBlogPosts(url) {

    try {
        const response = await fetch(baseUrl);
        const blogPosts = await response.json();

        console.log(blogPosts)

        blogPosts.forEach(function(posts) {
            blogpostsContainer.innerHTML += `<a href="/blogspecific.html?id=${posts.id}" class="single-post">
                                                <div><h2>${posts.title.rendered}</h2></div>
                                                <div><p>${posts.excerpt.rendered}</p></div>
                                                <div style="background-image: url('${posts._embedded.wp:featuredmedia}')"></div>
                                                <div class="post-date"><p>${posts.date}</p></div>
                                                </div>
                                            </a>`;
        })

    } catch(error) {
        console.log(error);
    }
}

fetchBlogPosts()

search.addEventListener("input", e => {
    const value = e.target.value;
})