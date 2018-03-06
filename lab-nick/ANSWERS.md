Explain how hoisting allows the `printGreeting` function to be called before
where it's actually written in the file.

```js
printGreeting();

function printGreeting() {
  console.log("isn't JavaScript wonderful?");
}
```
ANSWER: 
printGreeting can be hoisted because it is a declared function and is loaded into memory during the first pass of JS on load.

Explain why this function called `printGoodbye` can't be executed until after
it's actually written in the file.

```js
printGoodbye(); // this one won't execute!

const printGreeting = () => {
  console.log("That's all, folks!");
}

printGoodbye();
```

Answer:  
One it wont exicute because it is never called, and two it is declared as a variable and not a function so JS wont exicute unless it is called by a declared function after the first pass has been completed.