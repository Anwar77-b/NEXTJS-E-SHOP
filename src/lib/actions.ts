"use server";
import connectDB from "@/lib/mongodb";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function hashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}
export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export const signup = async (prev: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData);
  if ((data.fullName as string).split(" ").length < 2) {
    return { error: "Please enter your full name" };
  }
  if (data.password !== data.passwordConfirm) {
    return { error: "Passwords do not match" };
  }
  try {
    await connectDB();
    const user = await User.findOne({ dispName: data.displayName });
    if (user) {
      return { error: "Display name already exists" };
    }
    const hashedPassword = await hashPassword(data.password as string);
    const newUser = await User.create({
      fullName: data.fullName,
      dispName: data.displayName,
      email: data.email,
      password: hashedPassword,
    });
    await createSession(newUser.id, newUser.fullName);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { error: "somthing went wrong please try again" };
  }
};

export const login = async (prev: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData);
  if (!data.password) {
    return { error: "please enter your password" };
  }
  try {
    await connectDB();
    const user = await User.findOne({ email: data.email });
    if (!user) {
      return { error: "there is no user with this email" };
    }
    const correct = await bcrypt.compare(
      data.password as string,
      user.password as string
    );
    if (!correct) {
      return { error: "wrong password please try again" };
    }
    await createSession(user.id, user.fullName);
    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { error: "somthing went wrong please try again" };
  }
};

export const signout = async () => {
  await deleteSession();
};
