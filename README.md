<!--  -->
DailsyUi

## Loading . . . . . . . . . . . . . components website link
[https://www.skypack.dev/view/react-spinners-kit](https://www.skypack.dev/view/react-spinners-kit)

## Learning Redux toolkit 1/1/2024
## small concept of Redux Toolkit and Learning purpose , Please Ignore it.
how to use redux toolkit 

#####
```js
/* created a store 
App--->store.js
*/
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({});
```
#### Reducers

```js
// make Slices
// NanoId always gives unique id 
import { createSlice  ,nanoid} from "@reduxjs/toolkit";
```
```js

import { createSlice  ,nanoid} from "@reduxjs/toolkit";
const initialState ={
    wishlist:[{id:1,title:"",itemStatus:"",link:""}]
}
const wishlistSlice = createSlice({
 name:"wishlistfeature",
initialState,
/* reducers is the combination of 

properties and functions 
{
    properties:functions
}
*/
reducers:{

}

})

export {wishlistSlice}
```