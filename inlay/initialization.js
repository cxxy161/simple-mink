//初始化类
var tis, Details_display, mosx, mosy
var canv = document.getElementById('ca');
var ctx = canv.getContext("2d");
var slider = document.getElementById("mySlider");
var output = document.getElementById("sliderValue");

function resizeCanvas() {
  // 设置 canvas 的宽度和高度与浏览器窗口相同
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;
}
resizeCanvas()
window.addEventListener('resize', resizeCanvas);
setInterval(function () { Rendering() }, 50);

/*slider.oninput = function () {
  output.innerHTML = '播放倍速:' + this.value;
  speed = 500 / parseFloat(this.value)
  if (parseFloat(this.value) == 0) { speed = 100000 }
  console.log(speed, this.value)
}*/
document.addEventListener('touchmove', function (event) {
  event = event.touches[0]
  moux = event.clientX;
  mouy = event.clientY;
});
document.addEventListener('mousemove', function (event) {
  moux = event.clientX;
  mouy = event.clientY;
});

var moux = 0
var mouy = 0
var psst = 0
var sex = 0
var sey = 0
var sight = 5
var tk = 0
var speed = 500;
var plants = []
var plantlen = 0
var herbivoress = []
var oneyear = 10
var mostcansee = 10000//最多生成数量
var statisticstext = 15

// 初始化缩放级别
var zoomscale = 1.0
// 缩放系数，可以根据需要调整
var zoomIntensity = 0.1;
//var zoompy=0//py偏移量