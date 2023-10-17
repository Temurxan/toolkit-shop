function sum(arr) {
  let s = 0;
  arr.map((item) => {
    s += Number(item.price) * Number(item.count);
  });
  return s;
}

export default sum;
