function iterativeLog(array) {
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`)
  })

}


function iterate(callback) {
  let new_array = ['a','b','c']
  new_array.forEach(callback)
  return new_array
}

function doToArray(array, callback){

  array.forEach(callback)
}