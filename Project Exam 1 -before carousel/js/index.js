const slidesContainer = document.getElementById("slides-container");
const prevButton = document.getElementById("slider-arrow-previous");
const nextButton = document.getElementById("slider-arrow-next");
const slide = document.querySelector(".slide")


function initSlider() {
    const slide = document.querySelector(".slide")
        nextButton.addEventListener("click", (event) => {
            const slideWidth = slide.clientWidth;
            slidesContainer.scrollLeft += slideWidth;
    })

        prevButton.addEventListener("click", () => {
            const slideWidth= slide.clientWidth;
            slidesContainer.scrollLeft -= slideWidth;
    })
}

const baseUrl = "https://nicksite.one/boardblog/wp-json/wp/v2/posts/";


async function fetchBlogPosts(url) {

    try {
        const response = await fetch(baseUrl);
        const blogPosts = await response.json();

        console.log(blogPosts)

        blogPosts.forEach(function(posts) {
            slidesContainer.innerHTML += `<ddiv class="slide">
                                    <a href="/blogspecific.html?id=${posts.id}" class="single-post">
                                        <div><h2>${posts.title.rendered}</h2></div>
                                        <div class="post-date"><p>${posts.date}</p></div>
                                        </div>                                              
                                    </a>
                                </div>`;
        })
        initSlider();
    } catch(error) {
        console.log(error);
    }
}

fetchBlogPosts()