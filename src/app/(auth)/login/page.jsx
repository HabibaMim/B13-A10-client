'use client';

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { Check } from "@gravity-ui/icons";
import toast from 'react-hot-toast';
import { authClient, signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    
    const router =useRouter();
        const handleLogin = async(e)=>{
    
            e.preventDefault();
            const formData = new FormData(e.currentTarget)
            
            const loginData =Object.fromEntries(formData.entries())
            const { data, error } = await signIn.email({
        ...loginData,
        })

        
        if (error){
            //console.log(error.message)
            toast.error("Invalid email or password")
            return;
        }
    if(!error){
        router.push('/')
         toast.success("Login successful!");
      }
    
       
    };

    const handleGoogleLogin = async ()=>{

        await authClient.signIn.social({
    provider: "google",
  });
    }
    
   return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

        <div className="w-full max-w-md bg-neutral/80 backdrop-blur-md border border-violet-400/20 shadow-xl rounded-2xl p-8">

            <p className="font-bold text-3xl text-center text-violet-300 mb-6">
                Login
            </p>

            <Form onSubmit={handleLogin} className="flex flex-col gap-5" validationBehavior="native">


                <TextField isRequired name="email" type="email">

                    <Label className="text-violet-200 font-medium">
                        Email
                    </Label>

                    <Input
                        className="bg-base-200 border-violet-400/30 text-white w-full focus:border-violet-400"
                        placeholder="abcd@example.com"
                    />

                    <FieldError />

                </TextField>


                <TextField
                    isRequired
                    minLength={6}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 6) {
                            return "Password must be at least 6 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[a-z]/.test(value)) {
                            return "Password must contain at least one lowercase letter";
                        }
                        return null;
                    }}
                >

                    <Label className="text-violet-200 font-medium">
                        Password
                    </Label>

                    <Input
                        className="bg-base-200 border-violet-400/30 text-white w-full focus:border-violet-400"
                        placeholder="Enter your password"
                    />

                    <Description className="text-xs text-gray-400">
                        Must be at least 6 characters with 1 uppercase and 1 lowercase letter
                    </Description>

                    <FieldError />

                </TextField>


                <Button
                    className="bg-violet-500 hover:bg-violet-600 text-white w-full flex items-center justify-center gap-2"
                    type="submit"
                >

                    <Check />

                    Login

                </Button>


                <Link
                    className="w-full text-center text-violet-300 font-medium pt-1 hover:text-violet-200 transition"
                    href="/register"
                >

                    Don’t have an account? Register

                </Link>


                <div className="flex items-center gap-3 my-2">

                    <div className="flex-1 h-px bg-violet-400/20"></div>

                    <p className="text-sm text-gray-400">
                        Or
                    </p>

                    <div className="flex-1 h-px bg-violet-400/20"></div>

                </div>


                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-violet-400/20 hover:bg-violet-400/30 text-violet-100 py-2 rounded-lg transition"
                >

                    <svg className='rounded-full' aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                        </g>
                    </svg>

                    Continue with Google as Tenant

                </button>


            </Form>

        </div>

    </div>
);
};

export default LoginPage;