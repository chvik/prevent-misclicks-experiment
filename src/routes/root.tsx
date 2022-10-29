import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
  const tabs = [
    ["/relayout", "Target moves due to re-layout"],
    ["/disappear", "Target disappears"],
    ["/covered", "Target is covered"],
  ];

  return (
    <div>
      `
      <div className="flex flex-row ">
        {tabs.map(([path, label]) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              "flex-1 px-1 border-solid border-l-2 " +
              (isActive ? "border-t-2" : "border-b-2")
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
