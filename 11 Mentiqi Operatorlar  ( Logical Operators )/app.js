
/*
?     Mentiqi Operatorlar  ( Logical Operators )


?1    && ve
?2    || ve ya
?3    !  deyil

*/

//? &&

// Bilet olmalidir VE Hemen Universitetin telebesi olmalisiz

// let biletVar = true;

// let buUniversitetTelebesi = true;

// console.log(biletVar && buUniversitetTelebesi && 5 > 20);

// true && true   => true
// true && false   => false
// false && true    => false


//? ||
// console.log(5 > 2 || 4 < 1 || 12 > 123 || 32 < 4);
// true || true   => true
// true || false   => true
// false || true    => true

//? !
// let a = false;
// console.log(!a)
// console.log(!(5 > 1));


// Zedesi bitmelidir VE Formda olmalidir VE ya cekisi 100-den asagi olmalidir

let icardiZedesiSagalib = true;
let icardiFormdadir = true;

let icardiCeki = 105;

let netice = (icardiZedesiSagalib && icardiFormdadir) || icardiCeki < 100;

console.log(netice);


