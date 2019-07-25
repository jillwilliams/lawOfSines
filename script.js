const lawOfSines = ( ) => {
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var A = document.getElementById("angle1").value;
    var B = document.getElementById("angle2").value;

    var answera = b* Math.sin(A*Math.PI/180)/ Math.sin(B*Math.PI/180);
    var answerb = a* Math.sin(B*Math.PI/180)/ Math.sin(A*Math.PI/180);
    var answerA =  Math.sin(B*Math.PI/180)*a/b;
    var answerB =  Math.sin(A*Math.PI/180)*b/a;

    if (b != 0 && A != 0 && B != 0) {
        return "Side #1 = " + answera.toFixed(2) + " un";
    } else 
    if (a != 0 && A != 0 && B != 0) {
        return "Side #2 = " + answerb.toFixed(2) + " un";
    } else 
    if (a != 0 && b != 0 && B != 0) {
        return "Angle #1 = " + answerA.toFixed(2) + "°";
    } else 
    if (a != 0 && b != 0 && A != 0) {
        return "Angle #2 = " + answerB.toFixed(2) + "°";
    } else 
        return "Re-enter values"; 
}
const answer = ( ) => {
    document.getElementById("demo1").innerHTML = lawOfSines( );
};