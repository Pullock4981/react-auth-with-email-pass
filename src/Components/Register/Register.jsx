import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";


const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("form submited")
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        // create user

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="mt-5">
            <h3 className="text-2xl font-bold text-center">Please register..</h3>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center mt-5 gap-5">
                    <input className="border-2 p-2 w-1/2" type="text" name="name" placeholder="Name" /> 
                    <input className="border-2 p-2 w-1/2" type="email" name="email" placeholder="Email" /> 
                    <input className="border-2 p-2 w-1/2" type="password" name="password" placeholder="password" />
                    <input className="border-2 p-2 w-1/2 cursor-pointer" type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;