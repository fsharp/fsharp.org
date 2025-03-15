---
order: 16
title: SequenceExpressions.fs
excerpt_separator: <!--more-->
code: |
    // A function generating a sequence of numbers
    let rec fizzBuzzSeq n = seq {
        yield
            match n with
            | x when x % 15 = 0 -> "fizzbuzz"
            | x when x % 3 = 0 -> "fizz"
            | x when x % 5 = 0 -> "buzz"
            | _ -> n.ToString()

        yield! fizzBuzzSeq (n + 1)
    }

    // Process the sequence using a pipeline
    fizzBuzzSeq 1
    |> Seq.take 100
    |> Seq.iter (printfn "%s")
---
## Data Pipelines with Sequence Expressions

F# sequence expressions provide compositional, functional stream processing capabilities that integrate seamlessly with every part of the language.
<!--more-->
- **Simplified data generation** through sequence expressions
- **Compositional data processing** through library routines
- **On-demand evaluation** of data streams 
- **Fluent, maintainable code** that is easy to read and understand
