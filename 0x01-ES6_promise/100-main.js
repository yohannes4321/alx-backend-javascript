import asyncUploadUser from "./102-make"

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();