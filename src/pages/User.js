import { Outlet } from "react-router-dom";

export default function User() {
  return (
    <>
      <div>user parent</div>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
