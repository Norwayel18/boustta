


export const Add =(task)=>{return{type:"Add",payload:task}}
export const Edit =(id,newTxt)=>{return{type:"Edit",payload:id,newTxt:newTxt}}
export const Delete =(id)=>{return{type:"Delete",payload:id}}