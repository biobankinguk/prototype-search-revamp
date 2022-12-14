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

        private static readonly string[] consentRestrictions = new[]
        {
            "Use by non-profit orgs", "Use by academic professionals", "Use for non-profit purposes", "Use for research purposes"
        };

        private static readonly string[] sampleTypes = new[]
        {
            "DNA", "RNA", "Plasma", "Serum", "Tissue", "Whole blood"
        };

        private static readonly DonorModel donorModel1 = new DonorModel
        {
            Sex = "Female",
            Age = "> 40",
            DonorCount = "250"
        };
        private static readonly DonorModel donorModel2 = new DonorModel
        {
            Sex = "Male",
            Age = "> 40",
            DonorCount = "750"
        };
        private static readonly DonorModel donorModel3 = new DonorModel
        {
            Sex = "Male",
            Age = "18-40",
            DonorCount = "1000"
        };
        private static readonly DonorModel donorModel4 = new DonorModel
        {
            Sex = "Female",
            Age = "18-40",
            DonorCount = "750"
        };


        [HttpGet]
        public List<DiseaseModel> Get()
        {
            var list = new List<DiseaseModel>();
            var donorModels = new List<DonorModel>();
            donorModels.Add(donorModel1);
            donorModels.Add(donorModel2);
            donorModels.Add(donorModel3);
            donorModels.Add(donorModel4);

            var model = new DiseaseModel
            {
                DiseaseTerm = "Malignant tumor of breast",
                Biobank = "Wales cancer bank",
                AssociatedData = associatedData,
                Consent = consentRestrictions,
                SampleTypes = sampleTypes,
                Donor = donorModels
            };
            list.Add(model);
            return list;

        }
        
    }
}
