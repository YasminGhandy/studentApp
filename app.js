const students = require('./student')
const yargs = require('yargs');

yargs.command({
    command:'add',
    describe:'Add student information',
    builder:{
        id:{
            describe:'This is student id in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is student name in add command',
            demandOption:true,
            type:'string'
        },
        degrees:{
            describe:'This is array of student degrees in add command',
            demandOption:true,
            type:'array'
        },
        comment:{
            describe:'this is comment in add command',
            demandOption: false,
            type:'string'
        }
    },
    handler:()=>{
        students.addStudents(yargs.argv.id,yargs.argv.name,yargs.argv.degrees,yargs.argv.comment);
    }
})

yargs.command({
    command:'delete',
    describe:'delete student information',
    builder:{
        id:{
            describe:'This is student id in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:()=>{
        students.deleteStudents(yargs.argv.id)
    }
})

yargs.command({
    command:'read',
    describe:'read student information',
    builder:{
        id:{
            describe:'This is student id in read command',
            demandOption:true,
            type:'number'
        }
    },
    handler:()=>{
        students.readStudents(yargs.argv.id)
    }
})
yargs.command({
    command:'list',
    describe:'list students information',
    handler:()=>{
        students.listStudents()
    }
})

yargs.parse()
