function passwordGuess(input){
    let password = "s3cr3t!P@ssw0rd"
    let currenPass = input[0]

    if (password === currenPass){
        console.log('Welcome')
    }
    else {
        console.log("Wrong password!")
    }
}

passwordGuess(['s3cr3t!P@ssw0rd'])