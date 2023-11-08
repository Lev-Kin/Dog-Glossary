function powFunc(func) {
  return func();
}

const result = powFunc(function() {
  return 5;
});

//console.log(result.toInt());
