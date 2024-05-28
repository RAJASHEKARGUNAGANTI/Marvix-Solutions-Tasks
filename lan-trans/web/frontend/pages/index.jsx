import {
  Page,
  Layout,
  Modal,
} from "@shopify/polaris";
import { ModalContent, TitleBar } from "@shopify/app-bridge-react";
import { useAuthenticatedFetch } from "../hooks";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


export default function HomePage() {

  const fetch = useAuthenticatedFetch();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isModelOpen, setImodelOpen] = useState(false);

  const handleClick =(product)=>{
    setProduct(product);
    setImodelOpen(true);
    // console.log("Button clicked")
  }
  
  const handleClose =()=>{
    setProduct(null);
    setImodelOpen(false);

  }
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let request = await fetch("/api/2024-04/products");
        let response = await request.json();
        setProducts(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        let id = 8387996614807
        let request = await fetch(`/api/2024-04/products/metafields.json`);
        let response = await request.json();
        setProducts(response.data);
        console.log("Metada ==" + response.data);
      } catch (error)  {
        console.log(error);
      }
    };

    fetchMetaData();
  }, []);


  
  return (
    <Page fullWidth>
      <TitleBar title="Home" primaryAction={null} />
      <Layout>
        {products.map((product, i) => {
          const imageUrl = product.images[0]?.src || '';
          return (
            <div key={i}>
              <ProductCard 
                title={product.title} 
                image={imageUrl}
                price={product.variants[0].price} 
                description={product.body_html}
                linkURL={product.handle}
                onClick={()=> handleClick(product)}
              />
            </div>
          )
        })}
      </Layout>
      {product && (
        <Modal
        open={isModelOpen}
        onClose={handleClose}
        >
        <Modal.Section>
        <h2>{product.title}</h2>
        <div className="flex flex-col">
        <div className="w-full p-4">
        <h3 className="font-semibold ">Original</h3>
        <p className="text-blue-600 ">{product.body_html.replace(/<\/?p>/g, '')}</p>
        <p className="text-green-600 ">{`https://dev-xl.myshopify.com/products/${product.handle}`}</p>
        </div>
        <button className="bg-gray-500 h-10 rounded-lg font-semibold text-xl text-white">Translate</button>
        <div className="w-full p-4">
        <h3 className="font-semibold ">Translated</h3>
        <p className="text-blue-600 ">{product.body_html.replace(/<\/?p>/g, '')}</p>
        <p className="text-green-600 ">{`https://dev-xl.myshopify.com/products/${product.handle}`}</p>
        </div>
        </div>
        </Modal.Section>
        </Modal>
      )}
    </Page>
  );
}
