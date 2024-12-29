# Unhandled Error in Asynchronous Express.js Route Handler

This repository demonstrates a common error in asynchronous Node.js applications using Express.js: unhandled errors within asynchronous route handlers.  The bug occurs because an error is thrown inside a `setTimeout` callback, which doesn't automatically propagate to the Express.js middleware handling errors. This leads to cryptic error messages or application crashes.

The `bug.js` file contains the problematic code.  `bugSolution.js` provides a corrected version using appropriate error handling techniques.