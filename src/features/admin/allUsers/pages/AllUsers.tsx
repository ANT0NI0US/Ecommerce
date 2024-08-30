import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserTable from "../components/UserTable";

import { getUsers } from "@/store/service/userService";
import CommonSection from "@/ui/CommonSection";
import { userProps, userState } from "@/shared/types";
import { AppDispatch } from "@/store";
import useHelmet from "@/hooks/useHelmet";

export default function AllUsers() {
  useHelmet("Users");
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allUsers }: { isLoading: boolean; allUsers: userProps[] } =
    useSelector((state: userState) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <CommonSection title="All Users" />
      <section className="w-full py-[60px]">
        {allUsers.length === 0 ? (
          <h2 className="mt-2">No user to be displayed</h2>
        ) : (
          <div className="mx-auto w-5/6 overflow-x-auto">
            <UserTable allUsers={allUsers} isLoading={isLoading} />
          </div>
        )}
      </section>
    </>
  );
}
