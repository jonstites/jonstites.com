---
title: "Syntax vs substance"
date: "2018-12-30"
author: Jonathan Stites
summary: "What makes a programming language useful?"
---

Here's an excerpt from a [website](https://fsharpforfunandprofit.com/why-use-fsharp/) about one of the benefits of F#:

```
// one-liners
[1..100] |> List.sum |> printfn "sum=%d"

// no curly braces, semicolons or parentheses
let square x = x * x
let sq = square 42
...
```
> F# is not cluttered up with coding “noise” such as curly brackets, semicolons and so on.
>
> You almost never have to specify the type of an object, thanks to a powerful type inference system. And, compared with C#, it generally takes fewer lines of code to solve the same problem.

Type inference is definitely a big plus. But semicolons and brackets?

What about:
- How easy is it for someone to read and understand? How easy is it for someone write an over-complicated solution?
- Are values immutable by default? Under what conditions can data races occur?
- Is there implicit casting? Implicit deep copies?
- Inheritance or composition?
- How are errors handled? Are there exceptions?
- Is there good tooling: tests, linters, built-in documentation, ... ? What are the values of the language's community?
- How are dependencies managed? Is there a risk of `npm`-style malicious dependencies?

The linked website does have more substantial points to make, so it is surprising to see semicolons and brackets mentioned in the first point on the first page.