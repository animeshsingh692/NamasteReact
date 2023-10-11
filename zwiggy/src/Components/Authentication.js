import { useUserAuth, useUserContext } from './UserContext';

const Authentication = () => {

    const { isAuthorized, setIsAuthorized } = useUserAuth();

    console.log(">>>>>>>>>", isAuthorized);
    const { setName } = useUserContext();

    const handleAuth = (e) => {
        e.preventDefault();
        let name = e.target.username.value;
        let pass = e.target.password.value;
        if (name.length >= 3 && pass.length >= 3) {
            setName(name);
            setIsAuthorized(true)
        } else {
            alert('Name and password should be more than 2 characters')
        }

    }
    return (
        <div className="auth">
            <form onSubmit={handleAuth}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="username" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Authentication;