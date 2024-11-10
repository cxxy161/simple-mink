function Gene_mutation(ty, dnaa) {
    let dna = JSON.parse(JSON.stringify(dnaa));
    if(Math.random()>0){
    if (ty === 0) { // 植物
      /*
      var mor_plan={
      rate:5,//光合速率
      life:10,//寿命
      usepw:50,//生长能量
      brnum:5,//繁殖数量
     brtime:5,//繁殖期
     defense:1//防御
     }
     */
      let mkey = Object.keys(dna);
      let a1 = Math.floor(Math.random() * mkey.length);
      let cvalue=mkey[a1]
      let old_key = Number(dna[cvalue]);
      let s
      switch(cvalue){
        case 'brtime':
          dna['brtime'] = toPrecision(old_key + Math.floor(Math.random() * 2) - 1) || 0
          break;
        case 'defense':
          s=Math.floor(Math.random() * 2) - 1
          dna['defense']=toPrecision(old_key + s)
          dna['rate']=Math.max(toPrecision(old_key - s/2), 0)
          break
        case 'rate':
          s=(Math.floor(Math.random() * 20) - 10)/10
          dna['rate']=Math.max(toPrecision(old_key + s), 0)
          dna['usepw']=Math.max(toPrecision(old_key + s*2), 50)
          break
        case 'brnum':
            s=(Math.floor(Math.random() * 2) - 1)
            dna['brnum']=Math.max(toPrecision(old_key + s) , 0)
            dna['usepw']=Math.max(toPrecision(old_key + s*4), 50)
            break
        case 'usepw':
            break
        default:
            dna[cvalue] = Math.max(toPrecision(old_key + Math.floor(Math.random() * 20) - 10)/10, 0)
            break
      }
      
      
    }
    }
    return dna;
  }