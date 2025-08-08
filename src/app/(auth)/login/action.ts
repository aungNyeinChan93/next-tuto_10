'use server'
import { z } from 'zod'
import { redirect } from "next/navigation";

export async function createAccount(prevState: { email: string, password: string }, formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const LoginSchema = z.object({
        email: z.string().email(),
        password: z.string().nonempty()
    })

    const validateUser = LoginSchema.safeParse({
        email, password
    })

    if (!validateUser.success) {
        console.error(validateUser.error.format())
        return { error: 'credential Error' };
    } else {
        return redirect('/')
        // return { success: "Account created successfully!", prevState };
    }


    // ... logic to save the user ...
    // console.log({ email, password, initialState });

}