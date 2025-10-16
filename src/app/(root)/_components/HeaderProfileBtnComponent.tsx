"use client";
import LoginButtonComponent from "@/components/LoginButtonComponent";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

export default function ProfileBtnComponent() {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        <LoginButtonComponent />
      </SignedOut>
    </>
  );
}
