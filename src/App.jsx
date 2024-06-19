import React, { useState } from 'react'
import Card from './components/Card'

export const UserContext = React.createContext()

function App() {

  const [product, setProduct] = useState([
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/3.jpg",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwPxmVrCCyMJVCIEGwAarga_L527g8NpA3C3tHHvTkjrBlrO3_aIXVdBioK6hwkDUG-n8tyxAOhfQ6NdJQgYrb_x2ZPtDd6Cdv--9ygjnyoEgAEeAicFgysKkt9WmN5OM962fgBw&usqp=CAc",
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRwPxmVrCCyMJVCIEGwAarga_L527g8NpA3C3tHHvTkjrBlrO3_aIXVdBioK6hwkDUG-n8tyxAOhfQ6NdJQgYrb_x2ZPtDd6Cdv--9ygjnyoEgAEeAicFgysKkt9WmN5OM962fgBw&usqp=CAc"
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkf5n2c-e3jDy-xG_UTSWqOF3KhbhbZSPNhl-kNRh-2TW6gdF8BLysG-pgjDqahPbcFf2j62tmV6p6qU3m5SvcrG-CqsHquB8kzl96aZV4JS5OROULP2GG5Q7Dj3N1HEpo1QsshSynnw&usqp=CAc"
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkfx24BiVgFQ0SadUiY3Z83P7-LyNS3pVZQyZ4LNJy1DglmXDDYKqq4TT6D6yOsAkk6xA4AEnoqF8WKggplXVCuCMuY2fIUGV-c8o3Wh0QO9fn9U7V1QsYOBF9EQBnopzXYmdIS5df&usqp=CAc"
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkf5n2c-e3jDy-xG_UTSWqOF3KhbhbZSPNhl-kNRh-2TW6gdF8BLysG-pgjDqahPbcFf2j62tmV6p6qU3m5SvcrG-CqsHquB8kzl96aZV4JS5OROULP2GG5Q7Dj3N1HEpo1QsshSynnw&usqp=CAc"
    }
  ])

  return <>
    <UserContext.Provider value={{ product, setProduct }}>
      <div className="container my-5">
        <Card />
      </div>
    </UserContext.Provider>
  </>
}

export default App