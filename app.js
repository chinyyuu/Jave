<!--    &lt;!&ndash;在網頁跳出小視窗提醒，1.更新版 2.月份，是從0開始計算，所以要+1&ndash;&gt;-->
<!--            alert("請至網頁更新最新版");-->

<!--            const currentDate  =new Date();-->
<!--            const currentMonth = currentDate.getMonth()+1;-->
<!--            alert(`這個月是 ${currentMonth} 月`)-->

<!--            let date=prompt("請輸入密碼","12345678");-->


<!--    &lt;!&ndash;彈出視窗  現在時間是:14點49分51秒&ndash;&gt;-->

<!--            const currentTime  =new Date();-->
<!--            const currentHours = currentTime.getHours();-->
<!--            const currentMinutes = currentTime.getMinutes();-->
<!--            const currentSeconds = currentTime.getSeconds();-->
<!--            alert(`現在時間是 ${currentHours} 點 ${currentMinutes}分 ${currentSeconds}秒`);-->
<!--    &lt;!&ndash;function+自定義名稱(){程式碼}放在script+ body放連結<a href="javascript:time()">顯示時間&ndash;&gt;-->
<!-- function time(){-->
<!--                const currentTime  =new Date();-->
<!--                const currentHours = currentTime.getHours();-->
<!--                const currentMinutes = currentTime.getMinutes();-->
<!--                const currentSeconds = currentTime.getSeconds();-->
<!--                alert(`現在時間是 ${currentHours} 點 ${currentMinutes}分 ${currentSeconds}秒`);-->
<!--    }-->


// <!--switch case結果是已知且固定的-->
//     let day = prompt("請輸入星期幾");
//         switch (day) {
//             case "星期一":
//                 alert("上學");
//                 break;
//             case "星期二":
//                 alert("上班");
//                 break;
//             default:
//                 alert("錯誤");
//                 break;
//         }
//         <!-- if可自定義不固定-->
//         let nn = prompt("請輸入分數");
//         if (nn >= 90) {
//             alert("等級為A");
//         } else if (nn >= 80) {
//             alert("等級為B");
//         }

<!--顯示上下午時間-->
function time() {
    const currentTime = new Date();
    let currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    if (currentHours >= 12)
    {   currentHours-=12;
        alert(`現在時間是下午 ${currentHours} 點 ${currentMinutes}分 ${currentSeconds}秒`);
    } else {
        alert(`現在時間是上午 ${currentHours} 點 ${currentMinutes}分 ${currentSeconds}秒`);
    }
}
time();
