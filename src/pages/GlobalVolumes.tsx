import { useEffect, useState } from 'react';

const GlobalVolumes = () => {
  const [globalVolumes, setGlobalVolumes] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGlobalVolumes = async () => {
      try {
        const response = await fetch('/api/global_volumes');
        const data = await response.json();
        setGlobalVolumes(data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };
  
    fetchGlobalVolumes();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  

  return (
    <div>
      <h1>Global Volumes</h1>
      <table>
        <thead>
          <tr>
            <th>All Sale Sum</th>
            <th>Last 30 Days Sale Sum</th>
            <th>Last 7 Days Sale Sum</th>
            <th>Last 24 Hours Sale Sum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{globalVolumes.all_sale_sum}</td>
            <td>{globalVolumes.last_30_day_sale_sum}</td>
            <td>{globalVolumes.last_7_day_sale_sum}</td>
            <td>{globalVolumes.last_24_hr_sale_sum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GlobalVolumes;
