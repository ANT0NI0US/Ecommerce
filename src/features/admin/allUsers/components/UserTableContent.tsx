import { userProps } from "@/shared/types";
import Table from "@/ui/Table";
import DeleteUser from "./DeleteUser";

interface Props {
  user: userProps;
}

export default function UserTableContent({ user }: Props) {
  return (
    <Table.Row key={user?.id}>
      <Table.Cell>{user?.displayName}</Table.Cell>
      <Table.Cell>
        <div className="flexCenter">
          <img
            src={typeof user?.photoURL === "string" ? user.photoURL : undefined}
            alt={user?.displayName}
            className="h-[150px] object-contain object-center"
          />
        </div>
      </Table.Cell>
      <Table.Cell>{user?.email}</Table.Cell>
      <Table.Cell>
        <DeleteUser user={user} />
      </Table.Cell>
    </Table.Row>
  );
}
