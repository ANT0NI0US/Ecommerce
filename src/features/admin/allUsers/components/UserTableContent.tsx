import DeleteUser from "./DeleteUser";
import Table from "@/ui/Table";
import { userProps } from "@/utils/types";

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
            loading="lazy"
            src={typeof user?.photoURL === "string" ? user.photoURL : undefined}
            alt={user?.displayName}
            className="h-16 max-h-full w-16 max-w-full 
             object-contain object-center sm:h-24 sm:w-24 lg:h-32 lg:w-32"
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
