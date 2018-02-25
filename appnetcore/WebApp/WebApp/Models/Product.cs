using System.Collections.Generic;

namespace WebApp.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public double UnitPrice { get; set; }
        public int UnitsInStock { get; set; }
        public bool Discontinued { get; set; }
    }

    public static class Products
    {
        public static List<Product> ListProduct = new List<Product>
        {
            new Product
            {
                ProductID = 1,
                ProductName = "Chai",
                UnitPrice = 18,
                UnitsInStock = 39,
                Discontinued = false
            },
            new Product
            {
                ProductID = 2,
                ProductName = "Chang",
                UnitPrice = 17,
                UnitsInStock = 40,
                Discontinued = false
            },
            new Product
            {
                ProductID = 3,
                ProductName = "Aniseed Syrup",
                UnitPrice = 10,
                UnitsInStock = 13,
                Discontinued = false
            },
            new Product
            {
                ProductID = 4,
                ProductName = "Chef Anton's Cajun Seasoning",
                UnitPrice = 22,
                UnitsInStock = 53,
                Discontinued = false
            },
            new Product
            {
                ProductID = 5,
                ProductName = "Chef Anton's Gumbo Mix",
                UnitPrice = 21.35,
                UnitsInStock = 0,
                Discontinued = true
            },
            new Product
            {
                ProductID = 6,
                ProductName = "Grandma's Boysenberry Spread",
                UnitPrice = 25,
                UnitsInStock = 120,
                Discontinued = false
            },
            new Product
            {
                ProductID = 7,
                ProductName = "Uncle Bob's Organic Dried Pears",
                UnitPrice = 30,
                UnitsInStock = 15,
                Discontinued = false
            }
        };
    }
}
