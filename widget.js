'use strict';

function clickBtn1(){
    let flag = 0;
    const ta1 = document.form1.textarea1.value;
    const ta2 = document.form2.textarea2.value;
    const name = document.getElementById('comment');

    if(name.innerHTML.length < 1) {
        document.getElementById('comment-error-message').innerHTML = "入力必須項目です";
    } else {
        document.getElementById("span1").textContent = `${ta2} より:\n${ta2}様のコメントは承認待ちです。これはプレビューで、コメントは承認後に表示されます。\n\n${ta1}`;
    }
    
};

// function check(){
//     if(!document.form.textarea3.value.match(/.+@.+\..+/)){

// 		flag = 1;

//     }
//     if(flag){

// 		document.getElementById('error-message').innerHTML = 'メールアドレスが正しくありません'; 
// 		return false; // 送信を中止

// 	}
// 	else{

// 		return true; // 送信を実行

// 	}
// }

let x = document.getElementById("snackbar");
let y = document.getElementById("snackbar2");
let link = document.getElementById("link");
link.href = "https://www.yahoo.co.jp";

window.onload = function count() {

    (function () {
        const now = new Date();
        let random = Math.floor(Math.random() * 11);
        // random.style.color = "blue";
        const Hour = now.getHours();
        const Min = now.getMinutes();
      
        document.getElementById("nowTime").innerHTML = `${Hour}時${Min}分現在あなたの他に${random}人が見ています`;
        // return s;
      }());


    let snackbars = document.getElementsByClassName("snackbar");
    (function(snackbars) {
        

      let counter = 0;
      let prevSnackbarIndex = snackbars.length - 1;
      let currentSnackbarIndex = 0;
      let nextSnackbarIndex = 0;
      setInterval(
        function() {
          if (counter % 4 == 0) {
            snackbars[currentSnackbarIndex].classList.add("show");
          }
          else if (counter % 4 == 1) {
            snackbars[prevSnackbarIndex].classList.remove("show");
            prevSnackbarIndex = currentSnackbarIndex;
            currentSnackbarIndex = (currentSnackbarIndex + 1) % snackbars.length;
          }
          counter++;
        }, 1000);
    })(snackbars);

    const countdown = document.getElementById("snackbar");
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 2);
    (function(deadline, countdownElement) {
      setInterval(
        function() {
          const diff = deadline.getTime() - new Date().getTime();
          //時
          const hour = Math.floor(diff / (1000 * 60 * 60));
          //分
          const minute =  Math.floor((diff - hour*60*60*1000) / (1000 * 60));
          //秒
          const second =  Math.floor((diff - hour*60*60*1000 - minute*60*1000) / 1000);
          countdownElement.innerHTML = "残り " + Math.floor(hour) + "時間" + Math.floor(minute) + "分" + Math.floor(second) + "秒";

        }, 1000);
    })(deadline, countdown);
  
  };