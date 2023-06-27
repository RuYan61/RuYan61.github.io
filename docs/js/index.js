// index.html typewriter 打字机 JS Begin
const texts = ["JavaScript Assignment Blog"];    // 定义要循环显示的文本数组
const delay = 100;    // 定义打字间隔的延时（以毫秒为单位）
const typewriterElement = document.getElementById("typewriter");    // 获取要显示文本的 HTML 元素

let textIndex = 0;    // 初始化文本和字符的索引
let charIndex = 0;    // 初始化文本和字符的索引

function type() {    // 打字函数
    if (charIndex < texts[textIndex].length) {    // 检查当前文本是否还有字符要打印
        typewriterElement.textContent += texts[textIndex][charIndex];    // 将下一个字符添加到显示元素中
        charIndex++;
        setTimeout(type, delay);    // 等待一段时间后继续打字
    } else {
        setTimeout(erase, 1000);    // 打印完毕后停顿1秒后开始擦除
    }
}

function erase() {    // 擦除函数
    if (typewriterElement.textContent.length > 0) {    // 检查显示元素中是否还有字符需要擦除
        typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);    // 从显示元素中移除最后一个字符
        setTimeout(erase, delay);    // 等待一段时间后继续擦除
    } else {    // 切换到下一个文本
        textIndex = (textIndex + 1) % texts.length;    // 循环到下一个文本
        charIndex = 0;
        setTimeout(type, delay);    // 等待一段时间后开始打字
    }
}

type();    // 启动打字效果
// index.html typewriter 打字机 JS End
