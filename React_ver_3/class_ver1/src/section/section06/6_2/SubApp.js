import { useEffect, useState } from "react";
export default function SubApp() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      }
      );
  }, []);
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {/** ul */}
        {coins.map((coin) =>
          <option>
            {/* 모든 데이터를 불러오면 문제가 있다 그래서 data의 API를 잘 보고 필요한 정보를 가지고 와야한다. */}
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        )}
      </select>
    </div>
  )
}