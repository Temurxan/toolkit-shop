function isBasket(arr, id) {
  return arr.filter((item)=> item.id===id).length !== 0
}


export default isBasket;