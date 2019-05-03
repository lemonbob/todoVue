# TodoVue

## Contribution to [todoMVC.com](http://todomvc.com) 

Comparison of todoMVC project using Vue.js Framework. 

The todolist app has been regarded by many developers as a good baseline by which to gauge performance. Many frameworks claim superior performance, claiming the virtual DOM speeds up reneders. Previously, I have shown this to be complete bunkum using various method. Framworks do, however, provide convenience, however it is convenience at a cost. 

Therefore this project assesses the Vue.js framework in a direct comparison with native ES6 (vallia JS).      

**Assessment results and Performance Calculations (Chrome Developer Tool methodology)** 

| Test                        | ES6 todo      | Vue todo        |
| --------------------------- | ------------- | --------------- |
| Lines of code               | 300           | 100             |
| Time for load(ms)           | 14            | 226             |
| Time for add item(ms)       | 2             | 34              |
| Switch class on 1 element   | 2             | 26              |
| Switch class of 10 elements | 2             | 35              |
| Delete 10 element from DOM  | 2             | 35              |

Previously, tests have been done with other frameworks (eg React.js) In comparison, Vue.js is quite performant and it has a very low overhead. However, it can clearly be seen that it is still extremely slow compared to highly optimized Javascript. 

Having said that, the numbers are not too bad. For example, badly written Javascript produced results in the above tests for class switching and add item tests of around 22ms. 

>>Vue.js is comparable to extremely poorly programmed code.

Is that something to be proud of??? This is the crux of the issue. In terms of time taken to code (lines of code and the ease of development), the numbers are impressive. Vue.js required only 100 lines of code and took a matter of hours to build. With its two way data-binding, watchers, computed properties and event handlers it literally flies in the developer convenience department. The conclusion can only be that it stands head and shoulders above React.js and Angular. Its speed is also better that the aforementioned frameworks.

However, for competent experienced coders, the above convenience really doesn't make up for the 10-20 fold loss in performance. Writing state management routines isn't that difficult and whilst it may be claimed that as the project grows the complexity will also scale, the fact is that Vue.js comes with pitfalls too with scale. One set of problems is just traded for another.     

In conclusion, then, Vue is a solid framework with some cool features. For a development team who want to trade performance for structure (and where the team lacks the experience ... or desire ... to build a custom architecture) Vue is probably the best of frameworks to date. However, it must be mentioned that any claims as to performance when made to paying customers will likely be false. Simply put, if you told a client they could have a system that ran 20 times slower just because it was slightly easier to build, would they be as willing to pay for that system compared to if you told them it was super performant.

**The crux of the issue is therefore — always be honest with your clients. I fear there could be law suits against development firms making inaccurate claims based on essentially developer hearsay from the internet regarding the performance of JS frameworks.** 


