import React, { useEffect, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Form } from "react-router-dom";
import { supabase } from "../../config/supabaseClient";

const UserProfile = () => {
  const [avatar, setAvatar] = React.useState(null);
  const fileInputRef = useRef();
  useEffect(() => {
    const fetchAvatar = async () => {
      const { data, error } = await supabase.storage
        .from("avatar")
        .download("avatar.jpg");
      if (error) {
        console.log(error);
      } else {
        setAvatar(URL.createObjectURL(data));
      }
    };
    fetchAvatar();
  }, []);
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = async (e) => {
    const file = event.target.files[0];
    if (file) {
      const { data, error } = await supabase.storage
        .from("avatar")
        .upload(file.name, file);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
      setAvatar(file);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Form
        className="
        flex w-full flex-col items-center gap-4
      "
        onSubmit={(e) => {
          if (!confirm("Are you sure you want to update your profile?")) {
            e.preventDefault();
          }
        }}
      >
        <div className="container mx-auto py-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <AiOutlineEdit className="ml-[390px]" />
              <div className="flex items-center">
                <img
                  src={
                    avatar instanceof File
                      ? URL.createObjectURL(avatar)
                      : avatar
                  }
                  alt="avatar"
                  onClick={handleAvatarClick}
                  className=" h-20 w-20 cursor-pointer rounded-full border-2 border-primary-500 object-cover"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  name="avatar"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <h1 className="text-xl font-semibold">Dang Nguyen</h1>
              </div>
              <p className="text-gray-600 mt-2">nguyen1@gmail.com</p>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">About Me</h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nunc nec nisl aliquam tincidunt. Nulla facilisi. Sed
                  tincidunt, nunc id ultrices tincidunt, nunc nunc lacinia
                  lectus, id lacinia lectus nunc id lectus.
                </p>
              </div>
              <button
                type="submit"
                className="flex justify-center items-center py-3 px-4 bg-green-700 text-white font-bold border border-green-700 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-green-700 lg:m-0 md:px-6"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserProfile;
