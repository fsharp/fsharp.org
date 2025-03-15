---
order: 14
title: TypeProviders.fs
excerpt_separator: <!--more-->
code: |
    open FSharp.Data

    type PeopleDB = CsvProvider<"people.csv">

    let printPeople () =
        let people = PeopleDB.Load("people.csv")

        for person in people.Rows do
            // Access the CSV fields with intellisense and type safety!
            printfn $"Name: %s{person.Name}, Id: %i{person.Id}"
---
## Type-Safe, Integrated Data

F# Type Providers create a seamless bridge between your code and data sources.
<!--more-->
- **Zero-friction data access** connects to CSV, JSON, XML, SQL, and more without manual mapping
- **Static typing at compile time** prevents runtime errors when accessing external data
- **Automatic schema discovery** creates F# types directly from sample data or schemas
- **Full IDE integration** provides intellisense for external data sources
- **Design-time capabilities** validate your code against live data sources before execution
