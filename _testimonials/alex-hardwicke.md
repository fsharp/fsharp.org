---
id: alex-hardwicke
bullets:
- Alex Hardwicke
- Surge
keywords:
- apps
- conciseness
- torrent
- winrt
quote: Many languages are evolving to be ready for the future ... F# is already there.
---
When starting to work with Microsoft's "Modern" WinRT apps, I started by taking the obvious route and used C#. This worked, and I wrote good, functional apps. Despite this, modern programming with C# has problems. I encountered these when writing my BitTorrent app, Surge, and eventually rewrote the app using F#. Doing this gave me better performance, fewer bugs and better user satisfaction.

Users expect performant software with an always responsive UI, and frequently expect the apps to work with and display large amounts of data. This leads to us, as developers, working with complex data structures, detailed lists, and to use techniques like parallelism and asynchrony. C# has gained support for these over time, through things like Linq and async/await, but these are poor imitations of the original F# implementations and have flaws.

Using a modern, functional language that provides first-class support for things we need in modern development is a no-brainer. Immutability-first as a programming technique has fixed more bugs and bad code in my applications than almost anything else I've ever looked at, and it's something C# will never gain.

It's not just C#, either. Many languages are evolving to be ready for the future, adding features that support the needs of a modern programming language, but F# is already there.
    