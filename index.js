let Components = (props) => {
  let { head, status, profilepic } = props;
  return (
    <li className="card">
      <img src={profilepic} className="image" alt={head} />
      <div>
        <h1 className="cardheading">{head}</h1>
        <p className="paragraph">{status}</p>
      </div>
    </li>
  );
};

ReactDOM.render(
  <div>
    <h1 className="heading">Users List</h1>
   let  userslist=[
      {head:"Esther Howard",
      status:"Software Developer",
      profilepic:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"},
     { head:"Floyd Miles",
      status:"Software Developer",
      profilepic:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"},
     { head:"Jacob Jones",
      status:"Software Developer",
      profilepic:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png"},
     { head:"Devon Lane",
      status:"Software Developer",
      profilepic:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png"

     } ]
     <ul>
   for(let i of userslist){
  
       let {head,status,profilepic}=i;
<Components head={head} status={status} profilepic={profilepic}/>
   }
   </ul>
  </div>,
  document.getElementById("root")
);
