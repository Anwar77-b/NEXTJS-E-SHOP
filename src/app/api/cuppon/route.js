import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url); // ✅ get search params

  const code = searchParams.get("code"); // get specific parameter
  const cuppons = [
    {
      code: "123456",
      msg: "-10$",
      discount: 10,
      perc: 1,
    },
    {
      code: "654321",
      msg: "-20$",
      discount: 20,
      perc: 1,
    },
    {
      code: "-30%",
      msg: "-30%",

      discount: 30,
      perc: 0.7,
    },
  ];
  const cup = cuppons.find((cup) => cup.code === code);
  if (cup) {
    return NextResponse.json({ message: "valid cuppon", cup });
  }
  return NextResponse.json({ message: "invalid cuppon", cup: null });
}
