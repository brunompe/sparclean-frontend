import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import sparcleanWhite from "../assets/3.svg";
import { ILoginInput } from "../interfaces/ILoginInput";
import { login } from "../services/api/login";

export default function Login() {
  const { register, handleSubmit } = useForm<ILoginInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    const res = await login(data);
    if (res) {
      const token = res.data.access_token;
      localStorage.setItem("access_token", token);
      navigate("/");
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block bg-blue-500">
          <img
            src={sparcleanWhite}
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 flex flex-col  justify-center">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                type="text"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            ></input>
          </form>

          <div className="mt-6 text-blue-500 text-center">
            <a href="#" className="hover:underline">
              Sign up Here
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
