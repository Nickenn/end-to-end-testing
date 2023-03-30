const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;

const baseUrl = "https://nicksite.one/boardblog/wp-json/wp/v2/posts/";


async function fetchBlogPosts(url) {

    try {
        const response = await fetch(baseUrl);
        const blogPosts = await response.json();

        console.log(blogPosts)

        blogPosts.forEach(function(posts) {
            track.innerHTML += `    <div class="card-container">
                                    <div class="card">
                                    <a href="/blogspecific.html?id=${posts.id}">
                                    <div><h2><center>${posts.title.rendered}</center></h2></div>
                                    <div class="post-date"><p><center>${posts.date}</center></p></div>
                                    </div>                                              
                                    </a>
                                    </div>
                                    </div>`;
        })
        
    } catch(error) {
        console.log(error);
    }
}

fetchBlogPosts()

window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});
