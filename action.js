function set(op) {

    document.getElementById("display").value += op;

}


function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    Exp.value = result;
}