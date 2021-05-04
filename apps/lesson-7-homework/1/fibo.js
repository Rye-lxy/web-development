const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
  const n = Number(input.value);
  print('Waiting...');
  const now = Date.now();
  Fibo(n).then(res => {
    const costInMs = Date.now() - now;
    print(`Result: ${res} in ${costInMs}ms`);
  });
    
});
        
async function Fibo(n) {
  if (n <= 2) {
    return new Promise(function (res, err) {
      res(1)
    });
  } 
  else {
    const n_1 = await Fibo(n - 1);
    const n_2 = await Fibo(n - 2);
    return new Promise(function (res, err) {
      const timer = setTimeout(() => {
        res(n_1 + n_2);
      }, 30);
    });
  }
}


const log = document.querySelector('.log');
function print(str) {
  log.innerText = str;
}