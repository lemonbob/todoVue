# TodoVue

## Contribution to [todoMVC.com](http://todomvc.com) 

Comparison of todoMVC project using Vue.js Framework. (Vue version obviously not in MVC architecture) 

The todolist app has been regarded by many developers as a good baseline by which to gauge performance. Many frameworks claim superior performance, claiming the virtual DOM speeds up reneders. Previously, I have shown this to be complete bunkum using various methods and explanations of how the DOM and render tree actually function. Frameworks do, however, provide convenience. 

Therefore this project assesses the Vue.js framework in a direct comparison with native ES6 (vanilla JS).      

**Assessment results and Performance Calculations (Chrome Developer Tool methodology)** 

| Test                            | ES6 todo      | Vue todo        |
| ---------------------------     | ------------- | --------------- |
| Lines of code(no.)              | 300           | 100             |
| Time for load(ms)               | 14-70         | 226             |
| Time for add item(ms)           | 2-5           | 34              |
| Switch class of 1 element(ms)   | <1            | 26              |
| Switch class of 10 elements(ms) | 6             | 35              |
| Delete 10 element from DOM(ms)  | 3             | 47              |

Previously, tests have been done with other frameworks (e.g. React.js). In comparison, Vue.js is quite performant and it has a very low overhead. However, it can clearly be seen that it is still extremely slow compared to highly optimized Javascript. 

Having said that, the numbers are not too bad. For example, badly written Javascript produced results in the above tests for class switching and add item tests of around 22ms. 

>>Vue.js is comparable to badly programmed Javascript.

Is that something to be proud of??? This is the crux of the issue. In terms of time taken to code (lines of code and the ease of development), the numbers are impressive. Vue.js required only 100 lines of code and took a matter of hours to build. With its two way data-binding, watchers, computed properties and event handlers it literally flies in the developer convenience department. The conclusion can only be that it stands head and shoulders above React.js and Angular4+. Its speed is also better than the aforementioned frameworks.

However, for competent and experienced coders, does this convenience really make up for the 10-20 fold loss in performance? Writing state management routines isn't that difficult and whilst it may be claimed that as the project grows the complexity will also scale, the fact is that Vue.js comes with pitfalls with scale, too. One set of problems is just traded for another.     

In conclusion, then, Vue is a solid framework with some cool features. I will certainly be using it. In my opinion, Vue is probably the best of the frameworks to date. The only caveat is that any claims as to performance when made to paying customers must be very carefully qualified. 

>>Vue is fast compared to other frameworks, it is not fast in the absolute sense ... in fact it is very slow compared to good code. 

Simply put, if you had told a client prior to contract that their system would potentially run up to 20 times slower than optimized JS but would be slightly faster to build in a framework, would they really have been willing to pay as much for it. In essence, but for the false claims about performance of frameworks, would they have signed the contract.

**The crux of the issue is therefore — always be honest with clients. As the experts when advising clients, there could potentially be legal liability for misrepresentation of claims based on internet hearsay regarding the performance of JS frameworks.**
