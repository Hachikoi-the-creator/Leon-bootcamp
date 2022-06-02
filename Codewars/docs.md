There are some peculiarities in relation to salted creation. A contract can be re-created at the same address after having been destroyed. Yet, it is possible for that newly created contract to have a different deployed bytecode even though the creation bytecode has been the same (which is a requirement because otherwise the address would change). This is due to the fact that the constructor can query external state that might have changed between the two creations and incorporate that into the deployed bytecode before it is stored.


Order of Evaluation of Expressions

The evaluation order of expressions is not specified (more formally, the order in which the children of one node in the expression tree are evaluated is not specified, but they are of course evaluated before the node itself). It is only guaranteed that statements are executed in order and short-circuiting for boolean expressions is done.

Destructuring Assignments and Returning Multiple Values

Solidity internally allows tuple types, i.e. a list of objects of potentially different types whose number is a constant at compile-time. Those tuples can be used to return multiple values at the same time. These can then either be assigned to newly declared variables or to pre-existing variables (or LValues in general).

Tuples are not proper types in Solidity, they can only be used to form syntactic groupings of expressions.

Scoping and Declarations

A variable which is declared will have an initial default value whose byte-representation is all zeros. The “default values” of variables are the typical “zero-state” of whatever the type is. For example, the default value for a bool is false. The default value for the uint or int types is 0. For statically-sized arrays and bytes1 to bytes32, each individual element will be initialized to the default value corresponding to its type. For dynamically-sized arrays, bytes and string, the default value is an empty array or string. For the enum type, the default value is its first member.

Scoping in Solidity follows the widespread scoping rules of C99 (and many other languages): Variables are visible from the point right after their declaration until the end of the smallest { }-block that contains the declaration. As an exception to this rule, variables declared in the initialization part of a for-loop are only visible until the end of the for-loop.

Variables that are parameter-like (function parameters, modifier parameters, catch parameters, …) are visible inside the code block that follows - the body of the function/modifier for a function and modifier parameter and the catch block for a catch parameter.

Variables and other items declared outside of a code block, for example functions, contracts, user-defined types, etc., are visible even before they were declared. This means you can use state variables before they are declared and call functions recursively.

As a consequence, the following examples will compile without warnings, since the two variables have the same name but disjoint scopes.

Alert 
Before version 0.5.0 Solidity followed the same scoping rules as JavaScript, that is, a variable declared anywhere within a function would be in scope for the entire function, regardless where it was declared. The following example shows a code snippet that used to compile but leads to an error starting from version 0.5.0.

Checked or Unchecked Arithmetic

An overflow or underflow is the situation where the resulting value of an arithmetic operation, when executed on an unrestricted integer, falls outside the range of the result type.

Prior to Solidity 0.8.0, arithmetic operations would always wrap in case of under- or overflow leading to widespread use of libraries that introduce additional checks.

Since Solidity 0.8.0, all arithmetic operations revert on over- and underflow by default, thus making the use of these libraries unnecessary.

Error handling: Assert, Require, Revert and Exceptions

Solidity uses state-reverting exceptions to handle errors. Such an exception undoes all changes made to the state in the current call (and all its sub-calls) and flags an error to the caller.

When exceptions happen in a sub-call, they “bubble up” (i.e., exceptions are rethrown) automatically unless they are caught in a try/catch statement. Exceptions to this rule are send and the low-level functions call, delegatecall and staticcall: they return false as their first return value in case of an exception instead of “bubbling up”.

Warning

The low-level functions call, delegatecall and staticcall return true as their first return value if the account called is non-existent, as part of the design of the EVM. Account existence must be checked prior to calling if needed.

Exceptions can contain error data that is passed back to the caller in the form of error instances. The built-in errors Error(string) and Panic(uint256) are used by special functions, as explained below. Error is used for “regular” error conditions while Panic is used for errors that should not be present in bug-free code.

# JS
The flow of development usually looks like this:

    An initial spec is written, with tests for the most basic functionality.
    An initial implementation is created.
    To check whether it works, we run the testing framework Mocha (more details soon) that runs the spec. While the functionality is not complete, errors are displayed. We make corrections until everything works.
    Now we have a working initial implementation with tests.
    We add more use cases to the spec, probably not yet supported by the implementations. Tests start to fail.
    Go to 3, update the implementation till tests give no errors.
    Repeat steps 3-6 till the functionality is ready.

So, the development is iterative. We write the spec, implement it, make sure tests pass, then write more tests, make sure they work etc. At the end we have both a working implementation and tests for it.

Let’s see this development flow in our practical case.

The first step is already complete: we have an initial spec for pow. Now, before making the implementation, let’s use few JavaScript libraries to run the tests, just to see that they are working (they will all fail).

Improving the spec

What we’ve done is definitely a cheat. The function does not work: an attempt to calculate pow(3,4) would give an incorrect result, but tests pass.

…But the situation is quite typical, it happens in practice. Tests pass, but the function works wrong. Our spec is imperfect. We need to add more use cases to it.

Let’s add one more test to check that pow(3, 4) = 81.

The principal difference is that when assert triggers an error, the it block immediately terminates. So, in the first variant if the first assert fails, then we’ll never see the result of the second assert.

Making tests separate is useful to get more information about what’s going on, so the second variant is better.

And besides that, there’s one more rule that’s good to follow.

One test checks one thing.

If we look at the test and see two independent checks in it, it’s better to split it into two simpler ones.

So let’s continue with the second variant.

Nested describe

We’re going to add even more tests. But before that let’s note that the helper function makeTest and for should be grouped together. We won’t need makeTest in other tests, it’s needed only in for: their common task is to check how pow raises into the given power.

Extending the spec

The basic functionality of pow is complete. The first iteration of the development is done. When we’re done celebrating and drinking champagne – let’s go on and improve it.

As it was said, the function pow(x, n) is meant to work with positive integer values n.

To indicate a mathematical error, JavaScript functions usually return NaN. Let’s do the same for invalid values of n.