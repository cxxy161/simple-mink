function teat(){
for(let i=0;i < 5000;++i){
let ne=new herbivores(i/20,i/20,mor_her)
herbivoress.push(ne)}
for(let i=0;i < 100;++i){
    let mor=structuredClone(mor_plan)
		let ne=new plant(i,i,mor)
		plants.push(ne)}
}