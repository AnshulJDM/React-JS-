import React,{useState} from 'react';

const Form1 = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "", 
      });
      const [arr, setArr] = useState([]);
      
      const handleSubmit = (e) => {
        e.preventDefault();
        setArr([...arr, input]);
    
       
        
        setInput({
          name: "",
          email: "",
          password: "",
        });
        e.target.reset();
      };
    
      return (
        <div className="main">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
          <br />
          <br />
          <table border={1} cellSpacing={1}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                
              </tr>
            </thead>
            <tbody>
             {arr.map((ele,index)=> (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.password}</td>
    
              </tr>
             ))}
            </tbody>
          </table>
        </div>
      );
    }

export default Form1;
