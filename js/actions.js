function func1() {
    var num1 = parseInt(document.getElementById("var1").innerHTML);
    var num2 = parseInt(document.getElementById("var2").innerHTML);
    var num3 = parseInt(document.getElementById("var3").innerHTML);
    var num4 = parseInt(document.getElementById("var4").innerHTML);
    var num5 = parseInt(document.getElementById("var5").innerHTML);
    var num6 = parseInt(document.getElementById("var6").innerHTML);
    var num7 = parseInt(document.getElementById("var7").innerHTML);
    var total = num1 + num2 + num3 + num4 + num5 + num6 + num7; 
    alert(num1 + " + " + num2 + " + " + num3 + " + " + num4 + " + " + num5 + " + " + num6 + " + " + num7 + " = " + total);
}

function func2() {
    var uName = document.getElementById("un").value;
    var pass = document.getElementById("pass").value;
    var pay;
        if (document.getElementById("visa").checked == true)
            pay = document.getElementById("visa").value;
        if (document.getElementById("mc").checked == true)
            pay = document.getElementById("mc").value;
        if (document.getElementById("amex").checked == true)
            pay = document.getElementById("amex").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    alert("User name: " + uName + "\nPassword: " + pass + "\nPayment: " + pay + "\nExpiration date: " + month + " / " + year);
}
