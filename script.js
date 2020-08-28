const lawOfSines = ( ) => {
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var A = document.getElementById("angle1").value;
    var B = document.getElementById("angle2").value;

    var answera = (b* Math.sin(A*Math.PI/180)) / (Math.sin(B*Math.PI/180));
    var answerb = (a* Math.sin(B*Math.PI/180)) / (Math.sin(A*Math.PI/180));
    var answerA =  Math.asin(Math.sin(B*Math.PI/180)*a/b)*(180/Math.PI);
    var answerB =  Math.asin(Math.sin(A*Math.PI/180)*b/a)*(180/Math.PI);

    if (b != 0 && A != 0 && B != 0) {
        return "Side #1 = " + answera.toFixed(1) + " un";
    } else 
    if (a != 0 && A != 0 && B != 0) {
        return "Side #2 = " + answerb.toFixed(1) + " un";
    } else 
    if (a != 0 && b != 0 && B != 0) {
        return "Angle #1 = " + answerA.toFixed(1) + "°";
    } else 
    if (a != 0 && b != 0 && A != 0) {
        return "Angle #2 = " + answerB.toFixed(1) + "°";
    } else 
        return "Re-enter values"; 
}
const answer = ( ) => {
    document.getElementById("demo1").innerHTML = lawOfSines( );
};