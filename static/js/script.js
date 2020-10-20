
displayAgeInDays = () => {
    console.log("starting this funciton")
    let dayz=birthdate();
    console.log("returned birthday")
    let h2 = `You are ${dayz} days old.`
    console.log(h2)
    document.getElementById("ageindays").innerHTML= h2;

}

birthdate = () => {
    var birthday = prompt("What year where you born?");
    let ageInDays = (2020- birthday) * 365;
    console.log(ageInDays);
    return ageInDays;
}