import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CountTypes, MemberOverviewDataTypes } from '../../../services/data-types';
import { getMemberOverview } from '../../../services/player';
import Category from './Category';
import TableRow from './TableRow';

export default function OverviewContent() {
  const [counts, setCounts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await getMemberOverview();

    if (response.error) {
      toast.error(response.message);
    } else {
      console.log('response :>> ', response.data);
      setCounts(response.data.counts);
      setData(response.data.data);
    }
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {counts.map((item: CountTypes) => (
                <Category key={item._id} nominal={item.value} icon={item.name === 'Desktop' ? 'ic-desktop' : 'ic-mobile'}>
                  {item.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: MemberOverviewDataTypes) => (
                  <TableRow
                    key={item._id}
                    title={item.historyVoucherTopup.gameName}
                    category={item.historyVoucherTopup.category}
                    item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                    price={item.value}
                    status="Pending"
                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                  />
                ))}
                {/* <TableRow
                  title="Call of Duty:Modern"
                  category="Desktop"
                  item={550}
                  price={740000}
                  status="Success"
                  image="overview-2"
                />
                <TableRow
                  title="Clash of Clans"
                  category="Mobile"
                  item={100}
                  price={120000}
                  status="Failed"
                  image="overview-3"
                />
                <TableRow
                  title="The Royal Game"
                  category="Mobile"
                  item={255}
                  price={200000}
                  status="Pending"
                  image="overview-4"
                /> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
