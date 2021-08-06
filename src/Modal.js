// this is a testCase for detecting componentUnMount when an application closes
// can ignore for htis project, but just a test that was created
import React, { useEffect, useState } from 'react';

const Modal = () => {
    useEffect(() => {
        console.log('oopen')
        return () => {
          console.log('close')
          // under the return statement will bethe compoentUnMount which is after you close the application
        };
      }, []);
    // these array looking things are basically to keep track of the states and if any of the states inside changes, then the useEffect would run
    return <h1>Modal</h1>
}

export default Modal