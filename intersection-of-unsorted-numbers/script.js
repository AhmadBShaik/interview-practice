const getIntersection = (arr1, arr2) => {
  
  const uniqueArr1Items = new Set(arr1)
  const result = new Set()
  for(const item of arr2){
    if(uniqueArr1Items.has(item) ){
      result.add(item)
    }
  }
  return [...result]
}

const result = getIntersection([1,2,3,5], [2,3,4,6])
console.log(result)