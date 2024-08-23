import { UserStatusProps } from "../interfaces/status.interface";

export const userStatus = ({ status }: UserStatusProps): JSX.Element => {
  return (
    <td>
      <span
        style={{
          background: `${
            status === "Active"
              ? "#f3fcf6"
              : status === "Inactive"
              ? "#F5F5F7"
              : status === "Blacklisted"
              ? "#FCE6EB"
              : status === "Pending"
              ? "#FCF6E4"
              : "none"
          }`,
          color: `${
            status === "Active"
              ? "#39cd62"
              : status === "Inactive"
              ? "#545F7D"
              : status === "Blacklisted"
              ? "#E4033B"
              : status === "Pending"
              ? "#E9B200"
              : "none"
          }`,
          padding: ".5rem 1rem .5rem 1rem",
          borderRadius: "100px",
          width: "6.25rem",
          height: "1.875rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {status}
      </span>
    </td>
  );
};
