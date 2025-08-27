1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById selects specific element by fetching the ID. getElementsByClassName selects all elements by fetching the classNames. querySelector selects the first element in css selector and querySelectorAll selects the all elements in css selector. 

2. How do you create and insert a new element into the DOM?
Answer: We can go through 3 steps. Firstly, get the parent node by using getElementById or getElementsByClassName. Secondly create a new element and store it to a variable. Lastly appendChild the new element to the parent node.

3. What is Event Bubbling and how does it work?
Answer: Event bubbling is the process that shows how events move through the dom when something is clicked or fired.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event delegation is something that I create one event in the parent node and access it from the child nodes.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browsers default action and stopPropagation() prevents bubbling the parent elements.