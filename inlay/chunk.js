var chunksize=100
var spchunksize=10



function build_spchunk(cont,x,y){
    let lchunk=[]
    for(let i=0;i<spchunksize;i++){
        lchunk.push([])
        for(let j=0;j<spchunksize;j++){
            lchunk[i].push([])
        }
    }
    cont.set([x,y],lchunk)
}
function forrender(cont){
    /*
    if(pl.x>-sex-10 && pl.x<canv.width-sex+10){
			if(pl.y>-sey-10 && pl.y<canv.height-sey+10){
            */
    let retu=[]
    if(!cont.size()){
        return []
    }
    
    let sechux=[Math.ceil((-sex)/chunksize),Math.ceil((canv.width-sex)/chunksize)]
    let sechuy=[Math.ceil((-sey)/chunksize),Math.ceil((canv.height-sey)/chunksize)]
    const sespchux=[Math.ceil(sechux[0]/spchunksize),Math.ceil(sechux[1]/spchunksize)+1]
    const sespchuy=[Math.ceil(sechuy[0]/spchunksize),Math.ceil(sechuy[1]/spchunksize)+1]
    //console.log(sechux,sechuy,sespchux,sespchuy)
    for(let i=sespchux[0];i<sespchux[1];i++){
        for(let j=sespchuy[0];j<sespchuy[1];j++){
            let lchunk = cont.get([i,j])
            if(!lchunk){continue}
            //console.log(lchunk);
            sechux=[(sechux[0]%sespchux[0])*(i==sespchux[0]),(sechux[1]%sespchux[1])*(i==sespchux[1])]
            sechuy=[(sechuy[0]%sespchuy[0])*(j==sespchuy[0]),(sechuy[1]%sespchuy[1])*(j==sespchuy[1])]
            for(let k=sechux[0]%sespchux[0];k<sechux[1];k++){
                for(let l=sechuy[0];l<sechuy[1];l++){
                    if(lchunk[k][l].length>0){
                        for(let m=0;m<lchunk[k][l].length;m++){
                            retu.push(lchunk[k][l][m])
                        }
                    }
                    else{console.log(lchunk[k][l])}
                }
            }
        }
    }
    return retu

}
function forall(cont){
    let retu=[]
    for(let [key, value] of cont){
            for(let k=0;k<value[0];k++){
                for(let l=0;l<value[1];l++){
                    if(value[k][l].length>0){
                        for(let m=0;m<value[k][l].length;m++){
                            retu.push(value[k][l][m])
                        }
                    }
                }
            }
        
    }
    return retu
}function forlen(cont){
    let retu=0
    for(let [key,value] of cont){
            for(let k=0;k<value[0];k++){
                for(let l=0;l<value[1];l++){
                    if(value[k][l].length>0){
                        for(let m=0;m<value[k][l].length;m++){
                            retu++
                        }
                    }
                }
            }
        
    }
    return retu
}

function addrole(cont,obj){
    const chux=Math.ceil(obj.x/chunksize)
    const chuy=Math.ceil(obj.y/chunksize)
    const spchux=Math.ceil(chux/spchunksize)
    const spchuy=Math.ceil(chuy/spchunksize)
    
    if(!cont.has([spchux,spchuy])){
        build_spchunk(cont,spchux,spchuy)
    }
    let lchunk = cont.get([spchux,spchuy])
    console.log(lchunk,[spchux,spchuy],cont,obj)
    lchunk[chux][chuy].push(obj)
    cont.set([spchux,spchuy],lchunk)

}

function seachfor(cont,x,y,size){
    let retu=[]
    const sechux = [Math.ceil((x - size) / chunksize), Math.ceil((x + size) / chunksize)];
    const sechuy = [Math.ceil((y - size) / chunksize), Math.ceil((y + size) / chunksize)];
    const sespchux = [Math.ceil(sechux[0] / spchunksize), Math.ceil(sechux[1] / spchunksize)]
    const sespchuy = [Math.ceil(sechuy[0] / spchunksize), Math.ceil(sechuy[1] / spchunksize)]
    for(let i=sespchux[0];i<sespchux[1];i++){
        for(let j=sespchuy[0];j<sespchuy[1];j++){
            let lchunk = cont.get([i,j])
            for(let k=sechux[0];k<sechux[1];k++){
                for(let l=sechuy[0];l<sechuy[1];l++){
                    if(lchunk[k][l].length>0){
                        for(let m=0;m<lchunk[k][l].length;m++){
                            retu.push(lchunk[k][l][m])
                        }
                    }
                }
            }
        }
    }
    return retu
}
function killobj(cont,obj){
    let retu=[]
    const chux=Math.ceil(obj.x/chunksize)
    const chuy=Math.ceil(obj.y/chunksize)
    const spchux=Math.ceil(chux/spchunksize)
    const spchuy=Math.ceil(chuy/spchunksize)
    
    let value = cont.get([spchux,spchuy])[chux][chuy]
    value.splice(value.indexOf(obj),1)
    cont.set([spchux,spchuy],value)
    

}