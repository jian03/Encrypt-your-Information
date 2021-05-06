function CaesarPass() { //암호화 코드
    var s = String(document.getElementById("CplainT").value); //평문 값 가져와서 변수 s에 저장
    var n = Number(document.getElementById("CpassKey").value); //암호키 값 가져와서 변수 n에 저장
    var pass = document.getElementById("CPpassword"); //암호문 요소 가져와서 변수 pass에 저장

    pass.innerHTML = solution(s, n); //solution 함수를 이용하여 변수 pass에 요소 추가
}

function solution(s, n) { //solution 함수 => 단일 치환 코드
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //대문자
    var lower = "abcdefghijklmnopqrstuvwxyz"; //소문자
    var answer= ''; //결과 값 변수 선언

    for(var i =0; i <s.length; i++){ //평문 길이만큼 반복
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer; //결과 값 리턴
}

function CarsarPlain() { //복호화 코드
    var s = String(document.getElementById("CplainT").value);
    var plain = document.getElementById("plainC");
    plain.innerHTML = s;
}