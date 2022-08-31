function salary(input) {
    let index = 0
    let openedTabs = Number(input[index])
    index++
    let salary = Number(input[index])
    index++

    for (let i = 0; i <= openedTabs; i++) {
        let siteOpened = input[index]
        index++

        if (siteOpened === "Facebook") {
            salary -= 150
            if (salary <= 0) {
                console.log("You have lost your salary."); break;
            }
        } else if (siteOpened === "Instagram") {
            salary -= 100
            if (salary <= 0) {
                console.log("You have lost your salary."); break;
            }
        } else if (siteOpened === "Reddit") {
            salary -= 50
            if (salary <= 0) {
                console.log("You have lost your salary."); break;
            }
        }

    }
    if (salary > 0) {
        console.log(salary);
    }
}

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])



