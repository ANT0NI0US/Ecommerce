import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@/ui/Table";
import Spinner from "@/ui/spinner/Spinner";
import { userProps, userState } from "@/utils/types";
import { getUsers } from "@/store/service/userService";
import { AppDispatch } from "@/store";
import UserTableContent from "./UserTableContent";

const tableHeadCells = ["Name", "Photo", "Email", "Actions"];

export default function UserTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allUsers }: { isLoading: boolean; allUsers: userProps[] } =
    useSelector((state: userState) => state.user);

  const Users = allUsers?.filter((user) => user.type === "user");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  if (allUsers?.length === 0) {
    return (
      <h2 className="flexCenter mx-auto w-[90%] py-[80px] text-center text-xl font-semibold md:w-5/6">
        No users found.
      </h2>
    );
  }

  return (
    <Table>
      <Table.Header>
        {tableHeadCells.map((headCell, index) => (
          <Table.Cell key={index} isHeader>
            {headCell}
          </Table.Cell>
        ))}
      </Table.Header>
      <Table.Body
        data={Users}
        render={(user) => <UserTableContent key={user?.id} user={user} />}
      />
    </Table>
  );
}
