module.exports = function check(str, bracketsConfig) {
  
openAndClosedPairs=bracketsConfig.map(item => item.join(''));

  lengthToBeChecked = str.length / 2;
  
    for (let i=str.length; i>lengthToBeChecked*0; i--) {
              openAndClosedPairs.forEach(newItem => {
              str=str.replace(`${newItem}`, '');
      });
    }
   
  return str.length == 0;
  
  }
   
