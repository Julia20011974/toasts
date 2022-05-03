# Toast Library

Support version for React 17 ❤️ 

## Instalation

```
$ npm install --save cathere-toast
$ yarn add cathere-toast
```

## Features
- You can create toast with default params
- Yo can create toast with params
  - bg 
  - img 
    - info ( default )
    - success
    - warning
    - error
  - msg
  - time
  - margin
  - animation
    - zoom ( default )
    - reversal 
  - color
  - location
    - top-right (default)
    - top-center
    - top-left
    - bottom-right
    - bottom-center
    - bottom-left


## The gist

```jsx
  import React from 'react';

  import { useRef } from "react";
  import { ToastPortal } from "cathere-toast";
  
  function App(){
   const toastRef = useRef();
   
   const showInfo = () => {
      toastRef.current.add()
   } 
   
   const showSuccess = () => {
     toastRef.current.add({ 
      bg:'#99FFCC',
      img:'success',
      msg: "Success toast example",
      time: 5000,
      margin: '10px',
      animation: 'zoom',
      color:'white' })
   }
  
  return (
      <div>
        <button onClick={showInfo}>Info</button>
        <button onClick={showSuccess}>Succes</button>
        <ToastPortal location='top-right' />
      </div>
    );
  }
```
