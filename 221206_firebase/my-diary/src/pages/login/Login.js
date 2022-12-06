import { useState } from 'react'
import styles from './Login.module.css'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleData = (event) => {
        console.log(event.target.type);
        if (event.target.type === 'email') {
            setEmail(event.target.value);
        } else if (event.target.type === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
    }

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>로그인</legend>

                <label htmlFor="myEmail">email : </label>
                <input type="email" id='myEmail' required value={email} onChange={handleData} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id='myPassWord' required value={password} onChange={handleData} />

                <button type='submit' className={styles.btn}>로그인</button>
            </fieldset>
        </form>
    )
}