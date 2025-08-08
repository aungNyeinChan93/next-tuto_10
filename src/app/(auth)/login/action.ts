'use server'
import { z } from 'zod'
// import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createAccount(initialState: any, formData: FormData) {
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
        return { error: 'crendial Error' };
    } else {
        return { success: "Account created successfully!" };
    }


    // ... logic to save the user ...
    // console.log({ email, password, initialState });
    // return redirect('/')

}