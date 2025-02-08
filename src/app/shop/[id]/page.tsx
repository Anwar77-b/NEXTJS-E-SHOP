import Footer from "@/components/footer/Footer";
import Newsletter from "@/components/home/Newsletter";
import Offer from "@/components/shop/Offer";
import Review from "@/components/shop/Review";
import ProductModel from "@/lib/models/Product";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";

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
  const productId = new mongoose.Types.ObjectId(id);

  const productRaw = await ProductModel.findById(productId);
  console.log(Object.keys(Object(productRaw)));

  if (!productRaw) {
    return <div>Product not found</div>;
  }
  const productInfo = {
    _id: productRaw._id.toString(), // Convert ObjectId to string
    name: productRaw.name,
    description: productRaw.description,
    price: productRaw.price,
    measurements: productRaw.measurements,
    colors: productRaw.colors.map((color) => {
      return {
        name: color.name,
        imgUrl: color.imgUrl,
      };
    }),
    images: productRaw.images,
    category: productRaw.category,
    reviews: productRaw.reviews,
    details: productRaw.get("details"),
    packaging: productRaw.packaging,
    sku: productRaw.sku,
  };

  return (
    <>
      <div className="container px-4 lg:px-0 mx-auto">
        <Productt info={productInfo} />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

function Productt({ info }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:pr-4">
        <div className="relative h-[450px] md:h-[450px] mb-4">
          <Offer />
          <Image
            src={info.images[0]}
            alt={info.name}
            className="object-cover w-full h-full"
            fill
          />
        </div>
        <div className="sm:grid grid-cols-3 gap-4 hidden h-[135px]">
          <button className="block relative">
            <Image
              src={info.images[0]}
              alt={info.name}
              className="object-cover w-full h-full"
              fill
            />
          </button>
          <button className="block relative">
            <Image
              src={info.images[0]}
              alt={info.name}
              className="object-cover w-full h-full"
              fill
            />
          </button>
          <button className="block relative">
            <Image
              src={info.images[0]}
              alt={info.name}
              className="object-cover w-full h-full"
              fill
            />
          </button>
        </div>
      </div>
      <div className="pr-6">
        <Review />
        <h2 className="text-2xl font-semibold mb-4">{info.name}</h2>
        <p className=" text-gray-500 mb-4">{info.description}</p>
        <p className="font-semibold text-xl mb-4">
          <span>${info.price}</span>{" "}
          <span className="text-gray-500 pl-2 line-through">
            ${info.price + 50}
          </span>
        </p>
        <div>
          <h3 className="text-gray-500">Measurements</h3>
          <p>{info.measurements}</p>
        </div>
        <div className="my-4">
          <h3 className="text-gray-500 mb-2">Choose Colors</h3>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((color) => (
              <button key={color} className="relative w-16 h-16 bg-gray-200 ">
                <Image
                  src={info.images[0]}
                  alt={""}
                  className="object-cover w-full h-full"
                  fill
                />
              </button>
            ))}
          </div>
        </div>
        <details className="mb-4 transition-all">
          <summary className="text-gray-500">Product Details</summary>
          <p className="text-gray-500">{info.details}</p>
        </details>
        <div className="flex items-center justify-between my-4">
          <div className="grid grid-cols-3 w-1/4 bg-gray-200 py-2 mr-4 rounded-md">
            <button>-</button>
            <span className="text-center font-semibold">1</span>
            <button>+</button>
          </div>
          <button className="w-3/4 active:scale-95 py-2 border border-black rounded-md flex items-center justify-center">
            <i className="scale-150 mr-2">
              <BiHeart />
            </i>
            Wishlist
          </button>
        </div>
        <button className="p-2 active:scale-95 mb-4 bg-gray-950 text-sm w-full text-white rounded-md">
          Add to cart
        </button>
      </div>
    </div>
  );
}
