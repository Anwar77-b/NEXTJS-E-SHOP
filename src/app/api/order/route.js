import { Order } from "@/lib/models/Order";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req) {
  const data = await req.json();
  const products = data.products.map((product) => {
    return {
      productId: product._id,
      quantity: product.qt,
      price: product.price,
    };
  });
  try {
    await connectDB();
    console.log(data.userId);
    const newOrder = await Order.create({
      userId: data.userId,
      products: products,
      totalPrice: data.totalPrice,
      status: "pending",
      shippingAddress: {
        fullName: data.info.fName + data.info.lName,
        address: data.info.address,
        city: data.info.townCity,
        postalCode: data.info.zip,
        country: data.info.country,
      },
      paymentMethod: "cash",
    });
    // console.log(products);
    console.log(newOrder);
    console.log(data.info);
    return NextResponse.json({ newOrder });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Database connection failed ❌" },
      { status: 500 }
    );
  }
}
