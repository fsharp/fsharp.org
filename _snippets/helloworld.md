---
order: 0
title: HelloWorld.fs
excerpt_separator: <!--more-->
code: |
    let hello name =
        printfn $"Hello, {name}!"

    let greets = [
        "World"
        "Solar System"
        "Galaxy"
        "Universe"
        "Omniverse"
    ]
    
    greets |> List.iter hello
---
## Concise like Python

F#'s elegant syntax and strong typing give you the tools to solve problems succinctly, robustly and happily. 
<!--more-->
- **Concise syntax** defines reusable functions with minimal boilerplate
- **Simple lists** uses indentation-based syntax without requiring commas
- **String interpolation** provides readable string formatting with the `$` prefix
- **Pipeline operator** creates a readable left-to-right flow of data

In just a few lines of code, F# provides a clean, readable implementation that would require significantly more boilerplate in many other languages. This expressive style becomes even more valuable as your programs grow in complexity.