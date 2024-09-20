import { useState } from "react"

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onInputChange = (event) => {
        console.log(event);
        const element = event.target;
        switch (element.name) {
            case "name":
                setName(element.value);
                break;
            case "email":
                setEmail(element.value);
                break;
            case "password":
                setPassword(element.value);
                break;
            default:
                return;
        }
    }

    const onSubmit = () => {
        alert("Data sent to server!");
    }

    return (
        <main>
            <input onChange={onInputChange} value={name} name="name" placeholder="Name" />
            <input onChange={onInputChange} value={email} name="email" placeholder="Email" />
            <input onChange={onInputChange} value={password} name="password" type="password" placeholder="Password" />
            <button onClick={onSubmit}>
                Register
            </button>
        </main>
    )
}

export default Register