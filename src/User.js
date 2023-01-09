// component (must start with capital letters)
// usually diff files for diff components
export const User = (props) => { // props (the argument we passes into the document)
  return (
    <div>
        <h1> {props.name} </h1> 
        <h2> {props.age} </h2>
    </div>
  );
}
