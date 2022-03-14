//Spread and Destructuring Exercise

// 1a 
const mcuShows = ['Loki',`Moon Knight`];
 console.log(mcuShows);

// 1b
const starWarsShows = [`The Mandalorian`, `The Book of Boba Fett`];

// 1c
const disneyPlusShows =[ ...mcuShows, ...starWarsShows, `The Beatles: Get Back`];

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`
};
console.log(netflixMovies);

// 2b
const amazonPrimeMovies = {
    action: 'The Tomorrow War',
    drama: 'One Night Miami'
};
console.log(amazonPrimeMovies);

// 2c 2d
const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: 'Hamilton',
    action: `Extraction`
};
console.log(streamingMovies);

// 3a 
const disneyJunior= [
    `Mickey Mouse Clubhouse`, 
    `Spidey and His Amazing Friends`
];
//3b
const [mickey,spidey] = disneyJunior;

//3c
console.log[mickey,spidey];

const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};

const [warMachine,theHulk] = avengers


console.log[warMachine,theHulk];

const moreAvengers = {

    blackWidow: `Natasha Romonov`,
    hawkeye: `Clint Walker`,
    Ironman: `Tony Stark`
};

const {blackWidow: nat,...others} = moreAvengers;


console.log (nat,others);


//BONUS

const bonus = {

    first:[1,2,3],
    second:[4,5,6],
    third:[7,8,9]
};

const {first,second,third} = bonus;
const all = [...first,...second,...third];
console.log(all)
// or
// const all = [
    // ...bonus[`first`],
    // ...bonus [`second`],
    // ...bonus[`third`]
// ];

// console.log(all)

//  5b

const [one, two, three, four, five, six, seven, eight, nine] = all

//    const [one, two, three] = bonus.first;//
//    const [four, five, six,] = bonus.second;
//    const [ seven , eight , nine,] = bonus.third;
console.log(one, two, three, four, five, six, seven, eight, nine);

// 5c



