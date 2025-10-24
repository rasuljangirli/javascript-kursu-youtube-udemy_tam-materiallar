
const b = 20;

function seyHello(name) {
    console.log("Hello", name)
}

export default function sum(a) {
    seyHello("alisa")
    console.log(b + a)
}



// export { sum as method1, b as d }
export { b }

