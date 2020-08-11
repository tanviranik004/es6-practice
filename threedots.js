const ages = [12, 13, 14, 16, 17];
const ages2 = [ 15, 18, 19,20];
const ages3 = [ 25, 26, 29,27];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250 ;

const takaPoisa=[ 650, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);