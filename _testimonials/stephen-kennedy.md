---
id: stephen-kennedy
bullets:
- '**Stephen Kennedy**'
- Readify
keywords:
- mapping
- parsing
- commercial
quote: "F#'s language features not only made it a no-brainer for our project, but allowed us to produce composable, deterministic, and concise code. "
---
I was consulting at engagement for a large multi-national organization that produces financial software where the need to rewrite the component that deals with importing data from various flat-file formats was identified.  The component needed to handle complex business logic and user defined mapping.

F# was chosen over C# as it provided a large number of language features related to mapping out of the box.  Code quotations, discriminated unions, partial application, matching, and active patterns were used extensively.  Having objects immutable by default made the logic very deterministic and easy to maintain / follow.

I was incredibly happy with the results, particularly with the declarative nature I could use to describe the various mappings, and their relationship with other mappings.  This should make it much easier for other developers and the business analysts to figure out what logic is executed when a particular mapping occurs.  The core logic saw a big reduction in code size, however, the real saving was in the entity specific mapping logic which saw the lines of code required go down by more than 90 percent!

F# is definitely a language I will be recommending to clients going forward.
