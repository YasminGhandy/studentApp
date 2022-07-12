const fs = require('fs')
const { title } = require('process')

const addStudents = (id, name, grade,comment) => {
    const students = loadStudents(); //array of object students
    const checkIdDuplicate = students.find((student)=>{
        return student.id === id
    });
    console.log(grade)
    if(!checkIdDuplicate) {
        students.push({
            id,
            name,
            grade,
            total:sum(grade),
            comment
        })
        saveStudents(students)
        console.log('Saved Successfully')
    }
    else{
        console.log('Error Duplicate id')
    }
}

const deleteStudents = (id) => {
    const students = loadStudents();
    const studentNeedToKeep = students.filter((student)=>{
        return student.id !== id
    });
    if (studentNeedToKeep.length !== students.length){
        saveStudents(studentNeedToKeep)
        console.log('Deleted Successfuly')
    }
    else{
        console.log('There is no id to delete')
    }
}

const readStudents = (id) => {
    const students = loadStudents();
    const findStudent = students.find((student)=>{
        return student.id === id
    })
    if(findStudent){
        console.log(findStudent.name,findStudent.total)
    }
    else{
        console.log('There is no student with this id' )
    }
}
const listStudents = () => {
    const students = loadStudents();
    students.forEach(el => {
        console.log(el.name)
    })
}
/////////////////////////////////////////////save, load and sum functions /////////////////////////////////////////////////////////

const loadStudents = () => {
    try{
        const data = fs.readFileSync('students.json').toString() // convert to object
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}

const saveStudents = (student) => {
    const saveStdData = JSON.stringify(student) //convert to json 
    fs.writeFileSync('students.json',saveStdData)
}
const sum = (grade) => {
    let total = 0;
    grade.forEach(el => {
        total += el
    })
    return total
}
module.exports={
    addStudents,
    deleteStudents,
    readStudents,
    listStudents
}
