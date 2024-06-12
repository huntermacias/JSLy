# Singleton Pattern
Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

<div class='flex items-center justify-center'>
<img class='rounded-lg' src='https://www.patterns.dev/_astro/singleton-pattern_Z1aBCos.webp' alt='patterns' />
</div>

First, let’s take a look at what a singleton can look like using an ES2015 class. For this example, we’re going to build a `Counter` class that has:

- a `getInstance` method that returns the value of the instance
- a `getCount` method that returns the current value of the `counter` variable
- a `increment` method that increments the value of `counter` by one
- a `decrement` method that decrements the value of `counter` by one


```js [counter.js] copy
let counter = 0;

class Counter {
    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}
```

However, this class doesn’t meet the criteria for a Singleton! A Singleton should only be able to get `instantiated once`. Currently, we can create multiple instances of the `Counter` class.

By calling the new method twice, we just set counter1 and counter2 equal to different instances. The values returned by the getInstance method on counter1 and counter2 effectively returned references to different instances: they aren’t strictly equal!


<video src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056519/patterns.dev/jspat-52_zkwyk1.mp4" loop controls></video>

Let’s make sure that only one instance of the Counter class can be created.

One way to make sure that only one instance can be created, is by creating a variable called instance. In the constructor of Counter, we can set instance equal to a reference to the instance when a new instance is created. We can prevent new instantiations by checking if the instance variable already had a value. If that’s the case, an instance already exists. This shouldn’t happen: an error should get thrown to let the user know


```js [counter.js] {1, 5-9} copy
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
// Error: You can only create one instance!
```

Perfect! We aren’t able to create multiple instances anymore.

Let’s export the Counter instance from the counter.js file. But before doing so, we should freeze the instance as well. The Object.freeze method makes sure that consuming code cannot modify the Singleton. Properties on the frozen instance cannot be added or modified, which reduces the risk of accidentally overwriting the values on the Singleton.

```js [counter.js] {29} copy
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
```

Let’s take a look at an application that implements the `Counter` example. We have the following files:

- `counter.js`: contains the `Counter` class, and exports a `Counter instance` as its default export
- `index.js`: loads the `redButton.js` and `blueButton.js` modules
- `redButton.js`: imports `Counter`, and adds `Counter`’s `increment` method as an event listener to the red button, and logs the current value of `counter` by invoking the `getCount` method
- `blueButton.js`: imports `Counter`, and adds `Counter`’s increment method as an event listener to the blue button, and logs the current value of `counter` by invoking the `getCount` method

::code-group
  ::code-block{label="index.js" preview}
    ```js [index.js] copy
    import "./redButton";
    import "./blueButton";

    console.log("Click on either of the buttons 🚀!");
    ```
  ::
  ::code-block{label="counter.js" preview}
    ```js [counter.js] copy
    let instance;
    let counter = 0;

    class Counter {
      constructor() {
        if (instance) {
          throw new Error("You can only create one instance!");
        }
        instance = this;
      }

      getInstance() {
        return this;
      }

      getCount() {
        return counter;
      }

      increment() {
        return ++counter;
      }

      decrement() {
        return --counter;
      }
    }

    const singletonCounter = Object.freeze(new Counter());
    export default singletonCounter;
    ```
  ::
  ::code-block{label="redButton.js" preview}
    ```js [redButton.js] copy
    import Counter from "./counter";

    const button = document.getElementById("red");
    button.addEventListener("click", () => {
      Counter.increment();
      console.log("Counter total: ", Counter.getCount());
    });
    ```
  ::
  ::code-block{label="blueButton.js" preview}
    ```js [blueButton.js] copy
    import Counter from "./counter";

    const button = document.getElementById("blue");
    button.addEventListener("click", () => {
      Counter.increment();
      console.log("Counter total: ", Counter.getCount());
    });
    ```
  ::
::


Both `blueButton.js` and `redButton.js` import the same instance from `counter.js`. This instance is imported as `Counter` in both files.



<video src='https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056519/patterns.dev/jspat-56_wylvcf.mp4' loop controls />

When we invoke the increment method in either redButton.js or blueButton.js, the value of the counter property on the Counter instance updates in both files. It doesn’t matter whether we click on the red or blue button: the same value is shared among all instances. This is why the counter keeps incrementing by one, even though we’re invoking the method in different files.

## Tradeoffs
Restricting the instantiation to just one instance could potentially save a lot of memory space. Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, which is referenced throughout the application. However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.

In many programming languages, such as Java or C++, it’s not possible to directly create objects the way we can in JavaScript. In those object-oriented programming languages, we need to create a class, which creates an object. That created object has the value of the instance of the class, just like the value of instance in the JavaScript example.

However, the class implementation shown in the examples above is actually overkill. Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the exact same result. Let’s cover some of the disadvantages of using Singletons!

## Using a regular object
Let’s use the same example as we saw previously. However this time, the counter is simply an object containing:

- a `count` property
- an `increment` method that increments the value of `count` by one
- a `decrement` method that decrements the value of `count` by one

```js [counter.js] copy
let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };
```

Since objects are passed by reference, both `redButton.js` and `blueButton.js` are importing a reference to the same `counter` object. Modifying the value of `count` in either of these files will modify the value on the `counter`, which is visible in both files.

## Testing
Testing code that relies on a Singleton can get tricky. Since we can’t create new instances each time, all tests rely on the modification to the global instance of the previous test. The order of the tests matter in this case, and one small modification can lead to an entire test suite failing. After testing, we need to reset the entire instance in order to reset the modifications made by the tests.