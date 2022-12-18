# Front Web
It was built using [React.js](http://reactjs.org) and [MUi](https://mui.com/).
And to the  followed the [React Bulletproof](https://github.com/alan2207/bulletproof-react/tree/master/src/features/discussions/api)

## The web-site

It is a Single Page Application (SPA), so it uses the react-router-dom. But it has only the main page.

## The terminal
With it, you can control the rovers and start the plateau. 
### Commands

> strings must be separated with spaces 

The first time it will show a startup page with an input text and a button
on the input you can insert the plateau coordinates (X, Y) upper-right.

After that it will show a REPL like component. So you can start the rovers:
- X Y <N , S , E, W>
- movements <L, R, M>

This component was built to use with all repl like connection.
So we can integrate not only with Mars rovers, but with everything that works like it.