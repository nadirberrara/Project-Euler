//2 - Even Fibonacci numbers
function fibannacci() {
  var list = [1, 2];
  var total = 0;
  while (list[list.length - 1] < 4000000) {
    sum = list[list.length - 2] + list[list.length - 1];
    list.push(sum);
  }
  list.forEach(function(a) {
    if (a % 2 === 0) {
      total += a;
    }
  });
  list.pop();
  return "The total of even numbers is : " + total + " " + list;
}

fibannacci();

//3 - Largest prime factor
function primeFactors(number) {
  var i = 2;
  var list = [];
  while (i <= number) {
    if (number % i === 0) {
      list.push(i);
      console.log(number);
      number = number / i;
    }
    i++;
  }
  return list[list.length - 1];
}

primeFactors(600851475143);
