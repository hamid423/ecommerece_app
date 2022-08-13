import React from 'react'
import { HeroBanner, FooterBanner, Product } from '../components'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => 
   (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      
      <div className="products-heading">
        <h2>Best Sellers</h2>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product product={product} key={product._id}/> )}
        </div>
        <FooterBanner footerBanner={bannerData && bannerData[0]}/>


      </div>
  )

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery)

    return {
      props: { products, bannerData}
    }
   }

export default Home