// export default function Todo(props)  {
//     return (
//         <li>Task {props.task}</li>
//     )
// }

// export default function Todo({task, isDone})  {

//     if(isDone === true){
//         return <li>Successful {task}</li>
//     }
//     else {
//         return <li>Working {task}</li>
//     }
// }

// Conditional Rendering -3


// export default function Todo({task, isDone})  {

//     return (
//         <li>{isDone ? 'Finished' : 'WOrk on'} : {task}</li>
//     )
// }

// Conditional Rendering -4

// export default function Todo({task, isDone})  {

//     return (
//         <li>{task} {isDone && ':Done'}</li>
//     )
// }

export default function Todo({task, isDone})  {

    return (
        <li>{task} {isDone || ':Do it'}</li>
    )
}