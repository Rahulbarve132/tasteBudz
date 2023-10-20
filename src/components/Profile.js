import { useEffect, useState } from "react";

const Profile = (Props) => {
  const [Count, setCount] = useState(0);
  const [Count2] = useState(0);
  useEffect ( ()=>{

  } );
  return (
    <div>
      <h2>hello i am login</h2>
      <p>i love to login</p>
      <h2>Name :{Props.name}</h2>
      <h3>Count: {Count}</h3>
      <button onClick={() => setCount(1)}>count</button>
    </div>
  );
};

export default Profile;
