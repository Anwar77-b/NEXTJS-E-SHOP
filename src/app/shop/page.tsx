"use server";
import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/home/Newsletter";
import AllProducts from "@/components/shop/AllProducts";
import connectDB from "@/lib/mongodb";
import Product from "@/lib/models/Product";
import Image from "next/image";
import React from "react";

async function page() {
  await connectDB();
  // const products = await Product.find();
  const productsRaw = await Product.find().lean();

  // Manually convert Mongoose documents to plain objects
  const products = productsRaw.map((product) => ({
    _id: product._id.toString(), // Convert ObjectId to string
    name: product.name,
    description: product.description,
    price: product.price,
    measurements: product.measurements,
    colors: product.colors,
    images: product.images,
    category: product.category,
    reviews: product.reviews,
  }));
  // return (
  //   <div>
  //     {products.map((product) => (
  //       <p key={product._id}>{product.name}</p>
  //     ))}
  //   </div>
  // );
  return (
    <main>
      <div className="container px-4 lg:px-0 mx-auto">
        <section className="relative h-[200px] sm:h-[300px]">
          <div className="text-center absolute z-10 inset-0 top-1/3">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Shop Page</h2>
            <p>Let s design the place you always imagined.</p>
          </div>
          <Image
            className="object-cover "
            fill
            alt=""
            src={"/shopPage.png"}
          ></Image>
        </section>
        <AllProducts products={products} />
      </div>
      <Newsletter />
      <Footer></Footer>
    </main>
  );
}

export default page;
