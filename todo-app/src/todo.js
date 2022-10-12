import React from 'react';

const ToDo = ({todo}) => {
    const progress = 100*todo.amountDone/todo.amountNeeded;
    // if(progress == 100){
    //     document.documentElement.style.setProperty(--color-progress, $00FF00);    
    // }
    return (
       <div class="progress">
           <p1>{todo.task} progress: {progress}%</p1> 
       </div>
    );
};

export default ToDo;