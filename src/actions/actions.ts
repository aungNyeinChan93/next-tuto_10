"use server";
import { z } from 'zod'
import { fromError } from 'zod-validation-error'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const searchAction = async (prevState: any, formdata: FormData) => {
    const search = formdata.get("search");

    const searchSchema = z.string().nonempty('Not to be empty');

    if (!searchSchema.safeParse(search).success) {
        return { error: fromError(searchSchema.safeParse(search).error).toString() };
    }
    console.log({ search });

};