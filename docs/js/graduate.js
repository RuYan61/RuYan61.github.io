// graduate.html 毕业倒计时 JS Begin
function calculate() {
    var now = new Date();    // 获取当前时间
    var sports = new Date(2025, 6, 30);    // 设置目标日期（2025年6月30日）
    var leftSeconds = (sports.getTime() - now.getTime()) / 1000;    // 计算剩余秒数
    var daysLeft = Math.floor(leftSeconds / 3600 / 24);    // 计算剩余天数
    var hoursLeft = Math.floor(leftSeconds / 60 / 60 % 24);    // 计算剩余小时数
    var minutesLeft = Math.floor(leftSeconds / 60 % 60);    // 计算剩余分钟数
    var secondsLeft = Math.floor(leftSeconds % 60);    // 计算剩余秒数
    document.querySelector("#day").innerHTML = daysLeft;    // 更新显示剩余天数的元素
    document.querySelector("#hour").innerHTML = hoursLeft;    // 更新显示剩余小时数的元素
    document.querySelector("#min").innerHTML = minutesLeft;    // 更新显示剩余分钟数的元素
    document.querySelector("#sec").innerHTML = secondsLeft;    // 更新显示剩余秒数的元素
}

calculate();    // 调用一次 calculate() 来立即显示时间

setInterval(calculate, 1000);    // 每秒钟调用一次 calculate() 来更新时间
// graduate.html 毕业倒计时 JS End
