// FOR LATER, IGNORE FOR NOW
const testimonialList = [
    {
        "rating": 4,
        "name": "Bobbi",
        "review": "A true gem of a friend!"
    },
    {
        "rating": 4,
        "name": "Bob",
        "review": "This Rocks!"
    },
    {
        "rating": 2,
        "name": "Goob",
        "review": "Very lazy, doesn't move for days."
    },
    {
        "rating": 5,
        "name": "Bobbert",
        "review": "Mine's not just a rock. it's family!"
    },
    {
        "rating": 5,
        "name": "Bobsi",
        "review": "My depression? Cured. Will to live? Restored!"
    },
    {
        "rating": 5,
        "name": "Bobberta",
        "review": "Walking my pet rock every day has been a great way to get some exercise!"
    }
]
 
let testimonialBox = document.getElementById('tesitmonials-box');
// Generate testimonial elements from the testimonialList array and display
// them on the page with a visual star rating and reviewer name.
 
for (let review of testimonialList) {
 
    let stars = '';
    for(let i = 0; i < 5; i++){
        if(i < review.rating){  
                stars += `<img class="star-img" src="/peblepals_class_project/assets/star_yellow.svg">`
        }else {
            stars  += `<img class ='star-img' src ="/peblepals_class_project/assets/star_black.svg">`
        }
    }
//tesdsdffsdfdds
 
    let testimonialToAdd = `
        <div class="testimonial">
            <div class="t-rating-row">
                <div class="t-stars">
                    ${stars}
                </div>
                <p class="t-name">~${review.name}</p>
            </div>
            <p class="t-message">
                ${review.review}
            </p>
        </div>
                `
 
                testimonialBox.innerHTML += testimonialToAdd
}