import React, { useEffect, useState } from "react";
import { getPeriodData } from "../api/periodAPI";
import { PeriodData } from "../PeriodData";

const PeriodList: React.FC = () => {
  const [periods, setPeriods] = useState<PeriodData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeriods = async () => {
      try {
        const periodsData = await getPeriodData();
        setPeriods(periodsData);
      } catch (err) {
        if (err instanceof Error) {
          setError(`Failed to fetch period data: ${err.message}`);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPeriods();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {periods.map((period) => (
        <li key={period.id}>
          {period.startDate} - {period.endDate} | Mood: {period.mood}
        </li>
      ))}
    </ul>
  );
};

export default PeriodList;
