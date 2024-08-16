import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link} from "react-router-dom";

import { ChangeEmail, ChangeName, ChangePhotoUrl } from "@/components/Redux/UserSlice/User";
import { useDispatch, useSelector } from "react-redux";
import { FaUserPlus } from "react-icons/fa";
import { MdPublishedWithChanges } from "react-icons/md";

const EditProfile = () => {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const photoUrl = useSelector((state) => state.user.photoUrl);

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(ChangeName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(ChangeEmail(e.target.value));
  };

  const handlePhotoChange = () => {
    const newPhotoUrl = prompt("Enter new photo URL:");
    if (newPhotoUrl) {
      dispatch(ChangePhotoUrl(newPhotoUrl));
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">

      <Card className="bg-[#f0f3f4] border-none shadow-none editProfile h-[85%] w-[69%] ml-[21%] rounded-2xl p-8 flex flex-col gap-4">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 ">
          <div className="flex flex-col items-center gap-2">
            <Avatar className="w-24 h-24">
              <AvatarImage src={photoUrl} alt="Profile Picture" />
              <AvatarFallback>M A</AvatarFallback>
            </Avatar>
            <Button variant="outline" className="mt-2" onClick={handlePhotoChange}>
              Change Profile Picture
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex mt-[-1.5rem] justify-center ">
            <Link to={"/admin/home"}>
            <button
              className="flex items-center gap-2 bg-green-600 text-white rounded-lg transition-all duration-200 px-4 py-2 hover:bg-green-500"
            >
              <MdPublishedWithChanges /> Save Changes
            </button>
            </Link>
        </CardFooter>
      </Card>
      </div>

  );
};

export default EditProfile;
