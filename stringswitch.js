var grade = "A";
switch (grade) {
    case 'A+':
        console.log("Marks >= 90" + "\n" + "Excellent");
        break;
    case 'A':
        console.log("Marks [ >= 80 and <90 ]" + "\n" + "Good");
        break;
    case 'B+':
        console.log("Marks [ >= 70 and <80 ]" + "\n" + "Above Average");
        break;
    case 'B':
        console.log("Marks [ >= 60 and <70 ]" + "\n" + "Average");
        break;
    case 'C':
        console.log("Marks < 60" + "\n" + "Below Average");
        break;
    default:
        console.log("Invalid Grade.");
}
