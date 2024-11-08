import { notFound } from "next/navigation";
const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      price: 48,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper."
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      price: 35,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top."
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      price: 89,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt: "Person using a pen to cross a task off a productivity paper card."
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      price: 35,
      imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top."
    }
  ];
//根据id找到对应的展示商品详情
export default function ProductPage({params}:{params:{id:string}}) {
 const product = products.find((product) => product.id === Number(params.id))!
  return <div className="flex flex-col items-center justify-center h-screen">
    <img src={product.imageSrc} alt={product.imageAlt} className="w-1/2 h-1/2" />
    <h1>{product.name}</h1>
    <p>{product.price}</p>
  </div>;
}
