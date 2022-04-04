function projects(input){
    let name = input[0];
    let numberOfprojects = input[1]
    let neededHours = numberOfprojects * 3
    console.log("The architect " + name + " will need" + " " + neededHours + " hours to complete" + " " + numberOfprojects + " project/s.")

}

projects(['Sanya', '9'])