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
function toPrecision(num, precision=2) {//jb取整
  const factor = num.toFixed(precision)
  return Number(factor);
}


function scale_ji(x,y){
  let rx=x-moux_zoomsave
  let ry=y-mouy_zoomsave
  let nx=rx*zoomscale
  let ny=ry*zoomscale
  console.log(rx,ry,[],moux_zoomsave)
  return []

}

function fixNegativeZero(value) {
  return value === -0 ? 0 : value;
}