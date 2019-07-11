function deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
  for (var key in SecondOBJ) {
    if(FirstOBJ[key]) {
      if(FirstOBJ[key].toString() === "[object Object]") {
        deepObjectMerge(FirstOBJ[key], SecondOBJ[key])
      }
    } else {
      FirstOBJ[key] = SecondOBJ[key]
    }
  }
  return FirstOBJ;
}

export default deepObjectMerge