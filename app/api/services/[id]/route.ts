// import { NextResponse } from "next/server";
// import { ObjectId } from "mongodb";
// import { dbConnect, collections } from "@/lib/dbConnect";


// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const collection = await dbConnect(collections.SERVICES);

//     const service = await collection.findOne({
//       _id: new ObjectId(params.id),
//     });

//     if (!service) {
//       return NextResponse.json(
//         { message: "Service not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(service);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Invalid ID or server error" },
//       { status: 500 }
//     );
//   }
// }











import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { dbConnect, collections } from "@/lib/dbConnect";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // 👈 note the Promise here
) {
  try {
    const { id } = await params; // 👈 await the promise

    const collection = await dbConnect(collections.SERVICES);
    const service = await collection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid ID or server error" },
      { status: 500 }
    );
  }
}
