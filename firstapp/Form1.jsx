import React, { useState } from 'react';

const Form = () => {
    
    const [name, setName] = useState("")
    const [pass, setPassword] = useState("")
    const [arr, setArr] = useState([]);

    const handleform = (e) => {
        e.preventDefault();
        console.log(name, pass)
        setArr([...arr, { name: name, pass: pass }]);
        setName("");
        setPassword("");
        e.target.reset();
    }



    return (
        <div>

            <form onSubmit={handleform}>
                <input type="text"
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} /><br /><br />
                <input type="password"
                    placeholder='Enter Password'
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button type='submit'>Submit</button>
            </form>
            <br /><br /><br />

            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>name</th>
                        <th>password</th>
                    </tr>
                </thead>

                <tbody>
                    {arr.map((ele, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.pass}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )
}

export default Form;
