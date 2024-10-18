import './signup.css';

export default function SignUp() {
    return (
        <>
            <div>
                <h1>Sign-Up!</h1>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username: (Username)</label>
                    <input type="text" id="username" name="user_name" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: (********)</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Sign-in</button>
            </form>
        </>
    );
}
