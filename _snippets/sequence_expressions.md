---
order: 15
title: SequenceExpressions.fs
excerpt_separator: <!--more-->
code: |
    // This is an active pattern. It allows customized pattern matching.
    let (|Divides|_|) divisor x = x % divisor = 0
    let rec fizzBuzzSeq n = seq {
        match n with
        | Divides 15 -> "fizzbuzz"
        | Divides 3 -> "fizz"
        | Divides 5 -> "buzz"
        | _ -> n.ToString()
        
        // Tail recursion makes this as efficient as a "while" loop
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
