// export default function ToDo({ task, isDone }) {
//   if (isDone === "true") {
//     return <li>Task: {task}</li>;
//   } else {
//     return <li>Do now: {task}</li>;
//   }
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//   if (isDone) {
//     return (
//       <li>
//         Task: {task}, Time: {time}
//       </li>
//     );
//   } else {
//     return <li>Do now: {task}</li>;
//   }
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       Done: {task} Time:{time}
//     </li>
//   ) : (
//     <li>Not Done: {task}</li>
//   );
// }

export default function ToDo({ task, isDone, time = 0 }) {
  return (
    isDone && (
      <li>
        Done Tasks: {task} time: {time}
      </li>
    )
  );
}
