---
order: 21
title: Ecosystems.fs
excerpt_separator: <!--more-->
code: |
    // JavaScript Example: Image processing
    open Fable.Core
    open Fable.Core.JS
    // Read documentation, then define the JavaScript type
    type [<Import("Image", "image-js")>] Image = // npm install image-js
        static member load(path: string): Promise<Image> = jsNative
        member _.flipX(): Image = jsNative
        member _.flipY(): Image = jsNative
        [<ParamObject>] member _.resize(?width: float, ?height: float): Image = jsNative
        member _.save(path: string): Promise<unit> = jsNative
    (promise {
        let! image = Image.load "input.png"
        let image = image.resize(width=300, height=200).flipX().flipY()
        do! image.save "output.jpg"
    }).catch(fun x -> console.error x) |> ignore

    // .NET Example: Image processing
    // C# types have seamless integration with F#.
    open SixLabors.ImageSharp // dotnet package add SixLabors.ImageSharp
    open SixLabors.ImageSharp.Processing
    use image = Image.Load "input.png" // .NET types are integrated seamlessly.
    image.Mutate(_.Resize(300, 200).Flip(FlipMode.Horizontal ||| FlipMode.Vertical) >> ignore)
    image.Save "output.jpg"

    // Code sharing Example: The same code works across JavaScript and .NET
    open System.Text.RegularExpressions // Specific System types are usable anywhere.
    let input = "Emails: user1@test.com, user2@domain.org, invalid-email"
    let pattern = @"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"
    for matched in Regex.Matches(input, pattern) do
        printfn $"Found email: {matched.Value}" // user1@test.com and user2@domain.org
---
## Full access to ecosystems of libraries

F# has full integration with ecosystems of JavaScript and .NET libraries and frameworks.
Anything written in JavaScript or C# can be used from F# and vice versa.
<!--more-->
- **JavaScript** is the universal language of web development. It encompasses [Web](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Mobile](https://reactnative.dev/), [Desktop](https://www.electronjs.org/), [Cloud](https://nodejs.org/), [Microservices](https://nestjs.com/), [Artificial Intelligence](https://www.tensorflow.org/js), [Game Development](https://phaser.io/) and [Internet of Things](https://johnny-five.io/).
- **.NET** is Microsoft’s enterprise-grade platform for scalable applications. It also encompasses **[Web](https://dotnet.microsoft.com/en-us/apps/aspnet), [Mobile](https://dotnet.microsoft.com/en-us/apps/maui), [Desktop](https://dotnet.microsoft.com/en-us/apps/desktop), [Cloud](https://dotnet.microsoft.com/en-us/apps/cloud), [Microservices](https://dotnet.microsoft.com/en-us/apps/aspnet/microservices), [Artificial Intelligence](https://dotnet.microsoft.com/en-us/apps/ai), [Game Development](https://dotnet.microsoft.com/en-us/apps/games), and [Internet of Things](https://dotnet.microsoft.com/en-us/apps/iot)**.
- [**npm packages**](https://www.npmjs.com/package/image-js) or [**NuGet packages**](https://www.nuget.org) can be accessed from F#, reusing existing packages to suit your needs.
- **Incremental adoption** is possbile by mixing Javascript or C# with F#.
