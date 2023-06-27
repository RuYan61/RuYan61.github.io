// homeButton JS Begin
const homeButton = document.getElementById('homeButton');    // 获取具有id为'homeButton'的元素

homeButton.addEventListener('mouseover', function() {    // 添加鼠标悬停事件监听器
    homeButton.style.transform = 'scale(1.2)';    // 当鼠标悬停在homeButton上时，将其缩放为1.2倍
});

homeButton.addEventListener('mouseout', function() {    // 添加鼠标离开事件监听器
    homeButton.style.transform = 'scale(1)';    // 当鼠标离开homeButton时，将其缩放还原为原始大小
});
// homeButton JS End

// top-nav a JS Begin
const aTags = document.querySelectorAll('.top-nav a');    // 获取所有具有类名为'top-nav'的<a>标签元素

aTags.forEach(function(aTag) {    // 遍历每个<a>标签元素
    aTag.addEventListener('mouseover', function() {    // 添加鼠标悬停事件监听器
        aTag.style.transform = 'scale(1.2)';    // 当鼠标悬停在<a>标签上时，将其缩放为1.2倍
    });

    aTag.addEventListener('mouseout', function() {    // 添加鼠标离开事件监听器
        aTag.style.transform = 'scale(1)';    // 当鼠标离开<a>标签时，将其缩放还原为原始大小
    });
});

// top-nav a JS End

// BaiDu search JS Begin
function handleKeyPress(event) {    //百度搜索函数
    if (event.keyCode === 13) {    // 检查是否按下了回车键 (keyCode为13)
        event.preventDefault();    // 阻止默认的回车键行为
        var searchQuery = document.getElementById('search').value;    // 获取搜索输入框的值
        var url = 'https://www.baidu.com/s?wd=' + encodeURIComponent(searchQuery);    // 构建搜索的URL，对搜索词进行URL编码
        window.open(url, '_blank');    // 在新标签页中打开搜索结果页面
    }
}
// BaiDu Search JS End
