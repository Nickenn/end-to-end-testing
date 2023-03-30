const blogpostContainer = document.querySelector(".post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://nicksite.one/boardblog/wp-json/wp/v2/posts/" + id;

async function fetchBlogpost(url) {
    try {
        const response = await fetch(url);
        const blogpost = await response.json();

        
        console.log(blogpost.title);

        document.title = `BOARDBLOG | ${blogpost.title.rendered}`;



        blogpostContainer.innerHTML += `<div class="single-post">
                                        <div><center><h2>${blogpost.title.rendered}</h2></center></div>
                                        <div><p>${blogpost.content.rendered}</p></div>
                                      </div>`;
    } catch(error) {
        console.log(error);
    }
}

fetchBlogpost(url);