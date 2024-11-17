//
function o_tick(){
	tk++
	plantlen=forlen(plants)
	for(let plan1 of forall(plants)){
		plan1[i].tick()
	}
	for(let i=0;i < herbivoress.length;++i){
		herbivoress[i].tick()
	}
	//console.log("当前tick：",tk)
	statisticstext='动物数量'+herbivoress.length+'\n植物数量'+plantlen//刷新统计信息
	popup.textContent = statisticstext; // 更新显示的内容
}
function o_animal(){
	for(let i=0;i < herbivoress.length;++i){
		herbivoress[i].getwork()
	}
}
//setInterval(function(){o_tick()},speed);
//setInterval(function(){o_animal()},speed/5);
function maincurtick(){o_tick();setTimeout(maincurtick,speed)}
function maincuroanmal(){o_animal();setTimeout(maincuroanmal,speed/5)}

setInterval(function () { Rendering() }, 50);
maincurtick()
maincuroanmal()