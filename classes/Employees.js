class Employees {
    #salary;
    #isHired = true; 
    static #allEmployees = [];
    constructor(name, title, salary){
        this.name = name;
        this.title = title;
        this.#salary = salary;
        Employees.#allEmployees.push(this);
    }
    static getEmployees(){
        return this.#allEmployees;
    }
    static getTotalPayroll(){
        let total = 0;
        for(let i = 0; i < this.#allEmployees.length; i++){
            let currEmployee = this.#allEmployees[i];
            // console.log(this.#allEmployees);
            // console.log(currEmployee);
            console.log(this.#allEmployees[i].getSalary());
            total += this.#allEmployees[i].getSalary();
        }
        return total;
    }
    setSalary(amount){
        this.#salary = amount;
    }
    getSalary(){
        return this.#salary;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(comand){
        if(comand === 'hire'){
            this.#isHired = true;
        }else {
            this.#isHired = false;
        }
    }



    
}

module.exports = {
    Employees,
}