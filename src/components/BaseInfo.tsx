// src/components/BaseInfo.tsx
import { SetStateAction, useEffect, useState } from 'react';
import Pagination from './Pagination';
import 'animate.css';

interface BaseInfoProps {
  baseInfo: any[];
}

const BaseInfo: React.FC<BaseInfoProps> = ({ baseInfo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("name");
  const itemsPerPage = 12;
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      fetch(`/api/get_collection?name=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data);
          setLoading(false);
        });
    } else {
      setSearchResults(baseInfo);
    }
  }, [searchTerm, baseInfo]);


  const handleSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  }

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  }

  const sortedBaseInfo = [...baseInfo].sort((a, b) => {
    switch (sortOrder) {
      case "name":
        return a.name.localeCompare(b.name);
      case "slug":
        return a.slug.localeCompare(b.slug);
      case "minNum":
        return a.min_num - b.min_num;
      case "maxNum":
        return a.max_num - b.max_num;
      case "listedCntAll":
        return a.listed_cnt_all - b.listed_cnt_all;
      case "medianNumber":
        return a.median_number - b.median_number;
      case "floorPriceGammaio":
        return a.floor_price_gammaio - b.floor_price_gammaio;
      case "floorPriceMagiceden":
        return a.floor_price_magiceden - b.floor_price_magiceden;
      case "floorPriceNostr":
        return a.floor_price_nostr - b.floor_price_nostr;
      case "floorPriceOrdinalsmarket":
        return a.floor_price_ordinalsmarket - b.floor_price_ordinalsmarket;
      case "floorPriceOrdinalswallet":
        return a.floor_price_ordinalswallet - b.floor_price_ordinalswallet;
      case "floorPriceOrdswap":
        return a.floor_price_ordswap - b.floor_price_ordswap;
      case "floorPriceOrdynals":
        return a.floor_price_ordynals - b.floor_price_ordynals;
      case "iconMediaType":
        return a.icon_media_type.localeCompare(b.icon_media_type);
      case "inscriptionIconId":
        return a.inscription_icon_id.localeCompare(b.inscription_icon_id);
      default:
        return 0;
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = searchResults.slice(startIndex, endIndex);

  return (
    <div className="animate__animated animate__fadeIn mt-6">
      <h1 className="text-3xl font-semibold text-indigo-600 mb-4">Collections Info</h1>
      <div className="animate__animated animate__fadeIn my-6">
        <form onSubmit={handleSearchSubmit} className="grid md:grid-cols-2 gap-4">
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="animate__animated animate__fadeInUp animate__delay-1s p-2 rounded border-0"
                />
                <button 
                    type="submit" 
                    className="animate__animated animate__fadeInUp animate__delay-2s ml-2 p-2 bg-white text-blue-500 rounded"
                >
                    Search
                </button>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
                <select value={sortOrder} onChange={handleSortOrderChange} id="sort" className="text-black mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="name">Name</option>
                    <option value="slug">Slug</option>
                    <option value="minNum">Min Num</option>
                    <option value="maxNum">Max Num</option>
                    <option value="listedCntAll">Listed Count</option>
                    <option value="floorPriceGammaio">Floor Price Gammaio</option>
                    <option value="floorPriceMagiceden">Floor Price Magiceden</option>
                    <option value="floorPriceNostr">Floor Price Nostr</option>
                    <option value="floorPriceOrdinalsmarket">Floor Price Ordinalsmarket</option>
                    <option value="floorPriceOrdinalswallet">Floor Price Ordinalswallet</option>
                    <option value="floorPriceOrdswap">Floor Price Ordswap</option>
                    <option value="floorPriceOrdynals">Floor Price Ordynals</option>
                    <option value="iconMediaType">Icon Media Type</option>
                    <option value="inscriptionIconId">Inscription Icon ID</option>
                </select>
            </div>
        </form>
        </div>

    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentItems.map((collection: any, index: number) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md overflow-hidden break-all">
            <div className="font-semibold text-gray-700 mb-4">
                <img 
                src={`/api/image?id=${collection.inscription_icon_id}`} 
                alt={collection.name} 
                className="mb-4 w-full h-full object-cover rounded-lg"
                />
                <p>Name: <span className="font-normal text-gray-600">{collection.name}</span></p>
                <p>Icon Media Type: <span className="font-normal text-gray-600">{collection.icon_media_type}</span></p>
                <p>Inscription ID: <span className="font-normal text-gray-600">{collection.inscription_icon_id}</span></p>
                <p>Slug: <span className="font-normal text-gray-600">{collection.slug}</span></p>
                <p>Listed Count All: <span className="font-normal text-gray-600">{collection.listed_cnt_all}</span></p>
                <p>Min Num: <span className="font-normal text-gray-600">{collection.min_num}</span></p>
                <p>Max Num: <span className="font-normal text-gray-600">{collection.max_num}</span></p>
            </div>
            <div className="font-semibold text-gray-700 mb-2">
                <p className="font-bold text-gray-800">Listed</p>
                <p>Ordswap: <span className="font-normal text-gray-600">{collection.listed_cnt_ordswap}</span></p>
                <p>Magiceden: <span className="font-normal text-gray-600">{collection.listed_cnt_magiceden}</span></p>
                <p>Ordinalswallet: <span className="font-normal text-gray-600">{collection.listed_cnt_ordinalswallet}</span></p>
                <p>Gammaio: <span className="font-normal text-gray-600">{collection.listed_cnt_gammaio}</span></p>
                <p>Nostr: <span className="font-normal text-gray-600">{collection.listed_cnt_nostr}</span></p>
                <p>Ordynals: <span className="font-normal text-gray-600">{collection.listed_cnt_ordynals}</span></p>
                <p>Ordinalsmarket: <span className="font-normal text-gray-600">{collection.listed_cnt_ordinalsmarket}</span></p>
            </div>
            <div className="font-semibold text-gray-700 mb-2">
                <p className="font-bold text-gray-800">Floor Price</p>
                <p>Ordswap: <span className="font-normal text-gray-600">{collection.floor_price_ordswap}</span></p>
                <p>Magiceden: <span className="font-normal text-gray-600">{collection.floor_price_magiceden}</span></p>
                <p>Ordinalswallet: <span className="font-normal text-gray-600">{collection.floor_price_ordinalswallet}</span></p>
                <p>Gammaio: <span className="font-normal text-gray-600">{collection.floor_price_gammaio}</span></p>
                <p>Nostr: <span className="font-normal text-gray-600">{collection.floor_price_nostr}</span></p>
                <p>Ordynals: <span className="font-normal text-gray-600">{collection.floor_price_ordynals}</span></p>
                <p>Ordinalsmarket: <span className="font-normal text-gray-600">{collection.floor_price_ordinalsmarket}</span></p>
            </div>
            </div>
        ))}
    </div>
      <Pagination
        totalItems={baseInfo.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default BaseInfo;
