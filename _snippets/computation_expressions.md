---
order: 17
title: ComputationExpressions.fs
excerpt_separator: <!--more-->
code: |
    // Define a custom computation expression for validation
    type ValidationBuilder() =
        member _.Bind(x, f) = // Defines "let!"
            match x with
            | Ok value -> f value
            | Error e -> Error e
        member _.Return(x) = Ok x // Defines "return"
        member _.ReturnFrom(x) = x // Defines "return!"
    let validate = ValidationBuilder()

    type Person = { Name: string; Age: int }

    // Use the custom computation expression
    let validatePerson age name = validate {
        let! validAge = 
            if age >= 0 && age < 150 then Ok age
            else Error "Age must be between 0 and 150"
            
        let! nonEmptyName = 
            if String.length name > 0 then Ok name
            else Error "Name cannot be empty"
            
        if String.length name > 100 then
            return! Error "Name is too long!"
        else
            return { Name = nonEmptyName; Age = validAge }
    }
---
## Clean Code with Computation Expressions

F# computation expressions give you an elegant syntax for compositional control flows with a clean, readable notation that some say is F#'s superpower.
<!--more-->
- **Computation expressions** factor out how code is composed together
- **Custom control flow abstractions** create domain-specific mini-languages
- **Seamless error handling** with [railway-oriented programming](https://fsharpforfunandprofit.com/rop/) patterns
- **Elegant data transformations** by hiding boilerplate and focusing on business logic
- **Composable workflows** that can be combined and nested for complex operations
