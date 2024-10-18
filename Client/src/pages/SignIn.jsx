import './signin.css';

export default function SignIn() {
  return (
    <div className='lin'>

      <div>
        <h1>Login</h1>
      </div>

      <div className='login'>
        <form>

          <div className="form-group">
            <label htmlFor="username">Username: (Username)</label>
            <input type="text" id="username" name="user_name" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: (********)</label>
            <input type="password" id="password" name="password" />
          </div>

          <button className='in' type="submit">Sign-in</button>

        </form>
      </div>

      <div className='signup'>
        <p>Don`t have an account? </p>
        <button className='up'>Sign-up</button>
      </div>

    </div>
  );
}
