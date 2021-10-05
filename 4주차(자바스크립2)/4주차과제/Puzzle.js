var selected_number_background = null
var selected_number_fontsize = null
var selected_number_color = null
var selected_number_textAlign = null
var selected_number = null
var start_num = null
var start_num2 = null


function dragEvent1(value){
    var targetDiv = document.getElementsByClassName("number_box");
    var target_number = document.getElementsByClassName("number_box");

    selected_number_background = window.getComputedStyle(targetDiv[value]).backgroundColor;
    selected_number_fontsize = window.getComputedStyle(targetDiv[value]).fontSize;
    selected_number_color = window.getComputedStyle(targetDiv[value]).color;
    selected_number_textAlign = window.getComputedStyle(targetDiv[value]).textAlign;
    selected_number = target_number[value].innerHTML

    start_num = value
    console.log(value)
}

function dropEvent1(value) {
    var result_box1 = document.getElementsByClassName("number_box");

    result_box1[value].innerHTML = selected_number;
    result_box1[value].style.backgroundColor = selected_number_background;
    erasebox2(start_num);
}

function myDragOverEvent2(e){
    e.preventDefault();
}

function dragEvent2(value) {
    var target_number = document.getElementsByClassName("result_number_box");
    selected_number = target_number[value].innerHTML
    selected_number_background = window.getComputedStyle(target_number[value]).backgroundColor;

    start_num = value
    
}

function dropEvent2(value) {
    // var result_box = document.getElementById("result_box1")
    var result_box2 = document.getElementsByClassName("result_number_box");

    result_box2[value].style.backgroundColor = selected_number_background;
    result_box2[value].style.fontSize = selected_number_fontsize;
    result_box2[value].style.color = selected_number_color;
    result_box2[value].style.textAlign = selected_number_textAlign;
    
    result_box2[value].innerHTML = selected_number;


    console.log(value)
    erasebox1(start_num);
}

function erasebox1(index){
    var erase_boxnum = document.getElementsByClassName("number_box")

    erase_boxnum[index].style.backgroundColor = 'white'
}

function erasebox2(index){
    var erase_boxnum = document.getElementsByClassName("result_number_box")

    erase_boxnum[index].style.backgroundColor = 'white'
}
