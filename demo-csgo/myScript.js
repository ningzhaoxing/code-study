var btn1 = document.getElementById('con-btn1');
var btn2 = document.getElementById('con-btn2');
var content1 = document.getElementById('right-con1');
var content2 = document.getElementById('right-con2');

// 初始状态，显示第一个内容盒子，隐藏第二个内容盒子
content1.style.display = 'block';
content2.style.display = 'none';

// 初始状态，第一个按钮字体颜色为黑色，第二个按钮字体颜色为白色
btn1.style.color = 'black';
btn2.style.color = 'white';

// 点击第一个按钮的事件处理函数
btn1.addEventListener('click', function () {
    // 显示第一个内容盒子，隐藏第二个内容盒子
    content1.style.display = 'block';
    content2.style.display = 'none';

    // 设置按钮样式：点击的按钮字体颜色为黑色，未点击的按钮字体颜色为白色
    btn1.style.color = 'black';
    btn2.style.color = 'white';
});

// 点击第二个按钮的事件处理函数
btn2.addEventListener('click', function () {
    // 隐藏第一个内容盒子，显示第二个内容盒子
    content1.style.display = 'none';
    content2.style.display = 'block';

    // 设置按钮样式：点击的按钮字体颜色为黑色，未点击的按钮字体颜色为白色
    btn1.style.color = 'white';
    btn2.style.color = 'black';
});


