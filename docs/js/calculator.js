// calculator.html JS Begin
var num1, num2, result;    // 声明变量 num1, num2, result

function cal(op) {
    num1 = parseFloat(document.getElementById("num1").value);    // 获取输入框 num1 的值，并将其解析为浮点数
    num2 = parseFloat(document.getElementById("num2").value);    // 获取输入框 num2 的值，并将其解析为浮点数
    result = document.getElementById("result");    // 获取结果显示框的元素

    if (isNaN(num1) || isNaN(num2)) {
        window.alert("请输入数字");    // 如果 num1 或 num2 不是有效数字，弹出警告框提示用户输入数字
        document.getElementById("num1").value = "";    // 清空 num1 输入框的值
        document.getElementById("num2").value = "";    // 清空 num2 输入框的值
        return false;    // 返回 false，阻止表单提交
    }

    if (op !== "/") {
        result.value = eval(num1 + op + num2);    // 如果操作符不是除法，通过 eval 函数计算表达式的值，并将结果赋值给结果显示框
    } else {
        if (num2 === 0) {
            window.alert("除数不能为0");    // 如果除数为0，弹出警告框提示除数不能为0
            return "";    // 返回空字符串
        } else {
            result.value = eval(num1 + op + num2);    // 除法运算，通过 eval 函数计算表达式的值，并将结果赋值给结果显示框
        }
    }
}
// calculator.html JS End
