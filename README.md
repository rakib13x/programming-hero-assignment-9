<p align="center">
  <strong >My Project</strong>
  <p> Here I have given my project link ,that I have build.I have mentioned project
  feature and Also I have Given MCQ questions answer.</p>
</p>

---

<p align="center">
  <a href="https://eventy-56555.web.app/" style="font-size: 24px; text-align: center;">https://eventy-56555.web.app/</a>
</p>

---


<p align="center">
  <strong>Project Features</strong>
</p>

- Feature 1: User can book a Event with us in this web app.
- Feature 2: User Can write a review about us if they are satisfied with our service or not.
- Feature 3: It has an Authentication system based on security and privacy for our users.
- Feature 4: Users can check which events they have booked.
- Feature 5: Users can receive toast messages when they sign in, sign up, and log out.


---

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> The code tries to assign an empty object to the variable greetign ( typo in the variable name). Since greetign is not defined, it results in a ReferenceError.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

<i>The sum function tries to add two values a and b. The second argument passed to sum is a string "2", and JavaScript concatenates it with the number 1. The result is "12", which is a string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Initially, the info.favoriteFood property is assigned the value "🍕" from the food array. Then, it is updated to "🍝". The food array remains ['🍕', '🍫', '🥑', '🍔'], so the answer is A.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The sayHi function expects a name parameter, but it is called without an argument. When called without an argument, name is undefined, resulting in "Hi there, undefined"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The code initializes count to 0 and iterates through the nums array. It increments count when the num is truthy (not 0). There are two truthy values in the nums array (1 and 2), so count becomes 2</i>

</p>
</details>