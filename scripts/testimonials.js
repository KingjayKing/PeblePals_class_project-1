const testimonialList = [
    {
        "rating" : 4,
        "name" : "Bobbi",
        "review" : "A true gem of a friend!"
    },
        {
        "rating" : 4,
        "name" : "Bob",
        "review" : "This Rocks!"
    },
        {
        "rating" : 2,
        "name" : "Goob",
        "review" : "Very lazy, doesn't move for days."
    },
        {
        "rating" : 5,
        "name" : "Bobbert",
        "review" : "Mine's not just a rock. it's family!"
    },
        {
        "rating" : 5,
        "name" : "Bobsi",
        "review" : "My depression? Cured. Will to live? Restored!"
    },
    {
        "rating" : 5,
        "name" : "Bobberta",
        "review" : "Walking my pet rock every day has been a great way to get some exercise!"
    }
]

const allTestimonials = document.getElementById("all-testimonials");

function generateTestimonialHtml(testimonialData){
    let starHTML = `<div class="star"></div>`
    let starBlackHTML = `<div class="star black"></div>`
    let stars = ""
    let blackStars = 5 - testimonialData.rating;
    stars = starHTML.repeat(testimonialData.rating) + starBlackHTML.repeat(blackStars);


    return `
        <div class="testimonial">
            <div  class="t-top-row">
                <div class="t-stars">
                    ${stars}
                </div>
                <span class="t-name">
                    ~${testimonialData.name}
                </span>
            </div>
            <div class="t-review">
                ${testimonialData.review}
            </div>
        </div>
    `
}

for (let testimonial of testimonialList){
    allTestimonials.innerHTML += generateTestimonialHtml(testimonial);
}


const tForm = document.getElementById("t-form");
function addTestimonial(e){
    e.preventDefault();
    const rating = document.querySelector('input[name="rating"]:checked').value;

    const name = document.getElementById("t-name").value.trim();
    const review = document.getElementById("t-message").value.trim();
        const testimonialData = {
        name,
        review,
        rating: Number(rating)
    };

    allTestimonials.innerHTML += generateTestimonialHtml(testimonialData);

    tForm.reset();
}
tForm.addEventListener("submit", addTestimonial)