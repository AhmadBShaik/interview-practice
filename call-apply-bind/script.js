function printFullName(hometown,state){
  console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`)
}

const name1 = {
  firstName: "Ahmad",
  lastName: "Shaik"
  
}
// Function Barrowing
printFullName.call(name1, "Nellore", "Andhra Pradesh")
printFullName.apply(name1, ["Nellore", "Andhra Pradesh"])

const name2 = {
  firstName: "Tarak",
  lastName: "Mehta"
}

// Function Barrowing
printFullName.call(name2, "Ahmedabad", "Gujarat")
printFullName.apply(name2, ["Ahmedabad", "Gujarat"])


//Bind

const printMyName = printFullName.bind(name1, "Nellore", "Andhra Pradesh")
printMyName()

const printTarakName = printFullName.bind(name2,"Ahmedabad", "Gujarat")
printTarakName()