import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";

import { AiFillDelete } from "react-icons/ai";
import { GoDash } from "react-icons/go";

import { deleteUser, getUsers } from "@/store/service/userService";
import Helmet from "@/components/UI/helmet/Helmet";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import { userProps, userState } from "@/shared/types";
import { AppDispatch } from "@/store";

const columnsHead = ["User Photo", "User Name", "Email", "type", "Actions"];
const columnHeadStyle =
  "px-4 py-7 text-center text-lg font-black text-primary-color capitalize tracking-wider";

const AllUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allUsers }: { isLoading: boolean; allUsers: userProps[] } =
    useSelector((state: userState) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteSpecificUser = (id: string) => {
    dispatch(deleteUser(id))
      .unwrap()
      .then(() => {
        toast.success("User has been deleted successfully");
      })
      .catch(() => {
        toast.success("Something went wrong");
      });
  };

  const sortedUsers = [...allUsers].sort((a, b) => {
    if (a.type === "admin" && b.type !== "admin") return -1;
    if (a.type !== "admin" && b.type === "admin") return 1;
    return 0;
  });

  return (
    <Helmet title="Users">
      <CommonSection title="All Users" />
      <section className="w-full py-[60px]">
        {allUsers.length === 0 ? (
          <h2 className="mt-2">No user to be displayed</h2>
        ) : (
          <div className="w-5/6 mx-auto overflow-x-auto">
            <table className="w-full max-w-full space-y-6">
              <thead>
                <tr className="border-b">
                  {columnsHead.map((column, index) => (
                    <th key={index} className={columnHeadStyle}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5}>
                      <div className="flexCenter mt-10 w-full">
                        <FadeLoader color="#36d7b7" />
                      </div>
                    </td>
                  </tr>
                ) : (
                  sortedUsers?.map((user: userProps, index: number) => (
                    <tr
                      className={`${
                        allUsers.length - 1 === index ? "" : "border-b"
                      }`}
                      key={index}
                    >
                      <td className="min-w-[125px] min-h-[125px]  flexCenter text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="w-[80px] h-[80px] bg-cover"
                        />
                      </td>
                      <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                        {user.displayName}
                      </td>
                      <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                        {user.email}
                      </td>
                      <td className="text-primary-color whitespace-nowrap px-6 py-4 text-center text-base">
                        {user.type}
                      </td>
                      {user.type === "admin" ? (
                        <td className="whitespace-nowrap px-6 py-4 text-center text-base relative">
                          <div className="absolute inset-0 flex justify-center items-center">
                            <GoDash className="text-[1.2rem]" />
                          </div>
                        </td>
                      ) : (
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          <motion.div
                            onClick={() => {
                              deleteSpecificUser(user.id);
                            }}
                            whileTap={{ scale: 1.2 }}
                            className=" bg-red-700 py-2 px-4 rounded-full flexCenter gap-1 cursor-pointer text-white"
                          >
                            <AiFillDelete className="text-[1.2rem]" />
                            <span>Delete</span>
                          </motion.div>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </Helmet>
  );
};

export default AllUsers;
