import { userProps } from "@/shared/types";
import { AiFillDelete } from "react-icons/ai";
import { FadeLoader } from "react-spinners";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { deleteUser } from "@/store/service/userService";

type userTableProps = {
  isLoading: boolean;
  allUsers: userProps[];
};

const columnsHead = ["User Photo", "User Name", "Email", "Actions"];
const columnHeadStyle =
  "px-4 py-7 text-center text-lg font-black text-primary-color capitalize tracking-wider";

const UserTable = ({ allUsers, isLoading }: userTableProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const filteredUsers = allUsers.filter((user) => user.type === "user");

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
  return (
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
          filteredUsers?.map((user: userProps, index: number) => (
            <tr
              className={`${allUsers.length - 1 === index ? "" : "border-b"}`}
              key={index}
            >
              <td className="flexCenter min-h-[125px]  min-w-[125px] whitespace-nowrap px-6 py-4 text-center text-base text-primary-color">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="h-[80px] w-[80px] bg-cover"
                />
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-center text-base text-primary-color">
                {user.displayName}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-center text-base text-primary-color">
                {user.email}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-center">
                <motion.div
                  onClick={() => {
                    deleteSpecificUser(user.id);
                  }}
                  whileTap={{ scale: 1.2 }}
                  className=" flexCenter cursor-pointer gap-1 rounded-full bg-red-700 px-4 py-2 text-light-color"
                >
                  <AiFillDelete className="text-[1.2rem]" />
                  <span>Delete</span>
                </motion.div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
