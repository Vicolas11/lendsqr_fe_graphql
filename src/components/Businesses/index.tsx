import { dashData } from "../../data/dashboardData";

export default function Businesses(): JSX.Element {
  return (
    <>
      <h3>businesses</h3>
      <ul>
        {dashData[1]?.businesses?.map((data) => (
          <li key={`${data?.id}`}>
            <span>
              <img src={data?.icon} alt={data?.alt} />
            </span>
            <h3>{data?.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
