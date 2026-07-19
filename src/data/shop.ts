import type { ShopProduct } from "@/components/shop/ProductCard.vue";

export const products: ShopProduct[] = [
  {
    name: "五常稻花香大米",
    subtitle: "新米 · 5kg",
    price: "59.90",
    image: "/static/home/product-rice.png",
  },
  {
    name: "每日坚果轻享装",
    subtitle: "7日装 · 175g",
    price: "29.90",
    image: "/static/home/product-snack.png",
  },
  {
    name: "植萃洗衣液",
    subtitle: "低泡易漂 · 2kg",
    price: "39.90",
    image: "/static/home/product-home.png",
  },
];

export const riceProducts: ShopProduct[] = [
  { ...products[0], name: "五常稻花香大米" },
  { ...products[0], name: "东北长粒香米", price: "42.80" },
  { ...products[1], name: "七色糙米组合", price: "35.90" },
  { ...products[0], name: "有机胚芽米", price: "79.00" },
];
