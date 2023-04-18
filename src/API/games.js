import axios from "axios";

const url =
  "https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&storeID=1&onSale=1&AAA=1";

export async function getGames() {
  const response = await axios.get(url)
  return response.data
}
