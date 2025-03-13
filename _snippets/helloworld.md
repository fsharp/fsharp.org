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
        "Milky Way Galaxy"
        "Local Galactic Group"
        "Virgo Supercluster"
        "Universe"
        "Omniverse"
    ]
    
    greets |> List.iter hello
---
## Concise and Expressive Code

This simple "Hello World" example demonstrates F#'s elegant syntax and functional approach to programming.
<!--more-->
- **Concise function syntax** defines reusable functions with minimal boilerplate
- **Clean list creation** uses indentation-based syntax without requiring commas
- **String interpolation** provides readable string formatting with the `$` prefix
- **Pipeline operator** creates a readable left-to-right flow of data
- **Higher-order functions** allow applying operations across collections easily

In just a few lines of code, F# provides a clean, readable implementation that would require significantly more boilerplate in many other languages. This expressive style becomes even more valuable as your programs grow in complexity.