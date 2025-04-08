import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Product from "@/lib/models/Product";

export async function POST(req) {
  // return NextResponse.json({ jj: "jj" });
  try {
    const res = await req.json();
    const products = await Product.find({ _id: { $in: res } });
    await connectDB();

    return NextResponse.json({ products });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Database connection failed ❌" },
      { status: 500 }
    );
  }
}
