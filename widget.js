'use strict';

// const commentShow = getElementById("comment-show");
// const submit = getElementById("submit");

// submit.addEventListener('click', () => {
//     commentShow.textContent = 'ああ';
// })

// button.addEventListener("click", function() {
//     document.getElementById("comment-show").textContent = "aa";
// });

function clickBtn1(){
    let flag = 0;
    const ta1 = document.form1.textarea1.value;
    const ta2 = document.form2.textarea2.value;
    const name = document.getElementById('comment');

    // if(name.innerHTML.length < 1) {
        // document.getElementById('comment-error-message').innerHTML = "入力必須項目です"
    // } else {
        document.getElementById("span1").textContent = `${ta2} より:\n${ta2}様のコメントは承認待ちです。これはプレビューで、コメントは承認後に表示されます。\n\n${ta1}`;
    // };
    
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

// const date1 = new Date();
// const date2 = date1.getHours() + "時" + date1.getMinutes() + "分" + 
// console.log(date2);
const now = new Date();
function nowTime() {
    const target = document.getElementById("nowTime");
    const random = Math.floor(Math.random() * 11);
    // let speed = 500;
    // const flag = 0;
    const Hour = now.getHours();
    const Min = now.getMinutes();
  
    target.innerHTML = `${Hour}時${Min}分現在あなたの他に${random}人が見ています`;
  }

const target = document.getElementById('nowTime');

target.addEventListener('mouseover', () => {
  
//     const totalTime = 7200000;
// const oldTime = Date.now();

// const timeId = setInterval(() => {
//   const currentTime = Date.now();


//   const diff = currentTime - oldTime;

//   const diffSec = totalTime - diff;


//   const remainSec = Math.ceil(diffSec / 1000);

//   let text = `${remainSec}秒`;


//   if (diffSec <= 0) {
//     clearInterval(timeId);

//     text = "終了";
//   }

//   document.querySelector('#nowTime').innerHTML = `キャンペーン終了まで${text}`;
// })

// setInterval( function(){
//     const now = new Date();
//     const next = new Date( now.getFullYear()+1, 0, 1 );
//     const remain = next.getTime() - now.getTime();
//     const D = Math.floor( remain / ( 1000*60*60*24 ) );
//     const H = Math.floor( remain / ( 1000*60*60 ) ) % 24;
//     const M = Math.floor( remain / ( 1000*60 ) ) % 60;
//     const S = Math.floor( remain / 1000 ) % 60;
//     const MS = ( "00"+( remain % 1000 ) ).slice( -3 );
//     document.getElementById( "nowTime" ).textContent
//     = "残り "+D+" 日 "+H+" 時間 "+M+" 分 "+S+"."+MS+" 秒 です";
//     }, 1 );
// setInterval();

// const settime = 259200; //72時間

// const h = 0;
// const m = 0;
// const s = 0;



// setInterval( function(){  
//     const timer = document.getElementById('nowTime');
//     settime--;
//     h = Math.floor(settime / 3600);
//     m = Math.floor(settime / 60) % 60;
//     s = (settime % 60) % 60;
//     timer.innerHTML = '残り' + h + '時間' + m + '分' + s + '秒';
//  }, 1 );

// function CountdownTimer(elm, tl, mes) {
//     this.initialize.apply(this, arguments);
//   }
//   CountdownTimer.prototype = {
//     initialize: function (elm, tl, mes) {
//       this.elem = document.getElementById(elm);
//       this.tl = tl;
//       this.mes = mes;
//     },
//     countDown: function () {
//       var timer = '';
//       var today = new Date();
//       var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
//       var hour = Math.floor((day * 24) + ((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
//       var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
//       var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
//       var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;
//       var me = this;
  
//       if ((this.tl - today) > 0) {
//         if (hour) timer += '<span class="cdt_num">' + hour + '</span><small>時間</small>';
//         timer += '<span class="cdt_num">' + this.addZero(min) + '</span><small>分</small><span class="cdt_num">' + this.addZero(sec) + '</span><small>秒</small><span class="cdt_num">' + this.addZero(milli) + '</span>';
//         this.elem.innerHTML = timer;
//         tid = setTimeout(function () {
//           me.countDown();
//         }, 10);
//       } else {
//         this.elem.innerHTML = this.mes;
//         return;
//       }
//     },
//     addZero: function (num) {
//       return ('0' + num).slice(-2);
//     }
//   }

//   CountdownTimer();

target.innerHTML = "こんにちは"
setTimeout(function() {
    target.innerHTML = "お得に購入できる特設ページはこちら"
    // target.style.backgroundColor = white;

//     (function (){
//     var n=0;
//     var speed=10;         //★原本100。流れる速度。数値が小さいほど速い。
// var delay=2000;       //★文字列ごとのスライドの休止時間。1000=1秒

// var tx=new Array();   //★文字列の指定。増減可能。１行目だけ全角スペース指定。文字列にタグも使用可能
// tx[n++]=['　'];/*★★←１行目だけこのままで。全角スペース指定*/
// tx[n++]=['縦にスクロールする、ニュースティッカーです。'];
// tx[n++]=['表示ボックスの下からスライドインします。'];
// tx[n++]=['前のテキストが上に スライドアウトしながら、'];
// tx[n++]=['次のテキストが下から スライドインしてきます。'];
// tx[n++]=['<span style="color:red;">動く文字 ティッカー 電光掲示板。色も変更できます。</span>'];
// tx[n++]=['<a href="http://himajin.moo.jp/java/imgch/frame3.html" target="_new">リンク</a>も貼れます。原本はリンク先のJavaScriptです。'];

// //指定はここまで-----------------------------------------------------------
// var wh=Tbx.clientHeight;//ティッカーのborderを含まない縦幅
// tx=tx.concat(tx);//配列を２倍連結。2倍しないと最後が空白になる
// var len=tx.length;
// var setwh=(wh*len)/2;
// var flag_c=1,ps=0;
// var sss="<div id='Tmass' style='position:absolute;'>";/*方向転換ができなくなるのでtopやleftの0指定はしない*/
// for (var i=0; i<len; ++i) {
// sss+="<div>"+tx[i]+"</div>";
// }
// sss+="</div>";
// document.getElementById("Tbx").innerHTML=sss;
// Tbx.onmouseover=function (){flag_c=2;}
// Tbx.onmouseout=function (){flag_c=1;}
// function ticKer(){
// if(!flag_c){ if(ps >= 0){ps=-setwh;} ps+=1;}//小休止時に縦幅で割り切るために2を1へ変更
// else if(flag_c===1){ if(ps <= -setwh){ps=0;} ps-=1;}//小休止時に縦幅で割り切るために2を1へ変更
// Tmass.style.top=ps+"px";//leftをtopへ
// var tm1=setTimeout(ticKer,speed);
// if(ps%wh===0){clearTimeout(tm1); setTimeout(ticKer,delay);}
// }
// ticKer();
// }());//即時関数終了
// --></script>


}, 6000);


});