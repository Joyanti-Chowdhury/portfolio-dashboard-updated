import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/redux/features/auth/loginApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { Eye } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";

type TLoginFormData = {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<TLoginFormData>();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit : SubmitHandler<TLoginFormData> = async (data) => {
    const toastId = toast.loading("logging in");

    try {
      const loginInfo = {
        email: data.email,
        password: data.password,
      };
      
      const res = await login(loginInfo).unwrap()
      const token = verifyToken(res.token);
      dispatch(setUser({user: loginInfo, token: token}))
      toast.success("Login Done.", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="my-10 flex place-content-center">
      <div className="bg-slate-100 shadow-md rounded px-8 py-5 w-full md:w-3/5 lg:w-2/5">
      {/* <div className="flex items-center gap-5">
          <img className="w-[40px] h-[40px] rounded-full shrink-0" src="https://i.ibb.co/VMk1CZQ/images.jpg" alt="" />
          <h1 className="uppercase font-bold text-2xl">Joyanti </h1>
        </div> */}
        <h1 className="text-3xl font-bold py-7 text-center">Login</h1>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              className="shadow  border rounded w-full py-3 px-3 text-gray-700"
              type="email"
              {...register("email")}
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              className="shadow  border rounded w-full py-3 px-3 text-gray-700"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              name="password"
              placeholder="Password"
              required
            />
            <Eye
              className="password-toggle mt-2"
              onClick={togglePasswordVisibility}
            ></Eye>
          </div>
          <div className="w-full text-center">
            <Button  type="submit" className="uppercase w-full">
              login
            </Button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
