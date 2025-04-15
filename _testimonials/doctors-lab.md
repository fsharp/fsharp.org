---
id: doctors-lab
bullets:
- '**Ben Lynch**'
- The Doctors Laboratory
keywords:
- web
- datascience
- healthcare
- etl
quote: I could not recommend F# highly enough – I insist that you try it!
---
The Doctors Laboratory is the largest independent provider of clinical laboratory diagnostic services in the UK. We use F# for the majority of our in house development, from ETL tasks, via reporting scripts to full web applications.

F#’s idiomatic development style, starting with a script in the REPL, before moving functions into a more structured project, makes it trivial to explore different approaches, refactor &c. before committing to a particular approach. It also makes developing more enjoyable and direct – there’s no need to get all the boiler plate/plumbing in place; you can just create a script and start coding. The compiler’s type inference system also means quicker coding, with less ‘cruft’. Features such as pattern matching and discriminated unions also lead to leaner, more expressive and transparent code.

Type providers mean data can be accessed in a few lines, and there are a wealth of community driven OSS projects available here for a heterogeneous range of data sources. If you need to access a data source not supported by existing providers, then the community positively encourages getting involved to provide one yourself, as in fact we did with the MSACCESS provider for the SQLProvider type provider. The community is first rate in terms of providing support in forums like Stack Overflow, gitter, etc. Other community projects such as Paket (dependency management) and FAKE (build too) make build automation a breeze, too.
