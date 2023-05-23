const instructorsCards = document.querySelector(".instructor-main");
const moreButton = document.querySelector(".more")
const instructors = [
    {
        name: "Yochai Benkler",
        bio: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        brief: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
        image: "./images/instructor/instructor_1.svg"
    },
    {
        name: "Yochai Benkler",
        bio: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        brief: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
        image: "./images/instructor/instructor_1.svg"
    },
    {
        name: "Yochai Benkler",
        bio: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        brief: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
        image: "./images/instructor/instructor_1.svg"
    },
    {
        name: "Yochai Benkler",
        bio: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        brief: "Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006",
        image: "./images/instructor/instructor_1.svg"
    }
]

function buildInstructorCard(index) {
    const buildCardHTML = `
        <li class="instructor-item" >
            <img src="${instructors[index].image}" alt="${instructors[index].name}'s image" class="instructor-img">
            <div class="instructor-details">
                <h4>${instructors[index].name}</h4>
                <h6>${instructors[index].bio}</h6>
                <p>${instructors[index].brief}</p>
            </div>
        </li>
    `
    instructorsCards.insertAdjacentHTML('beforeend', buildCardHTML)
}



let index = 0;
function listCardInstructorMobile() {
    for (let cardIndex = 0; cardIndex < 3; cardIndex++) {
        buildInstructorCard(index);
        index++;
        if (index == instructors.length) {
            moreButton.classList.add("hide");
            return;
        }
    }
}

listCardInstructorMobile();
moreButton.addEventListener('click', listCardInstructorMobile);

