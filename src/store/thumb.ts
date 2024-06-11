import nail1 from "../images/image-product-1-thumbnail.jpg"
import nail2 from "../images/image-product-2-thumbnail.jpg"
import nail3 from "../images/image-product-3-thumbnail.jpg"
import nail4 from "../images/image-product-4-thumbnail.jpg"

import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"

interface Thumb {
    id: string;
    thumb: string;
    product: string
}
const thumb: Thumb[] = [
    {
        id: "1",
        thumb:nail1,
        product: product1
    },


    {
        id: "2",
        thumb:nail2,
        product: product2
    },

    {
        id: "3",
        thumb:nail3,
        product: product3
    },

    {
        id: "4",
        thumb:nail4,
        product: product4
    }
]

export default thumb