using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiseaseController : ControllerBase
    {
        private readonly ILogger<DiseaseController> _logger;
        public DiseaseController(ILogger<DiseaseController> logger)
        {
            _logger = logger;
        }

        private static readonly string[] associatedData = new[]
{
            "Clinical Records", "Cold ischemic time", "Followup records", "Genealogical records", "National registries"
        };

        private static readonly string[] sampleTypes = new[]
{
            "DNA", "RNA", "Plasma", "Serum", "Tissue", "Whole blood"
        };

        private static readonly DonorModel donorModel = new DonorModel
        {
            Sex = "Female",
            Age = "> 40 Years",
            DonorCount = "101-500"
        };

        [HttpGet]
        public DiseaseModel Get()
        {
            return new DiseaseModel
            {
                DiseaseTerm = "Malignant tumor of breast",
                Biobank = "Wales cancer bank",
                AssociatedData = associatedData,
                SampleTypes = sampleTypes,
                Donor = donorModel
            };

        }
        
    }
}
