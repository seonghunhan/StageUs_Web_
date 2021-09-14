function printAlert(value ) {
     alert(value);  //알림창띄우는기능
    console.log(value) //콘솔창에 프린트하는 기능 (디버깅할때 사용)
}

    document //돔에 접근할때 사용
function mul() {

    var firstNumDom = document.getElementById("firstNum");
    var secondNumDom = document.getElementById("secondNum"); // secondNumDom은 id가 세컨드넘이라는 돔을 가져온다

    var resultDom = document.getElementById("result");

    resultDom.innerHTML = firstNumDom.value * secondNumDom.value ; // ~~.type변수하면 타입값가져오고 ~~.class변수하면 클래스변수 가져온다
    //ineerHTML은 resultDom이라는 값을 HTML의 id가 result인것에 빈곳에 넣는다 <>요기!!<>
}
    document
function Test(value) {

    var firstNumDom = document.getElementById("firstNum");
    var secondNumDom = document.getElementById("secondNum");

    var resultDom = document.getElementById("result");

    alert(resultDom.innerHTML);

    // var test = document.getElementById("gogo");
    // alert(test.innerHTML);

    if (select >0) {

    }

    while (select != 0) {

    }

    for (var index=0; index<10; index++) {

    }
}
    document
function Test1() {

    var selectedDom1_1 = document.getElementsByName("A");


    var selectedDom1_2 = document.getElementsByName("B");

    var resultDom = document.getElementById("result");
   
   
    var Test = document.getElementById("Test");
    selectedDom1_1.innerHTML= selectedDom1_1.value;

    var resultDom1 = "";
    var resultDom2 = "";

    console.log(selectedDom1_1[0].id)

    if (selectedDom1_1[0].checked == true) {
        resultDom1 = "태현씨는"
    }
    else if (selectedDom1_1[1].checked == true) {
        resultDom1 = "해일씨는"
    }
    else if (selectedDom1_1[2].checked == true) {
        resultDom1 = "수민씨는"
    }
    else if (selectedDom1_1[3].checked == true) {
        resultDom1 = "성훈씨는"
    }

    if (selectedDom1_2[0].checked == true) {
        resultDom2 = "A하다"
    }
    else if (selectedDom1_2[1].checked == true) {
        resultDom2 = "B하다"
    }
    else if (selectedDom1_2[2].checked == true) {
        resultDom2 = "C하다"
    }
    else if (selectedDom1_2[3].checked == true) {
        resultDom2 = "D하다"
    }


    resultDom.innerHTML = resultDom1 + resultDom2
}
