// export default function Tabbutton(props){
// return (<li>
//     <button>
//         {props.children}
//     </button>
//     </li>
// )
// }
export default function Tabbutton({ children, props, isSelected}) {
  //   function handleclick() {
  //     console.log("Hello World!");
  //   }

  return (
    <li>
      {/* <button className="active" onClick={onSelect}>{children}</button> */}
      <button className={isSelected ? "active" : undefined} onClick={props}>
        {children}{" "}
      </button>
    </li>
  );
}
