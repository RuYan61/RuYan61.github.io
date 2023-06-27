// background.html Begin
// 获取相关标签变量 Begin
let img_box = document.querySelector('.img_box');
let imgs = document.querySelectorAll('img');
let sel_box = document.querySelector('.sel_box')
let lis = sel_box.querySelectorAll('li');
let left_btn = document.querySelector('.left_btn');
let right_btn = document.querySelector('.right_btn');
// 记录第几张图片
let index = 0;  
let timer = null;  // 定时器

// 设置图片容器大小
// imgContainerW：img_box本身宽度，为400
let imgContainerW = img_box.offsetWidth
img_box.style.width = imgContainerW * imgs.length + 'px'
// 设置容器位置
img_box.style.left = 0 + 'px';

// 设置第一个小图片作为当前按钮
lis[0].className = 'cur'
// 获取相关标签变量 End

// 获取相关标签变量 Begin
function swapImg() {
    // 修改img_box的定位，往左偏移 index * imgContainerW
    img_box.style.left = -index * imgContainerW + 'px';
    // 排他算法
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = '';
    }
    // 修改小图标的样式
    lis[index].className = 'cur'
}
// 获取相关标签变量 End

// 轮播切换规律 Begin
function swapFormat() {
    index++;  // 进入下一张图片
    // 如果是在最后一张图片
    if (index >= 4) {
        // 此处是为了防止频繁点击按钮，index++，导致index超过4，变成5、6、7...
        // 当index>=4，我们强行让其等于4,类似防抖
        index = 4;  
        img_box.style.transition = 'all, linear, 1s';
        img_box.style.left = -index * imgContainerW + 'px';
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        // 修改小图标的样式
        lis[0].className = 'cur'
    
        // 此处就是我们为实现无缝轮播，做的手脚 
        // 通过延时定时器，当图片过渡完，立刻马上切换到第一张图片
        setTimeout(function() {
            index = 0;  // 第一张图片
            img_box.style.transition = '';  // 无过度
            swapImg();
        }, 1500)
    
        // 如果是其它图片，正常过渡切换
    } else {
        img_box.style.transition = 'all, linear, 1.5s';
        swapImg();
    }
}
// 轮播切换规律 End

// 添加间隔定时器 Begin
// 添加定时器，调用函数
timer = setInterval(swapFormat, 3000)
// 添加间隔定时器 End

// 点击右箭头，图片移动方式与自动播放一样
right_btn.addEventListener('click', function() {
    swapFormat();
})

// 点击左箭头
left_btn.addEventListener('click', function() {
    index--;
    // 如果要切换到第四章
    if (index < 0) {
        index = -1
        img_box.style.transition = 'all, linear, 1.5s';
        img_box.style.left = -index * imgContainerW + 'px';
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        // 修改小图标的样式
        lis[3].className = 'cur'
    
        // "出老千",迅速切换
        setTimeout(function() {
            index = 3
            img_box.style.transition = '';
            swapImg();
        }, 1000)
    
    } else {
        img_box.style.transition = 'all, linear, 1.5s';
        swapImg();
    }
})

// 清除和开启定时器 Begin
// 当鼠标在图片上、左箭头、右箭头时清除定时器，即图片不轮播
img_box.addEventListener('mouseover', function() {
    clearInterval(timer)
})

right_btn.addEventListener('mouseover', function() {
    clearInterval(timer)
})

left_btn.addEventListener('mouseover', function() {
    clearInterval(timer)
})

// 当鼠标离开图片、左箭头、右箭头时开启定时器，即图片继续轮播
img_box.addEventListener('mouseout', function() {
    timer = setInterval(swapFormat, 3000)
})

left_btn.addEventListener('mouseout', function() {
    timer = setInterval(swapFormat, 3000)
})

right_btn.addEventListener('mouseout', function() {
    timer = setInterval(swapFormat, 3000)
})
// 清除和开启定时器 End
// background.html End
