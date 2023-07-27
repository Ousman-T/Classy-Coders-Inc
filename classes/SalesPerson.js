const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSale = 0;
    constructor(name, position, salary, clients) {
        super(name, position, salary);
        this.clients = clients;
        
    }
    getSalesNumber(){
        return this.#totalSale;
    }
    makeSale(amount){
        this.#totalSale += amount;
    }



    
}

module.exports = {
    SalesPerson,
}