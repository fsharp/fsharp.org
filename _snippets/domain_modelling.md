---
order: 15
title: PaymentSystem.fs
code: |
    type CardInfo = { Number: string; Expiry: string; Cvv: string }
    type BankInfo = { AccountNumber: string; RoutingNumber: string }
    type PayPalInfo = { Email: string; Token: string }
    
    type PaymentMethod =
        | CreditCard of CardInfo
        | BankTransfer of BankInfo
        | PayPal of PayPalInfo
    
    type Payment = {
        Amount: decimal
        Method: PaymentMethod
    }
    
    let processPayment payment =
        match payment.Method with
        | CreditCard card -> 
            printfn
                "Processing $%.2f via card %s"
                payment.Amount
                card.Number
        | BankTransfer bank ->
            printfn
                "Processing $%.2f via bank account %s"
                payment.Amount
                bank.AccountNumber
        | PayPal pp ->
            printfn
                "Processing $%.2f via PayPal account %s"
                payment.Amount
                pp.Email
---
## Making Invalid States Unrepresentable
This example showcases F#'s ability to create precise domain models that prevent errors at compile time.

- **Discriminated unions** model each payment method with exactly the fields it needs
- **No "impossible" states** can exist - a credit card payment can't have a routing number
- **Exhaustive pattern matching** ensures every payment type is handled properly
- **Type safety** catches errors at compile time that would be runtime bugs in other languages

By modeling your domain using F#'s algebraic data types, you create self-documenting code where the type system itself enforces business rules. This powerful technique shifts many bugs from runtime to compile time, dramatically improving software reliability.