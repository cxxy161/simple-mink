var mor_plan={
    rate:5,//光合速率
    life:10,//寿命
    usepw:50,//生长能量
    brnum:2,//繁殖数量
   brtime:5,//繁殖期
   defense:1//防御
   }
   class plant{
       constructor(x,y,dna){
           this.type=0
           this.x=x;
           this.y=y;
           this.power=0;
           this.livespan=1;
           this.lifetick=tk
           this.bodytype=5
           this.dna=dna;
       }
       tick(){
           //get power
           //console.log(this)
           let poup=this.dna.rate
           //for(let i=0;i < plantlen;++i){
           this.power+=poup
           if(this.power<=0){this.kill()}
           if(Math.floor(this.power/this.dna.usepw)>=this.livespan){
               this.livespan++
           }
           if(this.livespan>1 && tk%oneyear-this.dna.brtime<1){
               //this.power-=this.dna.usepw/1.5
               this.sire()
           }
           
           //!!,
           if(this.livespan>this.dna.life){this.kill()}
           this.bodytype=this.livespan*0.1+4
           if(this.bodytype>12){this.bodytype=12}
       }
       sire(){
           if(plantlen>mostcansee){
               //console.log("达到最高显示上限，终止生成")
               return -1
           }
           for(let i=0;i < this.dna.brnum;++i){
               let fa=0
               if(fa==0){
                   let ls
                   if(plantlen>10000){
                    ls=smplecuxy(this.x,this.y,120)
                    }else{
                   ls=generateRandomCoordinatesAroundOrigin(this.x,this.y,120)
                   }
                   let lx = ls[0], ly = ls[1]
                   let gxh=Gene_mutation(this.type,this.dna)
                   let ne=new plant(lx,ly,gxh)
                   plants.push(ne);
                   //console.log("植物繁殖：",ne)
               }
               //else if(fa==1)
           }
           
       }
       beatt(att){
           let ls=Math.max(att-this.dna.defense,0)
           this.power-=ls
           if(this.power<=0){this.kill()}
           return ls
       }
       kill(){
           let index = plants.findIndex(obj => obj==this);
           // 如果找到了对象，删除它
           if (index !== -1) {plants.splice(index, 1);}
       }
       
   }