import { dashData } from "../../data/dashboardData";

export default function Settings(): JSX.Element {
  return (
    <>
      <h3>settings</h3>
      <ul>
        {dashData[2]?.settings?.map((data) => (
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
