import {z} from 'zod';

export const registerSchema = z.object({
    username:z.string({
        required_error:"Username is required"
    }),
    password: z.string({
        required_error:"Password is required"
    }).min(6,{
        message:"Password must be at least 6 characters"
    })
});

export const loginSchema = z.object({
    username:z.string({
        required_error:"Email is required"
    }).email({
        message:"Invalid Email"
    }),
    password: z.string({
        required_error:"password is required",
    }).min(6,{
        message:"Password must be at least 6 characters"
    }),
}); 