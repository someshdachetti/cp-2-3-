const Box = (props) => {
  const { color,height, width, text } = props;
  return (
    <div>
      <div>
        {color}
        {width}
        {height}
      </div>
      <h1>{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="card">
    <h1 className="heading">Boxes</h1>
    <div className="spaceing_box">
      
      <Box color=" #fbbf24" height='100px' width='100px' />
      <Box text="small" />

       <Box color="#38bdf8" height='150px' width='150px' />
      <Box text="medium" />

<Box color="#ec4899" height='200px' width='200px' />      
      <Box text="large" />
       
       
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
