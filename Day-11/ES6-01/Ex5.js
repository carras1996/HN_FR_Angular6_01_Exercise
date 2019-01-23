function upper(strings, ...values) {
  console.log(strings);
  console.log(values);

  let res = '';
  let upperStr = values.map(str => str.toUpperCase());
  for(let i = 0; i< strings.length; i++){
    if(upperStr[i] === undefined){
      upperStr[i] = '';
    }
    res = res + strings[i] + upperStr[i];
  }
  return res;
}

var name = 'Nguyen Van A',
  account = 'ANV',
  classname = 'FrontEnd AngularJS';
console.log(
  upper`Hello ${name} (@${account}), welcome to the ${classname}!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRONTEND ANGULARJS!'
  );


