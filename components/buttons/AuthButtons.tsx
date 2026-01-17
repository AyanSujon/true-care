

// "use client";

// import { signOut, useSession } from "next-auth/react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import React from "react";

// const AuthButtons = () => {
//   const { data: session, status } = useSession();

//   if (status === "loading") return null;

//   return (
//     <div className="flex gap-2">
//       {status === "authenticated" ? (
//         <Button
//           onClick={() => signOut({ callbackUrl: "/" })}
//           variant="ghost"
//           size="sm"
//           className="w-full hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
//         >
//           LogOut
//         </Button>
//       ) : (
//         <Button
//           variant="ghost"
//           size="sm"
//           asChild
//           className="w-full hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
//         >
//           <Link href="/login">Login</Link>
//         </Button>
//       )}
//     </div>
//   );
// };

// export default AuthButtons;














"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // shadcn/ui dropdown
import React from "react";

const AuthButtons = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <div className="flex gap-2">
      {status === "authenticated" ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
            >
              {session.user?.name || "Account"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 bg-white">
            <DropdownMenuItem asChild  className="hover:bg-[#6632ae] hover:text-white">
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#6632ae] hover:text-white"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="w-full hover:bg-[#6632ae] text-[#6632ae] hover:text-white transition-colors border border-[#6632ae]/30"
        >
          <Link href="/login">Login</Link>
        </Button>
      )}
    </div>
  );
};

export default AuthButtons;
