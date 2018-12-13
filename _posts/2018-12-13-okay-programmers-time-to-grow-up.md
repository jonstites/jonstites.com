---
title: "Okay programmers it's time to grow up"
layout: single
tags: "quote"
excerpt: "Boring over exciting"
---

Here's an excerpt from a [website](https://fsharpforfunandprofit.com/why-use-fsharp/) about the benefits of F#:
>
```
// one-liners
[1..100] |> List.sum |> printfn "sum=%d"

// no curly braces, semicolons or parentheses
let square x = x * x
let sq = square 42
...
```
> F# is not cluttered up with coding “noise” such as curly brackets, semicolons and so on...compared with C#, it generally takes fewer lines of code to solve the same problem.


A younger me would be nodding along. Fewer keystrokes! Replace the crufty old languages with something modern!

I guess I'm an old crank now, because I care about:
- How easy is it for someone to read and understand? How easy is it for someone write an over-complicated solution?
- Are values immutable by default? What conditions lead to data races?
- Is there implicit casting? Implicit deep copies?
- Inheritance or composition?
- How are errors handled? Is there support for something like `Maybe` monad? Are there exceptions?
- Is there good tooling: tests, linters, built-in documentation, ... ?
- How are dependencies managed? Is there a risk of `npm`-style malicious dependencies?

F# seems fine on these points, but seriously, let's not make removing "coding noise" a primary goal of our languages when we still haven't solved our biggest problems.