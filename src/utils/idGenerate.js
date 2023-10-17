function generate(arr) {
    if(arr.length){
        return arr[arr.length-1].id+1
    }else{
        return 1
    }
}


export default generate