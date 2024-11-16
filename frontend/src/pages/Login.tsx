import { assets } from "../assets"

const Login = () => {
  return (
    <section className="h-lvh w-full">
        <div className="flex flex-row justify-center h-full mx-auto">
            <div className="flex flex-col justify-between items-center md:items-start mx-auto w-full px-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-5">
                <div className="flex flex-row gap-2 items-center text-secondary text-sm max-w-[410px] w-full cursor-pointer">
                    <p>{`<`}</p>
                    <p>Back</p>
                </div>
                <div className="flex flex-col gap-y-3  max-w-[410px] w-full">
                    <h1 className="text-4xl text-primary font-bold">Sign In</h1>
                    <p className="text-base text-secondary">Enter your email and password to sign in!</p>
                    <div className="w-full flex items-center gap-3 text-secondary mt-2"><hr className="w-full"/><p>or</p><hr className="w-full"/></div>
                    <form>
                        <label htmlFor="email" className="text-tertiary flex mt-3 font-medium">Email<p className="text-primary">*</p></label>
                        <input type="email" name="email" id="email" placeholder="mail@simple.com" className="text-secondary rounded-2xl outline-none border border-gray-300 py-4 px-6 w-full mt-2" required/>
                        <label htmlFor="password" className="text-tertiary flex mt-6 font-medium">Password<p className="text-primary">*</p></label>
                        <input type="password" name="password" id="password" placeholder="Min. 8 characters" className="text-secondary rounded-2xl outline-none border border-gray-300 py-4 px-6 w-full mt-2" required/>
                        <div className="flex justify-between mt-8">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" name="checkbox" id="checkbox" className="w-5 h-5 accent-primary"/>
                                <p className="text-sm">Keep me logged in</p>
                            </div>
                        <p className="text-primary font-medium text-sm cursor-pointer">Forgot password?</p>
                        </div>
                        <button type="submit" className="rounded-2xl w-full py-4 bg-primary hover:bg-red-500 text-white mt-8 mb-5 text-sm">Sign In</button>
                    </form>
                    <span className="text-tertiary flex gap-1">Not registered yet?<p className="text-primary cursor-pointer font-semibold">Create an Account</p></span>
                </div>
                <div className=" max-w-[410px] w-full">
                    <p className="text-secondary text-center font-medium text-sm">© 2023 Spark Drive. All Rights Reserved. </p>
                </div>
            </div>
            <div className="text-center text-white bg-primary mx-auto hidden md:flex flex-col justify-center items-center gap-y-20 w-full px-8 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-5">
                <img src={assets.logo} alt="logo" />
                <div className="border-2 border-white/20 py-5 md:px-10 lg:px-16 xl:px-20 rounded-3xl">
                    <p className="text-lg font-light">Learn more about Air Drive on</p>
                    <p className="font-semibold text-3xl">Spark.pl</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login