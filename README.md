# NodeJS-practice
 Node basics, some projects based on it and practice

# vuejs-interview-questions
List of 100 VueJS Interview Questions

> Click ⭐ if you like the project. Pull Request are highly appreciated.

### Table of Contents
-------------------------------------------------------------------
| No. | Questions |
|---- | ---------
|1  | [What is VueJS?](#what-is-vuejs) |
|2  | [What are the major features of VueJS](#what-are-the-major-features-of-vuejs) |
|3  | [What are the lifecycle methods of VueJS](#what-are-the-lifecycle-methods-of-vuejs)|
|4  | [What are the conditional directives](#what-are-the-conditional-directives)|
|5  | [What is the difference between v-show and v-if directives](#what-is-the-difference-between-v-show-and-v-if-directives)|


### What is VueJS?
Vue.js is an open-source, progressive Javascript framework for building user interfaces that aim to be incrementally adoptable. The core library of VueJS is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.


### What are the major features of VueJS?
Below are the some of major features available with VueJS

 1. **Virtual DOM:** It uses virtual DOM similar to other existing frameworks such as ReactJS, Ember etc. Virtual DOM is a light-weight in-memory tree representation of the original HTML DOM and updated without affecting the original DOM.
 2. **Components:** Used to create reusable custom elements in VueJS applications.
 3. **Templates:** VueJS provides HTML based templates that bind the DOM with the Vue instance data
 4. **Routing:** Navigation between pages is achieved through vue-router
 5. **Light weight:** VueJS is light weight library compared to other frameworks
### What are the lifecycle methods of VueJS?
### What are the conditional directives?
VueJS provides set of directives to show or hide elements based on conditions. The available directives are: ** v-if, v-else, v-else-if and v-show**
**1. v-if:**  The v-if directive adds or removes DOM elements based on the given expression. For example, the below button will not show if isLoggedIn is set to false.
```javascript
<button v-if="isLoggedIn">Logout</button>
```
You can also control multiple elements with a single v-if statement by wrapping all the elements in a `<template>` element with the condition. For example, you can have both label and button together conditionally applied,
```javascript
<template v-if="isLoggedIn">
  <label> Logout </label>
  <button> Logout </button>
</template>
```
**2. v-else:**  This directive is used to display content only when the expression adjacent v-if resolves to false. This is similar to else block in any programming language to display alternative content and it is preceded by v-if or v-else-if block. You don't need to pass any value to this.
For example, v-else is used to display LogIn button if isLoggedIn(not logged in) is set to false.
```javascript
<button v-if="isLoggedIn"> Logout </button>
<button v-else> Log In </button>
```
**3. v-else-f:** This directive is used when we need more than two options to be checked.
For example, ifLoginDisabled property is disabled then we need to prevent user to login instead just display the label. This can be achieved through v-else statement.
```javascript
<button v-if="isLoggedIn"> Logout </button>
<label v-else-if="isLoginDisabled"> User login disabled </label>
<button v-else> Log In </button>
```

**4. v-show:** This directive is similar to v-if but it renders all elements to the DOM and then uses the CSS display property to show/hide elements. This directive is recommended if the elements are switched on and off frequently.
```javascript
<span if-show="user.name">Welcome user,{{user.name}}</span>