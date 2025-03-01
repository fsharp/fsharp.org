---
id: JamieDixon
bullets:
- '**Jamie Dixon**'
- Coder
- Cary, North Carolina
keywords:
- analytics
- open data
quote: F# makes it easy to spend your time answering interesting questions about the domain and less time answering questions about the language.
---
I did a public records request in my town of Cary, North Carolina.  The dataset included appx 25,000 traffic stop records for 2012. Using F#, I did some basic statistical calculations to determine that when you are driving is much more important than where you are driving in terms of getting stopped.  In fact, the term 'speed trap' is a misnomer.  In addition, the data supports the notion that there is a monthly quota of tickets being given.   You can read the entire analysis [here](http://jamessdixon.wordpress.com/2014/01/07/traffic-stop-analysis-using-f/)

Also, I created a KNN classifier using the date/time of the stop and determined that when you get stopped impacts weather you get a verbal warning versus an actual ticket.  You can read the entire analysis [here](http://jamessdixon.wordpress.com/2014/01/14/traffic-stop-disposition-classification-using-f-and-knn/)

Finally, I did a public records request in the county in which I live: Wake County North Carolina.  The dataset included appx 5,000 health inspection scores for 2012. Using F#, I did some basic statistical calculations to determine that there is little variance of when a restaurant gets inspected and their final score.  An interesting offshoot is that some particular restaurants scored lower across all inspectors - except when head inspector did the inspection, then they actually scored better.  There might an inherent cultural bias by the inspectors.  You can read the entire analysis [here](http://jamessdixon.wordpress.com/2014/02/11/analysis-of-health-inspection-data-using-f/)

F# was great because I spent less time figuring out how to answer my question and more time actually answering the question.  The type providers made consuming and integrating hetrogenous datasets a snap and the pattern matching feature reduced the complexity of the code by an order of magnitude (compared to C#).   Finally, by using unit tests and immutable data types, I have a bug-resistant code base that can be extended to other scenarios.
    