document.body.innerHTML = "<h1>Javascript Refresher</h1>";

// array methods
let arr = [45, 78, 90, 32, 56, 88, 60];

let newar = arr.filter((mark, index) => mark > 50).map(mark => mark + 5);
console.log("List of marks greater than 50 after adding + 5: ")
newar.forEach(mark => console.log(mark));

// let title = document.getElementsByClassName("title")[0]
// title.innerText = "List of marks greater than 50 and added + 5: ";
// let list = document.getElementsByClassName("list-item");
// newar.forEach(mark, index => {
//     list[index].innerHTML = mark;
// })

const salaries = [20000, 35000, 50000, 12000, 450000];

let newSalaries = salaries.map(salary => {
    if (salary < 25000) {
        return salary + salary * 0.2
    } else if (salary >= 25000 && salary <= 40000) {
        return salary + salary * 0.1
    } else if (salary > 40000) {
        return salary + salary * 0.05
    }
})
console.log("salaries after 20% increment : " )
newSalaries.forEach(sal => console.log(sal));