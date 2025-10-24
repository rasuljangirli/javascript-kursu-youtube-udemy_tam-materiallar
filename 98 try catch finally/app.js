//! try catch finally
console.log(1)

const jsonData = '{"firstName: "Alisa", "age":23}'



try {
    const data = JSON.parse(jsonData)
    console.log(data)

} catch (error) {

    console.log("Error oldu")

} finally {
    console.log("Bura her zaman isleyir")
}


console.log(2)

console.log(3)
