---
order: 12
title: WebApps.fs
excerpt_separator: <!--more-->
code: |
    open Browser.Dom
    open Feliz
    
    // DOM manipulation
    let button = document.createElement("button")
    button.textContent <- "Click me!"
    button.addEventListener("click", fun _ -> 
        window.alert("Hello from F#!")
    )
    document.body.appendChild(button) |> ignore

    // React component (Feliz)
    let counter = React.functionComponent(fun () ->
        let (count, setCount) = React.useState(0)
        Html.div [
            Html.button [
                prop.text "-"
                prop.onClick (fun _ -> setCount(count - 1) )
            ]
            Html.span [prop.text count]
            Html.button [
                prop.text "+"
                prop.onClick (fun _ -> setCount(count + 1) )
            ]
        ]
    )
---
## F# for JavaScript and the Full Stack

F# is for both client and server. With [F# web technologies]({{ '/use/web-apps/' | relative_url }}), you can target JavaScript environments directly. This means you can use F# to build web applications, mobile apps, and even serverless functions that run in the cloud.
<!--more-->
- **Type-safe DOM manipulation** catches errors at compile time, not runtime
- **Seamless React integration** with hooks and modern patterns
- **Full npm ecosystem access** with clean TypeScript-like interop
- **Simplified async programming** with F#'s computation expressions for promises

F# brings its powerful type system and immutability to frontend development, eliminating common JavaScript bugs while maintaining full access to the JavaScript ecosystem.