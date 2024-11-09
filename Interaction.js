//交互类
function creat_new_plant(){
	canv.onclick = function getCoordinates(event) {
        // 获取鼠标点击的坐标
        let x = event.clientX-sex;
        let y = event.clientY-sey;
		let mor=structuredClone(mor_plan)
		let ne=new plant(x,y,mor)
		plants.push(ne)
		console.log('生成植物',ne)
        canv.onclick = null;
    };
}
function creat_new_herbi(){
	canv.onclick = function getCoordinates(event) {
        // 获取鼠标点击的坐标
        let x = event.clientX-sex;
        let y = event.clientY-sey;
		let mor=structuredClone(mor_her)
		let ne=new herbivores(x,y,mor)
		herbivoress.push(ne)
		console.log('生成动物',ne)
        canv.onclick = null;
    };
}

canv.addEventListener('click', function(event) {
	let details_display
	let fw=10
	let dx=event.clientX-sex
	let dy=event.clientY-sey
	for(let pl of herbivoress){
		//console.log(pl.x,dx,pl.x-dx)
		if(Math.abs(pl.x-dx)<fw){
			if(Math.abs(pl.y-dy)<fw){
				details_display=pl
				break}
		}
	}
	if(!details_display){
		for(let pl of plants){
			if(Math.abs(pl.x-dx)<fw){
			if(Math.abs(pl.y-dy)<fw){
				details_display=pl
				break}
		}
	}}
	Details_display=details_display
});
//canv.addEventListener('contextmenu', function(event) {Details_display=0})

// 定义一个变量来跟踪鼠标是否按下
var isMouseDown = false;

// 定义一个函数，用于在鼠标按下时执行
function doAction() {
  sex=mosx+moux
  sey=mosy+mouy
	//Details_display=1
  //console.log('鼠标按下，正在执行操作...');
}

// 为文档添加鼠标按下事件监听器
document.addEventListener('mousedown', function(e) {isMouseDown = true;
	mosx=sex-moux;mosy=sey-mouy;doAction(); // 鼠标按下时执行一次操作
});
// 为文档添加鼠标松开事件监听器
document.addEventListener('mouseup', function() {isMouseDown = false;});
// 为文档添加鼠标移动事件监听器
document.addEventListener('mousemove', function() {if (isMouseDown) {doAction(); // 如果鼠标按下，则执行操作
}});
document.addEventListener('touchstart', function(event) {
isMouseDown = true;
let eve=event.touches[0]
  moux = eve.clientX;
  mouy = eve.clientY;
	mosx=sex-moux;mosy=sey-mouy;
	//alert(mosx)
	doAction(); // 触碰按下时执行一次操作
});
// 为文档添加触碰松开事件监听器
document.addEventListener('touchend', function() {isMouseDown = false;});
// 为文档添加触碰移动事件监听器
document.addEventListener('touchmove', function() {if (isMouseDown) {doAction(); event.preventDefault();// 如果触碰按下，则执行操作
}});

document.addEventListener('DOMContentLoaded', function() {//显示统计信息
	var triggerBox = document.getElementById('trigger-box');
	var popup = document.getElementById('popup');
	
	triggerBox.addEventListener('mouseover', function() {
	  popup.classList.remove('hidden');
	});
  
	triggerBox.addEventListener('mouseout', function() {
	  popup.classList.add('hidden');
	});
  
	// 触屏设备
	triggerBox.addEventListener('touchstart', function(e) {
	  e.preventDefault(); // 防止触发其他默认行为
	  popup.classList.toggle('hidden');
	});
  });
  document.addEventListener('DOMContentLoaded', function() {//滑块倍速
	var slider = document.getElementById('slider');
	var output = document.getElementById('output');
	var resetButton = document.getElementById('reset');
	
  
	// 更新滑块输出
	function updateOutput() {
	  output.textContent = slider.value + '倍速';
	  speed = 500 / parseFloat(slider.value)
	}
  
	// 初始化滑块输出
	updateOutput();
  
	// 监听滑块变化
	slider.addEventListener('input', updateOutput);
  
	// 监听重置按钮点击
	resetButton.addEventListener('click', function() {
	  slider.value = 1; // 设置滑块值为1
	  updateOutput(); // 更新输出
	});
  });