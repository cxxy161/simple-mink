var chunksize=100
var spchunksize=10

function lenof(obj){
    return 0
}
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
    const sechux=[(-sex-10)/chunksize,(canv.width-sex+10)/chunksize]
    const sechuy=[(-sey-10)/chunksize,(canv.height-sey+10)/chunksize]
    const sespchux=[sechux[0]/spchunksize,sechux[1]/spchunksize]
    const sespchuy=[sechuy[0]/spchunksize,sechuy[1]/spchunksize]
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

function addrole(cont,obj){
    const chux=Math.ceil(obj.x/chunksize)
    const chuy=Math.ceil(obj.y/chunksize)
    const spchux=Math.ceil(chux/spchunksize)
    const spchuy=Math.ceil(chuy/spchunksize)
    
    if(!cont.has([spchux,spchuy])){
        build_spchunk(cont,spchux,spchuy)
    }
    let lchunk = cont.get([spchux,spchuy])
    lchunk[chux][chuy].push(obj)
    cont.set([spchux,spchuy],lchunk)

}
