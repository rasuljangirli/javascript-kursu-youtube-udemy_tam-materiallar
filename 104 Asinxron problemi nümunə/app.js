



const students = [
    {
        id: 1214142553,
        firstName: "Tom",
        lastName: "Alyon",
    }, {
        id: 1214255453,
        firstName: "Alisa",
        lastName: "Aloso",
    },
    {
        id: 1214145453,
        firstName: "Seri",
        lastName: "Simon",
    }
]

const studentsEducation = [
    {
        firstName: "Alisa",
        education: "master"
    },
    {
        firstName: "Tom",
        education: "bachelor"
    },
    {
        firstName: "Seri",
        education: "master"
    }
]


function getName(id) {
    let studentName;

    setTimeout(() => {
        students.forEach((student) => {
            if (id === student.id) {
                studentName = student.firstName;
            }
        })
        return studentName;
    }, 2000)
}


function getEducation(firstName) {
    let studentEducation;

    setTimeout(() => {
        studentsEducation.forEach((student) => {
            if (firstName === student.firstName) {
                studentEducation = student.education
            }
        })
        return studentEducation
    }, 1000)
}



const studentName = getName(1214255453);
console.log(studentName)

console.log(getEducation(studentName))


