---
id: james-moore
bullets:
- James Moore
- Senior Software Developer
- Digium, Inc
keywords:
- iOS
- Android
- Xamarin
- reactive
quote: Using F# for cross-platform mobile development (Android, iOS) saves development time
---
We wanted to develop our Android and iOS applications using as much shared code as possible.
We built a reactive architecture using F# actors (aka mailbox processors) to build a very robust
multithreaded system that was easily portable between Android and iOS.

Our F# actors (shared across iOS and Android) expose .Net IObservables that are consumed by UI systems written for the native platforms.
Dividing the system in that way allowed for testable multithreaded code that would have been difficult to write in other .Net languages.
