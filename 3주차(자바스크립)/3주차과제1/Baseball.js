var No_list = []
var PassNumber = []

function Start() {
    PassNumber1 = Math.floor(Math.random() * 9) + 1;
    PassNumber2 = Math.floor(Math.random() * 9) + 1;
    PassNumber3 = Math.floor(Math.random() * 9) + 1;


    while (PassNumber2 == PassNumber1) {                  //while (조건) 조건일떄까지 반복이아니고 조건이 True이면 반복으로 알자
        PassNumber2 = Math.floor(Math.random() * 9) + 1;
    }

    while (PassNumber3 == PassNumber1 || PassNumber3 == PassNumber2) { //while (조건) 조건일떄까지 반복이아니고 조건이 True이면 반복으로 알자
        PassNumber3 = Math.floor(Math.random() * 9) + 1;
    }

    
    for (var index=1; index<10; index++) {
        var target = document.getElementById("Num_Btn"+index);
        target.disabled = false;

    }

    if (No_list.length > 0) {
        remove();
    }

    let test1 = [PassNumber1,PassNumber2,PassNumber3]
    PassNumber = test1
    console.log(PassNumber1,PassNumber2,PassNumber3)
    console.log(PassNumber)
}




function choise_btn(value) {
    // console.log("Num_Btn"+value)
    var target = document.getElementById("Num_Btn"+value);
    target.disabled = true;

    input_btn(value);
}

function input_btn(value) {


    No_list.push(Number(value));
    console.log(No_list)



    input1 = document.getElementById("1th_No");
    input2 = document.getElementById("2th_No");
    input3 = document.getElementById("3th_No");

    
    // input1.innerHTML = No_list[0]
    // input2.innerHTML = No_list[1]
    // input3.innerHTML = No_list[2]

    if (No_list.length == 1) {
        input1.innerHTML = No_list[0];
    }
    else if (No_list.length == 2) {
        input2.innerHTML = No_list[1];
    }
    else if (No_list.length == 3) {
        input3.innerHTML = No_list[2];
    }


}

function remove() {
    No_list.splice(0, No_list.length);
    input1.innerHTML = ""
    input2.innerHTML = ""
    input3.innerHTML = ""
}

function calculation() {
    console.log(No_list);

    

    var test2 = (PassNumber.filter(x => No_list.includes(x))).length;
    
    var strike_count = 0
    var ball_count = 0
    var out_count = 0
    for (var index=0 ; index<3; index++){
        if (No_list[index] == PassNumber[index]){
            strike_count += 1;
        }
        else if (PassNumber.indexOf(No_list[index]) > -1){ //특정 문자를 만나지 못하면 그때는 -1 을 반환한다.//PassNum에 No_list를 넣어가며 비교
            ball_count += 1;
        }
        else if (PassNumber.indexOf(No_list[index]) == -1){
            out_count += 1;
        }
    }



    No_list.splice(0, No_list.length);
    input1.innerHTML = ""
    input2.innerHTML = ""
    input3.innerHTML = ""

    for (var index=1; index<10; index++) {
        var target = document.getElementById("Num_Btn"+index);
        target.disabled = false;
    }

    var print = document.getElementById("print")
    print.innerHTML += ball_count+"B "+strike_count+ "S "+out_count+"O                           "

    if (strike_count == 3){
        alert("ㅊㅋㅊㅋ")
    }
    console.log(PassNumber)

    
    
}

