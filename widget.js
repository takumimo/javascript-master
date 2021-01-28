'use strict';

function clickBtn1(){
    let flag = 0;
    const comment = document.getElementById('comment').value;
    const sender_name = document.form1.textarea2.value;
    const sender_mail = document.form1.textarea3.value;
    const test_mail = document.form1.textarea3.value;
    const format = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if(!comment || comment.length == 0) {
        document.getElementById('comment-error-message1').innerHTML = "コメントを入力してください。";
        return;
    }
    if(!sender_name || sender_name.length == 0) {
        document.getElementById('comment-error-message2').innerHTML = "名前を入力してください。";
        return;
    }
    if(!sender_mail || sender_mail.length == 0) {
        document.getElementById('comment-error-message3').innerHTML = "メールアドレスを入力してください。";
        return;
    }

    if (!format.test(test_mail)) {
        document.getElementById('comment-error-message4').innerHTML = "英数字、記号、@を使用してください";
        return;
      }
    document.getElementById("span1").textContent = `${sender_name} より:\n${sender_name}様のコメントは承認待ちです。これはプレビューで、コメントは承認後に表示されます。\n\n${comment}`;
};

let x = document.getElementById("snackbar");
let y = document.getElementById("snackbar2");
let link = document.getElementById("link");
link.href = "https://www.yahoo.co.jp";

window.onload = function count() {
    (function () {
        const now = new Date();
        let random = Math.floor(Math.random() * 11);
        const Hour = now.getHours();
        const Min = now.getMinutes();
        document.getElementById("nowTime").innerHTML = `${Hour}時${Min}分現在あなたの他に${random}人が見ています`;
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
          countdownElement.innerHTML = "キャンペーン終了まで " + Math.floor(hour) + "時間" + Math.floor(minute) + "分" + Math.floor(second) + "秒";
        }, 1000);
    })(deadline, countdown);
};

  