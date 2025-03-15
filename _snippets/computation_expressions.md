---
order: 17
title: ComputationExpressions.fs
excerpt_separator: <!--more-->
code: |
    // Sequence generation
    let rec fizzBuzzSeq n =
        seq {
            yield
                match n with
                | x when x % 15 = 0 -> "fizzbuzz"
                | x when x % 3 = 0 -> "fizz"
                | x when x % 5 = 0 -> "buzz"
                | _ -> n.ToString()

            yield! fizzBuzzSeq (n + 1)
        }

    fizzBuzzSeq 1 |> Seq.take 100 |> Seq.iter (printfn "%s")

    // Asynchronous programming with computation expressions
    let fetchDataAsync url = async {
        printfn "Fetching data from %s..." url
        do! Async.Sleep 1000 // Simulate network delay
        return sprintf "Data from %s" url
    }

    // Custom computation expression for validation
    type ValidationBuilder() =
        member _.Bind(x, f) = 
            match x with
            | Ok value -> f value
            | Error e -> Error e
        member _.Return(x) = Ok x
        member _.ReturnFrom(x) = x

    let validate = ValidationBuilder()

    type Person = { Name: string; Age: int }

    // Using our custom computation expression
    let validatePerson age name = validate {
        let! validAge = 
            if age >= 0 && age < 150 then Ok age
            else Error "Age must be between 0 and 150"
            
        let! validName = 
            if String.length name > 0 then Ok name
            else Error "Name cannot be empty"
            
        return { Name = validName; Age = validAge }
    }

    // Using multiple computation expressions together
    let processPersonAsync person = async {
        let result = validatePerson person.Age person.Name
        match result with
        | Ok validated ->
            return! fetchDataAsync $"profile/{validated.Name}"
        | Error msg ->
            return $"Validation error: {msg}"
    }

    processPersonAsync { Name = "Snowdrop"; Age = 13}
    |> Async.RunSynchronously
---
## Expressive Control Flow with Computation Expressions

F# computation expressions provide an elegant syntax for complex control flows with a clean, readable notation that some say is F#'s superpower.
<!--more-->
- **Simplified asynchronous code** makes non-blocking operations read like synchronous code
- **Custom control flow abstractions** create domain-specific mini-languages
- **Seamless error handling** with [railway-oriented programming](https://fsharpforfunandprofit.com/rop/) patterns
- **Elegant data transformations** by hiding boilerplate and focusing on business logic
- **Composable workflows** that can be combined and nested for complex operations

