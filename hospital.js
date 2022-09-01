function hospital(input) {
    let index = 0
    let numberOFDays = Number(input[index])
    index++
    let treatedPatients = 0
    let untreatedPatients = 0
    let doctors = 7

    for (let i = 1; i <= numberOFDays; i++) {
        let patients = Number(input[index])
        index++
        if (i % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++
            }
        }
        if (patients <= doctors) {
            treatedPatients += patients
        } else {
            treatedPatients += doctors
            untreatedPatients += patients - doctors
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}

hospital(['6', '25', '25', '25', '25', '25', '2'])