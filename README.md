## Function

## Source map

- Source
  - 1.try.js
  - 2.Regex.js
  - 3.tryCatch.js
  - 4.throwError.js
  - 5.getLab.js

---

1.Complete the reverseString function, it has one parameter s. You must perform the following actions:
. Try to reverse string s using the split, reverse, and join methods.
. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
. Print s on new line. If no exception was thrown, then this should be the reversed string, if an
exception was thrown, this should be the original string.

[Decision](./tryCatch)

---

2.Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:
. If a is 0, throw an Error with message = Zero Error.
. If a is negative, throw an Error with message = Negative Error.

[Decision](./throwError.js)

---

3.Convert the code using try...catch.

[Decision](./try.js)

---

4.A teacher has created a gradeLabs function that verifies if student programming labs work. This function
loops over an array of JavaScript objects that should contain a student property and runLab property.
The runLab property is expected to be a function containing the student's code. The runLab function is
called and the result is compared to the expected result. If the result and expected results don't match,
then the lab is considered a failure.

[Decision](./getLab.js)

---

5.Pass following tutorial and convert all the codes into js with usage.
Note, You can do it in one file.
Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
Exactly 4 or 6 characters.
Only numerical characters (0-9).
No whitespace.

[Decision](./Regex.js)

---
