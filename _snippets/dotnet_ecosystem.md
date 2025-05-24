---
order: 1
title: DotNet.fs
excerpt_separator: <!--more-->
code: |
    // Example: Extracting information from text with regular expressions
    open System.Text.RegularExpressions
    let input = "Emails: user1@test.com, user2@domain.org, invalid-email"
    let pattern = @"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"
    for matched in Regex.Matches(input, pattern) do
        printfn $"Found email: {matched.Value}" // user1@test.com and user2@domain.org

    // Example: Image processing
    open SixLabors.ImageSharp // NuGet package: SixLabors.ImageSharp
    open SixLabors.ImageSharp.Processing
    use image = Image.Load "input.png"
    image.Mutate(_.Resize(300, 200).Flip(FlipMode.Horizontal ||| FlipMode.Vertical) >> ignore)
    image.Save "output.jpg"
    ---
## Full access to .NET ecosystem

F# has seamless .NET integration which lets you work with existing .NET libraries and frameworks. Anything written in C# can be used from F# and vice versa.
<!--more-->
- **[Web](https://dotnet.microsoft.com/en-us/apps/aspnet), [Mobile](https://dotnet.microsoft.com/en-us/apps/maui), [Desktop](https://dotnet.microsoft.com/en-us/apps/desktop), [Cloud](https://dotnet.microsoft.com/en-us/apps/cloud), [Microservices](https://dotnet.microsoft.com/en-us/apps/aspnet/microservices), [Artificial Intelligence](https://dotnet.microsoft.com/en-us/apps/ai), [Game Development](https://dotnet.microsoft.com/en-us/apps/games), and [Internet of Things](https://dotnet.microsoft.com/en-us/apps/iot)** frameworks are ready to be used.
- [**NuGet packages**](https://www.nuget.org), all hundreds of thousands of them, reduce your code complexity.
- **Mixing C# and F#** in the same solution is possible for incremental adoption.
