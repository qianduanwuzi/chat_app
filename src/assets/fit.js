/* 自适应处理 */
// 缩放比例
var scale = 1 / window.devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width,initial-scale=' +
    scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
// 字体自适应html（rem）
//--基准以320像素(iphone5)计算 
document.documentElement.style.fontSize = document.documentElement.clientWidth / 32 + 'px';