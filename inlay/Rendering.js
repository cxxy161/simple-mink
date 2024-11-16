function Rendering(){
	ctx.clearRect(0,0,canv.width,canv.height);
	for(let pl of forrender(plants)){
				ctx.fillStyle='rgb(209,255,159)';
				ctx.beginPath();
				let pyl=[0,0]//scale_ji(pl.x+sex,pl.y+sey)
				ctx.arc(pl.x+sex+pyl[0],pl.y+sey+pyl[1], pl.bodytype*zoomscale, 0, Math.PI * 2);
				ctx.fill()
				//console.log(pyl,pl.x,pl)
			
		
	}
	for(let pl of herbivoress){
		//console.log(pl.x>-sex-10 && pl.x<canv.width-sex+10)
		if(pl.x>-sex-10 && pl.x<canv.width-sex+10){
			if(pl.y>-sey-10 && pl.y<canv.height-sey+10){
				//pl=herbivoress[i]
				ctx.fillStyle='#c9a100'
				ctx.beginPath();
				ctx.arc(pl.x+sex,pl.y+sey, 5*zoomscale, 0, Math.PI * 2);
				ctx.fill()
				//console.log(pl.y,pl.x,pl)
			}
		}
	}
	if(Details_display){
		let cx=canv.width
		let cy=canv.height
		ctx.fillStyle='#e0e0e0'
		ctx.fillRect(cx-250,50,200,300)
		ctx.fillStyle='black';
		ctx.font = "20px Sans-serif";	
		mb=Details_display
		ctx.fillText('当前能量：'+toPrecision(mb.power),cx-240,70);
		ctx.fillText('当前生命周期：'+mb.livespan+';'+(tk-mb.lifetick),cx-240,100);
		if(mb.type==1){
			ctx.fillText('正在：'+mb.doing[0],cx-240,130);
			ctx.fillText('剩余距离：'+Math.ceil(mb.goinglen),cx-240,160);
			
			ctx.setLineDash([5,5]);
			ctx.beginPath();
			let lx,ly;
			if(mb.doing[0]=='move'){
				lx=mb.doing[1][0]
				ly=mb.doing[1][1]
				ctx.strokeStyle='#8fe68f'
			}
			if(mb.doing[0]=='attck'){
				lx=mb.doing[1].x
				ly=mb.doing[1].y
				ctx.strokeStyle='#e68f8f'
			}
			ctx.lineWidth = 2;
			ctx.moveTo(mb.x+sex,mb.y+sey);
			ctx.lineTo(lx+sex,ly+sey);
			ctx.stroke();
		}
		let ggy=190
		for(let dnak in mb.dna){
			ctx.fillText(`${dnak},：${mb.dna[dnak]}`,cx-240,ggy);
			ggy+=30
		}
		

	}
	ctx.fillStyle='black';
	ctx.font = "20px Sans-serif";
	let fps=1000/(new Date().getTime()-psst)
	fps=Math.round(fps * 10) / 10
	psst=new Date().getTime()
	tis="x:"+Math.round(sex)+'  y:'+Math.round(sey)+'  zoom:'+zoomscale+'  tick:'+tk+'   fps:'+fps
	ctx.fillText(tis,10,20);
}