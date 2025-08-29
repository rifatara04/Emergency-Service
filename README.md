### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById(): Selects a single element by its ID. If the element exists, it returns the DOM element; otherwise, it returns null.

getElementsByClassName(): Selects all elements that have a specific class name. It returns a live HTMLCollection, which means it updates automatically when the DOM changes. This collection does not support the forEach() method directly, so you often need to convert it using Array.from().

querySelector(): Selects the first element that matches any CSS selector. It returns a single DOM element.

querySelectorAll(): Selects all elements matching a CSS selector and returns a static NodeList. Unlike getElementsByClassName(), this list does not update automatically when the DOM changes. However, it supports the forEach() method directly.

### 2. How do you create and insert a new element into the DOM?

Answer: You create a new element using document.createElement('tagName'). Then, you can set its content or attributes using properties like innerText, innerHTML, id, or className. Finally, to add the element to the DOM, you use methods like appendChild() or append().

### 3. What is Event Bubbling and how does it work?

Answer: Event bubbling is a type of event propagation in the DOM. When an event happens on a child element, it first triggers on that element, then bubbles up to its parent elements, continuing up to the document root. You can stop this propagation using event.stopPropagation().

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where you attach a single event listener to a parent element to manage events on its child elements. It is useful because:

It improves performance by reducing the number of event listeners.
It keeps your code cleaner.
It allows handling events on elements that are added dynamically after the event listener is set.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault(): Prevents the default browser behavior of an element. Example: Preventing a form from submitting.

stopPropagation(): Stops the event from bubbling up to parent elements. Example: A button click inside a div won’t trigger the div’s click event listener.
