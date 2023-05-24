const instructorsCards = document.querySelector('.instructor-main');
const moreButton = document.querySelector('.more');
const instructors = [
  {
    name: 'Alexei Kovalev',
    bio: ' British software engineer and the creator of the open-source NoSQL database system Couchbase',
    brief: "Kovalev's work has contributed to the development of high-performance, scalable database systems",
    image: './images/instructor/instructor_1.svg',
  },
  {
    name: 'Guido van Rossum',
    bio: 'Dutch programmer and creator of the Python programming language',
    brief: 'Van Rossum is known for his contributions to open source software and has worked for companies including Google and Dropbox',
    image: './images/instructor/instructor_2.svg',
  },
  {
    name: 'Susan Wojcicki',
    bio: 'American technology executive and the current CEO of YouTube',
    brief: 'Wojcicki has made significant contributions to the development of online video and has worked for companies including Google and Intel.',
    image: './images/instructor/instructor_3.svg',
  },
  {
    name: 'Grace Hopper',
    bio: 'American businesswoman and former CEO of Yahoo!',
    brief: 'Hopper has made significant contributions to the development of internet search and online advertising.',
    image: './images/instructor/instructor_4.svg',
  },
  {
    name: 'Michael Widenius',
    bio: ' Finnish software engineer and the original developer of the MySQL database management system',
    brief: 'Widenius is known for his contributions to the development of open source software and has founded several successful software companies',
    image: './images/instructor/instructor_5.svg',
  },
  {
    name: 'Martin Fowler',
    bio: 'British software developer, author, and international speaker on software development topics',
    brief: 'Fowler is known for his work on software design patterns and agile software development methodologies.',
    image: './images/instructor/instructor_6.svg',
  },
];

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
    `;
  instructorsCards.insertAdjacentHTML('beforeend', buildCardHTML);
}

let index = 0;
function listCardsInstructorMobile() {
  for (let cardIndex = 0; cardIndex < 3; cardIndex += 1) {
    buildInstructorCard(index);
    index += 1;
    if (index === instructors.length) {
      moreButton.classList.add('hide');
      return;
    }
  }
}

function listCardsInstructorDesktop() {
  for (let cardIndex = instructors.length - 1; cardIndex >= 0; cardIndex -= 1) {
    buildInstructorCard(cardIndex);
  }
}

if (window.innerWidth < 768) {
  listCardsInstructorMobile();
  moreButton.addEventListener('click', listCardsInstructorMobile);
} else {
  listCardsInstructorDesktop();
}