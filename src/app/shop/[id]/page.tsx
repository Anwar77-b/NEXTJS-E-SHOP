import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/home/Newsletter";
import Product from "@/components/shop/productPage/Product";
import ProductModel from "@/lib/models/Product";
import connectDB from "@/lib/mongodb";
import { decrypt } from "@/lib/session";
import mongoose from "mongoose";
import { cookies } from "next/headers";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  if (!id || id.length !== 24) {
    return <div>Product not found</div>;
  }
  await connectDB();
  const sessionCookie = (await cookies()).get("session");

  let session: unknown;
  if (sessionCookie) {
    session = await decrypt(sessionCookie.value);
  }

  const productId = new mongoose.Types.ObjectId(id);
  const productRaw = await ProductModel.findById(productId);
  // const reviews =
  const productInfo = JSON.parse(JSON.stringify(productRaw));

  if (!productInfo) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="container px-4 lg:px-0 mx-auto">
        <Product info={productInfo} session={session} />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
