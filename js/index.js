import { blogData } from './data.js'

//Nav open when nav toggle is clicked and nav closed when a link is clicked
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const viewMoreBtn = document.getElementById('view-more-btn')
let recentPostsArray = []


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// need to set display to none on view more btn
viewMoreBtn.addEventListener('click', () => {
    recentPostsArray = []
    for (let i = 1; i < blogData.length; i++) {
        recentPostsArray.push({
            title: blogData[i].title,
            image: blogData[i].image,
            imageAlt: blogData[i].imageAlt,
            date: blogData[i].date,
            preview: blogData[i].preview,
        })
    }
    viewMoreBtn.style.display = 'none'
    render()
})


// Display the featured post

function getFeaturedPostHtml(blogPosts) {
    let featuredPostHtml = `
        <article class="featured-post">
                <img src="${blogPosts[0].image}" alt="${blogPosts[0].imageAlt}" class="article__img article__img--feautred">
            <div class="article-content__featured">
                <h2 class="section__title section__title--featured">Featured Post</h2>
                <p class="article__date article__date--featured">${blogPosts[0].date}</p>
                <h4 class="article__title article__title--featured">${blogPosts[0].title}</h4>
                <p class="article__preview article__preview--featured">${blogPosts[0].preview}</p>
                <a href="${blogPosts[0].url}" class="read-more">MORE...</a>  
            </div>         
        </article>
    `
    return featuredPostHtml
}


//Display recent posts

function getRecentPostsArray(blogPosts) {
    recentPostsArray = []
    for (let i = 1; i < 4; i++) {
        recentPostsArray.push({
            title: blogPosts[i].title,
            image: blogPosts[i].image,
            imageAlt: blogPosts[i].imageAlt,
            date: blogPosts[i].date,
            preview: blogPosts[i].preview,
        })
    }
}

getRecentPostsArray(blogData)


function getRecentPostsHtml(recentPosts) {
    let recentPostsHtml = ``
    recentPosts.forEach(function(post){
        recentPostsHtml += `
            <article class="recent-post">
                    <img src="${post.image}" alt="${post.imageAlt}" class="article__img article__img--recent">
                <div class="article-content__recent">
                    <p class="article__date">${post.date}</p>
                    <h4 class="article__title article__title--recent">${post.title}</h4>
                    <a href="${post.url}" class="read-more">MORE...</a>
                </div>
            </article>
        `
    })
    return recentPostsHtml 
}



function render(){
    document.getElementById('featured').innerHTML = getFeaturedPostHtml(blogData)
    document.getElementById('recent-posts').innerHTML = getRecentPostsHtml(recentPostsArray)
}

render()



