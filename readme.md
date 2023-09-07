# Food Ordering App 🚀

## Using Swiggy API 💪

### Tech Used

- React `v18`
- Babel
- Parcel
- React Router DOM `v6.15`

### Parcel Features

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

### Namaste Food - Component Structure

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - RestaurantContainer
  - RestaurantCard
    - Img
    - Name of Res, Star Rating, cuisine, delery tie
- Footer
  - Copyright
  - Links
  - Address
  - Contact

### Types of Components

1. React Class Based Components [OLD]
   - Old Way of Writing Components
   - Basically Classes in JavaScript
2. React Functional Components [NEW]
   - New Way of Writing Components
   - Basically Functions in JavaScript

### Types of Export/Import

1. Default Export/Import:

   ```
   export default Component;
   import Component from "path";
   ```

2. Named Export/Import:

   ```
   export const Component;
   import {Component} from "path";
   ```

### React Hooks

(Normal JS utility functions)

1. useState() - Superpowerful State Variables in react
2. useEffect()

### useState()

```
const [btnNameReact, setBtnNameReact] = useState("Login");
```

- Never create a useState outside the component => It throws an error
- Never create a useState inside a
  - conditional statement (If else etc)
    ```
    if(){
        const [btnNameReact, setBtnNameReact] = useState("Login");
    }
    ```
  - Loops (For Loops, etc)
    ```
        for(){
            const [btnNameReact, setBtnNameReact] = useState("Login");
        }
    ```
  - Functions
    ```
    function functionName(){
        const [btnNameReact, setBtnNameReact] = useState("Login");
    }
    ```
- useState - state variables are meant to be created inside a functional components at the root level (First Level) on the top of the any code

### useEffect()

- useEffect takes a callback function and a dependency array

1. If no dependency array => useEffect is called on every render

```
useEffect(() => {
    console.log("useEffect");
});
```

2.  If depenedency array is empty = [] => useEffect is only called on initial render

- JUST ONCE

```
useEffect(() => {
    console.log("useEffect");
}, []);
```

3. If depenedency array has something = [btnNameReact] => useEffect is called when that dependecy in that dependency array gets updated/changed

```
useEffect(() => {
    console.log("useEffect");
}, [btnNameReact]);
```

- useEffect is called everytime btnNameReact get updated

#### React Router DOM

- Before creating a routing, we need to do routing configuration @`App.js`
- `/about`
