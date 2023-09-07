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
- Routes Required

  - Home - `/`
  - About - `/about`
  - Contact - `/contact`
  - Error Page - 404

- Outlet

```
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
```

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

```
root.render(<RouterProvider router={appRouter} />);
```

#### Routing Methods

1. Client Side Routing

   - No Network Calls - Check in Inspect > Network
   - allows your app to update the URL from a link click without making another request for another document from the server

2. Server Side Routing
   - It is the traditional way of handling routes in web applications.
   - When a user clicks a link, the server requests a new page or data from another computer.
   - The old page is discarded and the HTML of the new page is loaded.
