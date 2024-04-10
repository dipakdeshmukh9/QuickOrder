import { useState } from "react";

const User = ({name}) => {

    const [count , setCount] = useState(0);
    const [count2] = useState(1);

return (
    <div className="user-card">
        <h1>count= {count}</h1>
        <h1>count= {count2}</h1>
        <h1>Name : {name}</h1>
        <h2>Location : pune</h2>
        <h3>Contact : dipak.deshmulh1911@gmail.com</h3>
    </div>
)
}
export default User;