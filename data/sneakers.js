// Sample data
const data = [
    {
        "id": 1,
        "name": "Air Max 90",
        "brand": "Nike",
        "price": 120.00,
        "description": "The Nike Air Max 90 stays true to its OG roots with the iconic Waffle outsole, stitched overlays, and classic TPU accents.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["White", "Black", "Grey", "Red"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/nike-air-max-90-white.jpg",
            "https://yourdomain.com/images/nike-air-max-90-black.jpg"
        ]
    },
    {
        "id": 2,
        "name": "UltraBoost 21",
        "brand": "Adidas",
        "price": 180.00,
        "description": "These running shoes are designed with a precise fit and Boost cushioning that energizes your every stride.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["Black", "Blue", "Grey"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/adidas-ultraboost-21-black.jpg",
            "https://yourdomain.com/images/adidas-ultraboost-21-blue.jpg"
        ]
    },
    {
        "id": 3,
        "name": "Classic Leather",
        "brand": "Reebok",
        "price": 75.00,
        "description": "The Reebok Classic Leather is a timeless icon, featuring a leather upper for a clean, sophisticated look.",
        "sizes": [6, 7, 8, 9, 10, 11],
        "colors": ["White", "Black"],
        "stock_status": "Out of Stock",
        "images": [
            "https://yourdomain.com/images/reebok-classic-leather-white.jpg",
            "https://yourdomain.com/images/reebok-classic-leather-black.jpg"
        ]
    },
    {
        "id": 4,
        "name": "Chuck Taylor All Star",
        "brand": "Converse",
        "price": 55.00,
        "description": "The Chuck Taylor All Star is a classic sneaker with a durable canvas upper and a timeless silhouette.",
        "sizes": [6, 7, 8, 9, 10, 11, 12, 13],
        "colors": ["White", "Black", "Red", "Blue"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/converse-chuck-taylor-white.jpg",
            "https://yourdomain.com/images/converse-chuck-taylor-black.jpg"
        ]
    },
    {
        "id": 5,
        "name": "Old Skool",
        "brand": "Vans",
        "price": 60.00,
        "description": "The Vans Old Skool is a low top lace-up featuring sturdy canvas and suede uppers with the iconic side stripe.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["Black", "White", "Blue"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/vans-old-skool-black.jpg",
            "https://yourdomain.com/images/vans-old-skool-white.jpg"
        ]
    },
    {
        "id": 6,
        "name": "Gel-Kayano 27",
        "brand": "ASICS",
        "price": 160.00,
        "description": "The ASICS Gel-Kayano 27 offers excellent support and comfort for runners seeking stability.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["White", "Black", "Blue"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/asics-gel-kayano-27-white.jpg",
            "https://yourdomain.com/images/asics-gel-kayano-27-black.jpg"
        ]
    },
    {
        "id": 7,
        "name": "FuelCell Rebel v2",
        "brand": "New Balance",
        "price": 130.00,
        "description": "The New Balance FuelCell Rebel v2 is designed for a lightweight, responsive ride and performance-driven comfort.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["Black", "Yellow", "Blue"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/nb-fuelcell-rebel-v2-black.jpg",
            "https://yourdomain.com/images/nb-fuelcell-rebel-v2-yellow.jpg"
        ]
    },
    {
        "id": 8,
        "name": "Wave Rider 24",
        "brand": "Mizuno",
        "price": 140.00,
        "description": "The Mizuno Wave Rider 24 delivers a smooth and comfortable running experience with advanced cushioning.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["Blue", "Grey", "Red"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/mizuno-wave-rider-24-blue.jpg",
            "https://yourdomain.com/images/mizuno-wave-rider-24-grey.jpg"
        ]
    },
    {
        "id": 9,
        "name": "Gel-Nimbus 23",
        "brand": "ASICS",
        "price": 150.00,
        "description": "The ASICS Gel-Nimbus 23 offers superior comfort and long-lasting cushioning for neutral runners.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["Black", "White", "Grey"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/asics-gel-nimbus-23-black.jpg",
            "https://yourdomain.com/images/asics-gel-nimbus-23-white.jpg"
        ]
    },
    {
        "id": 10,
        "name": "Pegasus 38",
        "brand": "Nike",
        "price": 120.00,
        "description": "The Nike Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor.",
        "sizes": [6, 7, 8, 9, 10, 11, 12],
        "colors": ["Black", "White", "Blue"],
        "stock_status": "In Stock",
        "images": [
            "https://yourdomain.com/images/nike-pegasus-38-black.jpg",
            "https://yourdomain.com/images/nike-pegasus-38-white.jpg"
        ]
    }
];

module.exports = data;