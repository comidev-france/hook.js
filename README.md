# hook.js

`
function plus (a, b)
{
    return a + b;
}
console.log(plus(1, 2) == 3); // true
plus = hook(plus, (cb, ...args) => {
    return cb(args) + 1;
})
console.log(plus(1, 2) == 4) // true
`
