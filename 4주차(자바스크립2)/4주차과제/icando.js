var selected_piece1
var selected_piece2
var selected_piece3
var selected_piece1_value
var YLEN = 3, // 행 길이
        XLEN = 3, // 열 길이
        board = [], // 보드 배열 (YLEN x XLEN)
        boardEl = $('#board'); // 테이블 엘리먼트

function myDragOverEvent(e){
    e.preventDefault();

}

function dragEvent(value){

    var target_piece = document.getElementsByClassName("puzzle_piece");

    selected_piece1 = window.getComputedStyle(target_piece[value]).backgroundColor;

    //console.log(selected_piece1)
    selected_piece1_value = value

}

function dropEvent(value) {

    selected_piece2 = document.getElementsByClassName("puzzle_piece");

    tmp_save_piece2_color(value)

    selected_piece2[value].style.backgroundColor = selected_piece1;
    selected_piece2[selected_piece1_value].style.backgroundColor = selected_piece3;
    // selected_piece1[value].style.backgroundColor = selected_piece3;
}
    
function tmp_save_piece2_color(value){

    selected_piece3 = window.getComputedStyle(selected_piece2[value]).backgroundColor;
    //console.log("selected_piece3")
    // selected_piece1[value].style.backgroundColor = selected_piece3
}

function shupple(){
    origin_list = document.getElementsByClassName("puzzle_piece");
    console.log(origin_list.length)
}

function game_finish(){

}



function initPuzzle() { // 퍼즐 데이터를 초기화
    board = [];
    for (var y = 0; y < YLEN; y++) {
        board[y] = []; // 각 행마다 열 배열 설정
        for (var x = 0; x < XLEN; x++) {
            var idx = y * XLEN + x;
            if (idx < blank) board[y][x] = idx + 1; // 순서대로 숫자 할당
            else board[y][x] = BLANK; // 마지막 빈칸 설정
        }
    }

    // 데이터 초기화 후 화면 갱신
    updateBoard();
}

function updateBoard() { // 퍼즐 데이터를 화면에 표시
    boardEl.empty(); // 테이블을 비우고
    var html = '';
    for (var y = 0; y < YLEN; y++) {
        html += '<tr>';
        for (var x = 0; x < XLEN; x++) {
            if (board[y][x] != BLANK) html += '<td class="num">' + board[y][x] + '</td>';
            else html += '<td class="blank">&nbsp;</td>'; // 빈칸
        }
        html += '</tr>';
    }
    boardEl.html(html);
}


function isEnd() {
    for (var y = 0; y < YLEN; y++) {
        for (var x = 0; x < XLEN; x++) {
            var expect = y * XLEN + x + 1;  // 기대값
            if (y * XLEN + x < YLEN * XLEN - 1) { // 마지막 칸은 제외
                if (board[y][x] != expect) return; // 기대값이 아니면 중단
            }
        }
    }
    // 여기 까지 코드가 진행 됐다면. 성공.
    alert('ok');
}



