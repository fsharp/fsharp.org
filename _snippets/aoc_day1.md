---
order: 20
title: AOC_Day1.fs
excerpt_separator: <!--more-->
code: |
    type Direction = Up | Down
            
    let parseDirections chars =
        let parseDirection = function
            | '(' -> Up
            | ')' -> Down
            | _ -> failwith "Invalid character!"
        chars |> Seq.map parseDirection

    let nextFloor currentFloor direction =
        match direction with
        | Up -> currentFloor + 1
        | Down -> currentFloor - 1

    let findEndingFloor startingFloor directions =
        directions |> Seq.fold nextFloor startingFloor

    "()(()((()((" |> parseChars |> findEndingFloor 0 |> printf
---
## Focus on the Challenges

F# excels at solving algorithmic challenges with clarity and precision. The code elegantly tracks an elevator's movement through a building by parsing directional instructions.
<!--more-->
- **Discriminated unions** to model directions clearly
- **Pattern matching** for expressive, exhaustive handling of cases  
- **Higher-order functions** like `fold` to accumulate state
- **Function composition** with the pipeline operator for readable data flow

Solutions often read almost like a plain English description of the problem, making it both maintainable and self-documenting.
