using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApp.Models;
using Microsoft.AspNetCore.Authorization;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        [Authorize]
        [Route("allproducts")]
        public string AllProducts()
        {
            return JsonConvert.SerializeObject(Products.ListProduct);
        }

        [Authorize]
        [HttpPost]
        [Route("productbyid")]
        public string ProductById([FromBody]Product product)
        {
            return JsonConvert.SerializeObject(Products.ListProduct
                .FirstOrDefault(p => p.ProductID == product.ProductID));
        }
    }
}