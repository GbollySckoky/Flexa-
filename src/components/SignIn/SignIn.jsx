import { Link } from "react-router-dom"


const SignIn = () => {
  return (
    <div>
        <section className="bg-Blue h-screen">
            <div>
                <h1>Welcome Back</h1>
                <p>Sign in to continue  with Flexa</p>
            </div>
            <form>
                <div>
                <input type="email" placeholder="Email Address"/>
                </div>
                <div>
                    <input type="password" placeholder="Password" />
                </div>
                <div>
                <Link  to={"#"}>
                Forgot Password?
                </Link>
                </div>
               <div>
                <button>Get Started</button>
               </div>
            </form>
        </section>
    </div>
  )
}

export default SignIn