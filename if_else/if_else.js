
var choice
choice = prompt("Enter Question Number you want to attempt.\n1. Even/Odd Number Checker.\n2. Positive/Negative Number Checker\n3. Maximum of Two Numbers\n4. Minimum of Three Numbers\n5. Factorial Calculator\n6. Grade Calculator\n7. Temperature Converter\n8. Triangle Type Identifier\n9. Character Vowel/Consonant Checker\n10. Power Calculator\n11. Age Group Classifier")
if (choice == 1) {
    var a
    a = prompt("Enter a Number.")
    if (a % 2 == 0) {
        document.write(`Q ${choice}: ${a} is an even number.`)
    } else {
        document.write(`Q ${choice}: ${a} is odd number.`)
    }
} else if(choice == 2){
    var a
    a = prompt("Enter a Number.")
    if (a > 0) {
        document.write(`Q ${choice}: ${a} is a positive number.`)
    } else if(a < 0){
        document.write(`Q ${choice}: ${a} is a negative number.`)
    }
    else{
        document.write(`Q ${choice}: You entered ZERO.`)
    }
}
 else if(choice == 3){
    var a
    var b
    a = prompt("Enter first Number.")
    b = prompt("Enter second Number,")
    if (a > b) {
        document.write(`Q ${choice}: ${a} is greater than ${b}.`)
    } else if(b > a){
        document.write(`Q ${choice}: ${b} is greater than ${a}.`)
    }
    else{
        document.write(`Q ${choice}: You entered both numbers ZERO.`)
    }
}
 else if(choice == 4){
    var a
    var b
    a = prompt("Enter first Number.")
    b = prompt("Enter second Number,")
    if (a < b) {
        document.write(`Q ${choice}: ${a} is smaller than ${b}.`)
    } else if(b < a){
        document.write(`Q ${choice}: ${b} is smaller than ${a}.`)
    }
    else{
        document.write(`Q ${choice}: You entered both numbers ZERO.`)
    }
}
 else if(choice == 5){
    var a = +prompt("Enter a number to find its factorial.")
    for(var i = a - 1;i > 0;i--){
        a = a * i
    }   
    document.write(`Q ${choice}: Factorial is: ${a}.`)
}
 else if(choice == 6){
    var a, b, c
    a = +prompt("Enter marks of first subject out of 30.")
    b = +prompt("Enter marks of second subject out of 30.")
    c = +prompt("Enter marks of third subject out of 30.")
    var avg = a + b + c
    if (avg >= 82 && avg <= 90) {
        document.write(`Q ${choice}: Your Grade is: 'A'.`)
    } 
    else if (avg >= 73 && avg <= 81) {
        document.write(`Q ${choice}: Your Grade is: 'B'.`)
    } 
    else if (avg >= 64 && avg <= 72) {
        document.write(`Q ${choice}: Your Grade is: 'C'.`)
    } 
    else if (avg >= 55 && avg <= 63) {
        document.write(`Q ${choice}: Your Grade is: 'D'.`)
    } 
    else if (avg >= 45 && avg <= 54) {
        document.write(`Q ${choice}: Your Grade is: 'E'.`)
    } 
    else {
        document.write(`Q ${choice}: Your Grade is: 'F'.`)
    }
}
 else if(choice == 7){
    var c
    c = +prompt("Enter temperature in celsius")
    var f = ((9/5) * c) + 32.
    document.write(`Q ${choice}: Temperature in Celsius:${c} <br>Temperature in Fahrenheit is: ${f}`)
}
 else if(choice == 8){
    var l1, l2, l3
    l1 = prompt("Enter first side of triangle")
    l2 = prompt("Enter second side of triangle")
    l3 = prompt("Enter third side of triangle")
    if (l1 == l2 && l1 == l3 && l2 == l3) {
    document.write(`Q ${choice}: Your triangle is 'Equilateral'`)
    } 
    else if (l1 == l2 || l1 == l3 || l2 == l3) {
    document.write(`Q ${choice}: Your triangle is 'Isosceles'`)
    } 
    else if (l1 != l2 && l1 != l3 && l2 != l3){
    document.write(`Q ${choice}: Your triangle is 'Scalene'`)
    }
}
 else if(choice == 9){
    var a = prompt("Enter a Character.")
    if (a == 'a' || a == 'e' ||a == 'i' ||a == 'o' ||a == 'u' ||a == 'A' ||a == 'E' ||a == 'I' ||a == 'O' ||a == 'U') {
    document.write(`Q ${choice}: Your Character is a 'VOWEL'`)
    } 
    else {
    document.write(`Q ${choice}: Your Character is a 'CONSONANT'`)
    }
}
 else if(choice == 10){
    var base = +prompt("Enter base number.")
    var exponent = +prompt("Enter exponent number.")
    var result = base ** exponent
    document.write(`Q ${choice}: Result: ${result}`)
}
 else if(choice == 11){
    var age = +prompt("Enter your age.")
    if (age <= 12) {
    document.write(`Q ${choice}: You are a 'Child'`)
    } 
    else if (age >= 13 && age <= 19) {
    document.write(`Q ${choice}: You are a 'Teenager'`)
    } 
    else if (age >= 20 && age <= 64) {
    document.write(`Q ${choice}: You are an 'Adult'`)
    } 
    else {
    document.write(`Q ${choice}: You are a 'Senior'`)
    }
}
else{
    alert("There are only 11 Questions.\nPlease choose among them.")
}