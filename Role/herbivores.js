var mor_her={
	weight:10,//体重
	storage:200,//储能
	Metabolism:2,//能量消耗
	speed:5,//移动速度
	growth:[10,50],//生长速度
	life:18,
	breeding_number:1,//繁殖能力
	breeding_time:19,//繁殖季节
	attck:10,//攻击
	defense:1,//防御
	vision:500//视野
}
class herbivores{
	constructor(x,y,dna){
		this.type=1
		this.x=x;
		this.y=y;
		this.doing=''
    	this.power=100;
		this.allget_power=0
		//this.eats=0;
		this.livespan=0;
		this.lifetick=tk
		this.dna=dna;
		this.goinglen=0
		//herbivores_dna[0体重,1储能,2胃,3能量转化,4能量消耗,5移动速度,6生长速度,7繁殖能力,8繁殖间隔,9繁殖季节,10攻击,11防御,12视野]
		//herbivores_dna[0体重,1储能,0.5,3能量消耗,4移动速度,5生长速度,6繁殖能力,7繁殖季节,8攻击,9防御,10视野]
		
    }
	sire(){
		if(herbivoress.length>mostcansee){
			console.log("达到最高显示上限，终止fz")
			return -1
		}
		for(let i=0;i < this.dna.breeding_number;++i){
			let fa=0
			if(fa==0){
				let ne=new herbivores(this.x,this.y,Gene_mutation(this.type,this.dna))
				herbivoress.push(ne);
				//console.log("动物繁殖：",ne)
			}
			//else if(fa==1)
		}
	}
	tick(){
		this.power-=this.dna.Metabolism
		if(Math.floor(this.allget_power/this.dna.growth[1])>=this.livespan){
			this.livespan++
		}
		if(this.power>=200 && tk%oneyear-this.dna.breeding_time+2<4){
			this.sire()
			this.power-=180
		}
		//sire
		if(this.power<0){this.kill()}
		if(this.livespan>this.dna.life){this.kill()}
	}
	find_food(){
		let zui,len
		let min=Infinity
		for(let mb of plants){
			len=Math.sqrt(Math.pow(mb.x - this.x, 2) + Math.pow(mb.y - this.y, 2))+(Math.random()*40-20)
			//console.log(len,mb)
			if(len<min && len<this.dna.vision){
				min=len
				zui=mb
			}
		}
		if(zui){return zui}
		else {return 0}
	}
	getwork(){
		if(this.doing){
			this.dosome()
		}
		else if(this.power/this.dna.storage<1){//捕食
			this.doing=['attck',this.find_food()]
		}
		else if(this.power/this.dna.storage>0.5){
			this.doing=['move',generateRandomCoordinatesAroundOrigin(this.x,this.y,50)]
		}
	}
	dosome(){
		
			if(this.doing[0]=='move'){//[10,10]
				this.move(this.doing[1])
				let len=Math.sqrt(Math.pow(this.doing[1][0] - this.x, 2) + Math.pow(this.doing[1][1] - this.y, 2))
				this.goinglen=len;
				if(len<5){this.doing=0}
			}
			else if(this.doing[0]=='attck'){
				if(this.doing[1]){
					let mb=this.doing[1]
					let len=Math.sqrt(Math.pow(mb.x - this.x, 2) + Math.pow(mb.y - this.y, 2))
					this.goinglen=len;
					if(len<20){
						this.power+=mb.beatt(this.dna.attck)*0.5
						this.allget_power+=mb.beatt(this.dna.attck)*0.5
						this.doing=0
					}
					else{
						//console.log(len);
						this.move([mb.x,mb.y])
					}
				}
				else{
					//console.log('获取目标失败-100',this.doing)
					if(this.power/this.dna.storage>0.3){
						this.doing=['move',generateRandomCoordinatesAroundOrigin(this.x,this.y,50)]
					}
					else{this.doing=0}
				}
			}
		
	}
	move(pos){
		let dx=this.x-pos[0]
		let dy=this.y-pos[1]
		let len=Math.sqrt(dx * dx + dy * dy);
		dx /= len;
    	dy /= len;
		this.x = this.x - dx * this.dna.speed
		this.y = this.y - dy * this.dna.speed
		this.power-=1//!!!!
	}
	kill(){
		let index = herbivoress.findIndex(obj => obj==this);
		// 如果找到了对象，删除它
		if (index !== -1) {herbivoress.splice(index, 1);}
	}
}