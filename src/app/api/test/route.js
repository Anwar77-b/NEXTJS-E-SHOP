import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "../../../lib/models/User";

export async function GET() {
  try {
    await connectDB();
    const user = new User({
      fName: "Alice",
      lName: "Smith",
      dispName: "alice_smith",
      email: "alice.smith@example.com",
      password: "password123",
      billingAddress: {
        address: "789 Oak St",
        city: "Oran",
        state: "Oran",
        phoneNumber: "0550123456",
      },
      shippingAddress: {
        address: "101 Pine St",
        city: "Algiers",
        state: "Algiers",
        phoneNumber: "0550654321",
      },
    });
    await user.save();
    return NextResponse.json({ message: "MongoDB Connected ✅" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Database connection failed ❌" },
      { status: 500 }
    );
  }
}
