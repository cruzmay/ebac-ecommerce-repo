
//HTML elements
const productsSection = document.querySelector(".products")
const imageUrl = "https://assets.adidas.com/images/w_600,f_auto,q_auto/"
/**
 * 
 * small script to duplicate products and render them in the DOM of the index.
 * uses the same model from the <article> element in the index.html
 * 
 */
const products = [
    {
        img: "612f5c689a324d6bba0cadc500ff31b4_9366/Tenis_adidas_Court_Low_Streetcheck_Cloudfoam_Negro_GW5489_01_standard.jpg",
        price: 100,
        description: "Tenis adidas Court Low Streetcheck Cloudfoam",
        storage: "regular",
    },
    {
        img: "29c619fb67fc4061bbe17bfa195d8ee1_9366/Tenis_Originals_Country_OG_Negro_ID2962_01_standard.jpg",
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus finibus ornare.",
        storage: "regular",
    },
    {
        img: "851f608474814164a26432c152c7ae58_9366/Tenis_LWST_Naranja_IF8801_01_standard.jpg",
        price: 300,
        description: "Tenis adidas Court Low Streetcheck Cloudfoam",
        storage: "soldOut",
    },
    {
        img: "7ebe320ed6684bd5b61bd890fb020c99_9366/Tenis_X_PLR_Phase_Gris_ID5901_01_standard.jpg",
        price: 400,
        description: "Duis a porttitor libero, et molestie velit. Proin nunc elit, posuere vitae augue vitae",
        storage: "regular",
    },
    {
        img: "82feeb33d16b4180a567a5be0b772333_9366/Tenis_adidas_VL_Court_3.0_Low_Skateboarding_Blanco_ID8797_01_standard.jpg",
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        storage: "offert",
    },
]
/** 
 * 
 * this function will create and duplicate products with the array above
 * @see products
 * 
 *  */
const generateProducts = () => {
    let productsInnerHTML = ""
    for (const product of products) {
        for (const repeatProduct of products) { 
            let storage;
            switch (repeatProduct.storage) {
                case "regular":
                    storage = ""
                    break;
                case "offert":
                    storage = "--offert"
                    break;
                case "soldOut":
                    storage = "--sold-out"
                    break;
                default:
                    break;
            }


            productsInnerHTML += `<article class="products__detail">
            <figure class="products__detail__image">
              <img src=${ imageUrl + repeatProduct.img} alt="image">
            </figure>
            <p class="products__detail__price${storage}">price: $${repeatProduct.price}</p>
            <small class="products__detail__description">${repeatProduct.description}</small>
            </article>`
        }
    }
    productsSection.innerHTML = productsInnerHTML
}
generateProducts()