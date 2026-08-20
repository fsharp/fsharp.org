---
order: 12
title: SequenceExpressions.fs
excerpt_separator: <!--more-->
code: |
    let rec fizzBuzzSeq n = seq {
        if n % 15 = 0 then "fizzbuzz"
        elif n % 3 = 0 then "fizz"
        elif n % 5 = 0 then "buzz"
        else n.ToString()
        
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
