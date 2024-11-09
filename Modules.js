function smplecuxy(x,y,s){
	let mx = x+Math.random()*s-s/2
	let my = y+Math.random()*s-s/2
	return [mx,my]
}
function generateRandomCoordinatesAroundOrigin(originX, originY, stddev) {
  // 使用正态分布生成随机坐标
  // mean是均值，即原点坐标
  // stddev是标准差，决定了分布的宽度
  let mean = 0;
// 如果没有提供标准差，则使用默认值1

  // 生成x和y坐标
  let x = mean + stddev * boxMullerTransform();
  let y = mean + stddev * boxMullerTransform();

  // 应用原点坐标
  x += Math.round(originX);
  y += Math.round(originY);
//console.log(x,y)
  return  [x,y] ;
}

// Box-Muller转换函数
function boxMullerTransform() {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); // 避免除以0
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  return num;
}

function Gene_mutation(ty,dna){
	/*let mkey=Object.keys(dna)
	let a1=Math.floor(Math.random()*mkey.length)
	let m1=dna[mkey[a1]]
	dna[mkey[a1]]=m1+(Math.floor(Math.random()*10)-5)/10
*/
  if(ty==0){//植物
    let mkey=Object.keys(dna)
	let a1=Math.floor(Math.random()*mkey.length)
	let m1=dna[mkey[a1]]
	dna[mkey[a1]]=m1+(Math.floor(Math.random()*10)-5)/10
  }
	//console.log(mkey[a1],dna,dnan)
	return structuredClone(dna)
}
