import './signin.css';

export default function SignIn() {
  return (
    <div className='lin'>
      <div>
        <h1>Profile</h1>
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
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
