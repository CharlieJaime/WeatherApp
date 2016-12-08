function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve( a + b );
    } else{
      reject("Both of these are not numbers");
    }
  });
}

addPromise(1, 4).then(function(sum){
  console.log('Promise Success', sum);
}, function(err){
  console.log('Promise Error', err);
});

addPromise().then(function(sum){
  console.log('Promise Success', sum);
}, function(err){
  console.log('Promise Error', err);
});
