function capitalize(str){
  if(typeof str !== 'string'){
    throw new Error('Not a string')
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = capitalize;