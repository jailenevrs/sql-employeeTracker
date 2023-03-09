const inquirer = require('inquirer');
const db = require('./connection');
const table = require("console.table"); 


function choices(){
    inquirer.prompt(
        {
            name:"options",
            message: "What would you like to do?",
            type:"list",
            choices: [
            {   
                name: "View All Employees",
                value: 'VIEW_ALL_EMPLOYEES'
            },
            {
                name:  "Add An Employee",
                value: 'ADD_EMPLOYEE'
            },
            {   name: "Update Employee Role",
                value: 'UPDATE_EMPLOYEE_ROLE'
            },
            {
                name:  "View All Roles",
                value: 'VIEW_ALL_ROLES'
            },
            {
                name:  "Add A Role",
                value: 'ADD_ROLE'
            },
            {
                name:  "Add A Department",
                value: 'ADD_DEPT'
            },
            {
                name: 'View All Departments',
                value: 'VIEW_ALL_DEPTS'
            },
            {
                name: 'exit',
                value: 'EXIT_CLI'
            }
        ]
    }
    ).then(({ options }) => {
        console.log(options)
        switch(options) {
            case "VIEW_ALL_EMPLOYEES":
                viewAllEmployees();
            break;
            case "ADD_EMPLOYEE":
                addEmployee();
            break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployee();
            break;
            case "VIEW_ALL_ROLES":
                viewAllRoles();
            break;
            case "ADD_ROLE":
                addRole();
            break;
            case "VIEW_ALL_DEPTS":
                viewAllDepartments();
            break;
            case "ADD_DEPT":
                addDepartment();
            break;
            default:
               process.exit() 
            console.log("No value found");
        }
    })
    };
 choices();
    
// const viewAllEmployees = () => {
//     const query = db.query("SELECT * FROM employess", function (err, res) {
//         if (err) throw err
//         console.log("\n Employees in database \n");
//         console.table(res);
//        choices();
//     });
   
// }

const viewAllDepartments = () => {
    const query = db.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err
        console.log("\n Departments in database \n");
        console.table(res);
       choices();
    });
  };
   



// const addEmployee = async () => {
//     try {
//         const response = await inquirer.prompt([
//             {
//                 name: "firstName",
//                 message: "What is the first name?",
//                 type: "input",
//             },
//             {
//                 name: "lastName",
//                 message: "What is the last name?",
//                 type: "input",
//             },
//             {
//                 name: "managerId",
//                 message: "What is the manager id?",
//                 type: "input",
//             },
//             {
//                 name: "roleId",
//                 message: "What is the role id?",
//                 type: "input",
//             }
//         ])
    


        // const addDepartment = async () => {
        //     try{ 
        //         const response = await inquirer.prompt([
        //            { name: "departmentName",
        //            message: "What is the name of the department?",
        //            type: "input"
        //         }
        //         ])

        //     }

        // }
