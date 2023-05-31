// src/pages/index.tsx
import { useEffect, useState } from 'react';
import BaseInfo from '../components/BaseInfo';
import SupplyInfo from '../components/SupplyInfo';
import VolumeInfo from '../components/VolumeInfo';
import GlobalVolumes from '../components/GlobalVolumes';
import 'animate.css';

const HomePage = () => {
  const [collectionsSupplyInfo, setCollectionsSupplyInfo] = useState<any>(null);
  const [collectionsVolumeInfo, setCollectionsVolumeInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [globalVolumes, setGlobalVolumes] = useState<any>(null);
  const [collectionsBaseInfo, setCollectionsBaseInfo] = useState<any>(null);

  useEffect(() => {
    const fetchData = async (endpoint: string, setData: Function) => {
      const response = await fetch(`/api/${endpoint}`);
      const data = await response.json();
      setData(data);
    };

    Promise.all([
      fetchData('global_volumes', setGlobalVolumes),
      fetchData('get_collections_base_info', setCollectionsBaseInfo),
      fetchData('get_collections_supply_info', setCollectionsSupplyInfo),
      fetchData('get_collections_volume_info', setCollectionsVolumeInfo),
    ]).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="animate__animated animate__fadeIn">
      <section className="p-6">
        <GlobalVolumes volumes={globalVolumes} />
      </section>

      <section className="p-6">
        <BaseInfo baseInfo={collectionsBaseInfo} />
      </section>

      <section className="md:flex md:justify-between md:gap-6 p-6">
        <div className="md:w-1/2">
          <SupplyInfo supplyInfo={collectionsSupplyInfo} />
        </div>
        <div className="md:w-1/2">
          <VolumeInfo volumeInfo={collectionsVolumeInfo} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;

