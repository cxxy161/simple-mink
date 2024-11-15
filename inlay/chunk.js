var chunksize=200
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
