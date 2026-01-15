

// import React from 'react';
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/authOption";
// import { collections, dbConnect } from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";

// const MyBookings = async () => {
//   const session = await getServerSession(authOptions);

//   if (!session?.user?.email) {
//     return (
//       <div className="p-8">
//         <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
//         <p>Please log in to view your bookings.</p>
//       </div>
//     );
//   }

//   const bookingCollection = await dbConnect(collections.BOOKINGS);

//   let bookings = [];

//   const userCollection = await dbConnect(collections.USERS);
//   const loggedInUser = await userCollection.findOne({
//     email: session.user.email,
//   });

//   if (loggedInUser?._id) {
//     bookings = await bookingCollection
//       .find({ userId: loggedInUser._id })
//       .sort({ createdAt: -1 })
//       .toArray();
//   } else {
//     bookings = await bookingCollection
//       .find({ userEmail: session.user.email })
//       .sort({ createdAt: -1 })
//       .toArray();
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

//       {bookings.length === 0 ? (
//         <p>No bookings found.</p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {bookings.map((booking: any) => (
//             <div key={booking._id.toString()} className="border rounded-lg p-6 shadow-md">
//               <p><strong>Service ID:</strong> {booking.serviceId.toString()}</p>
//               <p><strong>Date:</strong> {booking.date}</p>
//               <p><strong>Time:</strong> {booking.time}</p>
//               <p><strong>Duration:</strong> {booking.duration} minutes</p>
//               <p><strong>Address:</strong> {booking.fullAddress}, {booking.district}, {booking.region}</p>
//               <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
//               <p><strong>Status:</strong> <span className="capitalize">{booking.status}</span></p>
//               <p><strong>Created:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
//               {booking.notes && <p><strong>Notes:</strong> {booking.notes}</p>}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookings;




















import React from "react";
import { collections, dbConnect } from "@/lib/dbConnect";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const MyBookings = async () => {
  const bookingCollection = await dbConnect(collections.BOOKINGS);

  const bookings = await bookingCollection
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#ff0099]">
        All Bookings
      </h1>

      <Table>
        <TableCaption>All customer bookings in the system.</TableCaption>

        <TableHeader>
          <TableRow className="bg-[#323940]/10">
            <TableHead>Service Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Total Cost</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((booking: any) => {
            const createdDate = new Date(booking.createdAt).toLocaleDateString();

            const isCancellable =
              booking.status !== "cancelled" &&
              booking.status !== "completed";

            return (
              <TableRow key={booking._id.toString()}>
                <TableCell>
                  <span className="font-medium">
                    {booking.serviceName || "Service"}
                  </span>
                </TableCell>

                <TableCell>{booking.duration} min</TableCell>

                <TableCell>
                  {booking.fullAddress}, {booking.district}, {booking.region}
                </TableCell>

                <TableCell className="font-semibold">
                  ${booking.totalPrice}
                </TableCell>

                <TableCell>
                  <Badge
                    className={`text-white capitalize ${
                      booking.status === "pending"
                        ? "bg-[#ff0064]"
                        : booking.status === "confirmed"
                        ? "bg-[#6632ae]"
                        : booking.status === "completed"
                        ? "bg-green-600"
                        : booking.status === "cancelled"
                        ? "bg-[#323940]"
                        : ""
                    }`}
                  >
                    {booking.status}
                  </Badge>
                </TableCell>

                {/* CREATED AT */}
                <TableCell>{createdDate}</TableCell>

                {/* ACTION BUTTONS */}
                <TableCell className="text-right flex justify-end gap-2">

                  {/* View Button */}
                  <Link
                    href={`/dashboard/my-bookings/${booking._id.toString()}`}
                    className="px-3 py-1 text-sm rounded-md font-semibold bg-[#ff0099] text-white"
                  >
                    View
                  </Link>

                  {/* Cancel Button */}
                  <button
                    disabled={!isCancellable}
                    className={`px-3 py-1 text-sm rounded-md font-semibold 
                      ${
                        isCancellable
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    Cancel
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyBookings;
