import { MdShowChart } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { BiHistory } from "react-icons/bi";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

export const aside_data = [
  { name: "Product View", link: "product_view", icon: MdShowChart },
  { name: "Order Book", link: "order_book", icon: FiBook },
  { name: "Price History", link: "price_history", icon: BiHistory },
  { name: "Open Orders", link: "open_orders", icon: FaEye },
  { name: "Closed Trades", link: "close_trades", icon: FaRegCheckCircle },
  {
    name: "Cancelled Trades",
    link: "cancelled_trades",
    icon: IoCloseCircleOutline,
  },
];

export const header_1 = ["X-Traded", "OTC", "FI", "Derivatives"];
export const header_2 = ["All", "SMAZ", "SBBS", "SPRL", "SGNG", "FETC", "SCOC"];

export const firstTable = [
  { product: "Soybeans (SSBS)", qty: "2003", price: "1736.92" },
  { product: "Paddy Rice (SPRL)", qty: "11293", price: "3627.00" },
  { product: "Maize (SMAZ)", qty: "1832", price: "8294.01" },
  { product: "Sorghum (SSGM)", qty: "29102", price: "8192.00" },
  { product: "Fair Trade ETC (FCTC)", qty: "3212", price: "1726.92" },
  { product: "Fair Trade ETC (FCTC)", qty: "3212", price: "1726.92" },
];

export const log = [
  {
    security: "Soybeans (SSBS)",
    board: "X-Traded",
    orderType: "Buy",
    price: "1792.65",
    qty: "9265",
  },
  {
    security: "Paddy Rice (SPRL)",
    board: "X-Traded",
    orderType: "Buy",
    price: "1792.65",
    qty: "9265",
  },
  {
    security: "Maize (SMAZ)",
    board: "OTC",
    orderType: "Sell",
    price: "1792.65",
    qty: "9265",
  },
  {
    security: "Sorghum (SSGM)",
    board: "FI",
    orderType: "Sell",
    price: "1792.65",
    qty: "9265",
  },
];
