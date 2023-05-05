// regex
let regExThree = /ayush/gi

  const strToCheck = 'ayush was a growing businessman ayush at a rapid speed and recently ayush are working with SONY and Buy 27%  Sony shares'

// regex sai pucha ki string kai andhar teh regular expression hai ya nhi
  const result = regExThree.test(strToCheck)
  console.log(result);

// aab mai string sai punch rha hu
const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);
// another method is replace
const oneMoreResult = strToCheck.replace(regExThree , 'Astaad')
console.log(oneMoreResult);

// usecase
const webUrl = 'https://Astaad.com/ayush%20rana'
const usableurl = webUrl.replace(/%\d\d/ , '-')
console.log(usableurl);