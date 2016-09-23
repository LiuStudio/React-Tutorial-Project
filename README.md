# React-Tutorial-Project
A Self Taught Project for me to learn and playaround with React, very simple project! Looking forward more to come!

## A little background of me.
As of now, I have been learning and playing with web development for 9 months. 
I started from taking online courses from coursera. I pick HongKong University of Technology fulls stack web developer certificate project which including 5 courses and one project. 
I have learned HTML, CSS, JavaScript, BootStrap, AngularJS, Ionic, NodeJs, Express and MongoDB. 
I built up a MEAN full stack web application as a completion of this certificate project, which has the most basic features for almost all the applications: user registration and login and view their own profile. 

After building my first project, I have learned about React, and here i am, playing around with react start from this week! 

## A little bit understanding of React, from a very beginner
### Recommendation learning materials for beginners who is familiar with AngularJS and some JavaScript
I like to watch some youtube tutorial videos to get a feeling about it. some good ones are 
* https://www.youtube.com/watch?v=pTHCwUdGFkc 
This one is great start, freshly online 12 days ago! I love the way they explain why and how to think and comparison and highlight of the pros and cons between different framework. 
* https://www.youtube.com/watch?v=IR6smI_YJDE 
Code along with react for a simple application, I followed this video and code everything up from scratch, and the last two task ( adding deletetask and add validation, I already did it on my own! ) There are some bugs in the code, you need to watch out, but overall, this lead me in to the door and my first hands on experience, great video!
* https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b 
Ultimate fast learning video list for learning react! Great great video! I am on lesson #7 now! having a lot of fun!
* https://facebook.github.io/react/docs/thinking-in-react.html 
"thiking in React" -- facebook react official site tutorial article, great great article, which cleared my mind of how to patition a problem and think in react structure! Love it love it!
Also, that website is extremely useful, i enjoy reading them in my lesure time.

### My Understanding of React( as of September 23rd, 2016)
* React is a javascript framework that use the concept of "virtual DOM" to "summarize/concentrate/abstract" all the information to generate a html view into an object called "state". By compartmenting the webpage into different element, which is called "component" in react, the view rendering job, which is the most tedious work to interact with DOM, is done and hide by react framework. Designer just need to spend time to abstract the webpage into components, leveraging concept of modular programing in javascript( means each module can be used anywhere and reused- sort of similar to hardware programing in verilog). That being said, the big difference I have learned react from angular, is angular use ng-model as two-way binding data and view, but react slice/seperate these two ways and give user the options/duty to take care of them seperately. 
There are two concept in react are very important: props and state. Well, think of this way, the way react work/structure is you have top module and inside top module, usually you have level 2 module, and inside them you have lever 3, level 4 module, ideally, maybe, it is to have each bottom level module only incharge of one particually view, and it can be reusable. Usually, these end level module usually need an "input" through interface from top/parent to be able to render the correct view. props, is the interface, and it is "input" only interface ( from verilog programing perspective..). State, on the otherside, has more intelligence, usually reside in top level only, has all the information/variable that can regenerate the whole web page. functions that can change the state(nothing but a bunch of object), are in top module, as well. and these functions are passed in to lower/children module as props, so that children can call the function reside in the top level module to change the state, and whenever state changes, react re-render the view automatically. The beauty part is react only re-render the views that related to the changed state, and don't have to re-load the whole DOM everytime anything changes.

others, like each component can only have one render function, which return the jsx syntax. 
each component can have constructor function, or not, but constructor function has to have super() or super(props) in its first line to initialize the state. 
each component is a class/object, which can have a lot of function defined in it.

some ES6 knowledge
const = assignment
improt = requrie
=>{} = function(){}

many more...to come :)