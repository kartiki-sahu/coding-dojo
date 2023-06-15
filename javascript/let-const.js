for (let i = 0; i < 5; i++) {
  setTimeout((i) => {
    console.log(i); //prints undefined
  });
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //prints numbers from 0 to 4
  });
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //prints 5 5 times
  });
}

for (const i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //prints 0 and s an error const cannot be reassigned
  });
}

for (const i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //prints 0 and s an error const cannot be reassigned
  });
}
