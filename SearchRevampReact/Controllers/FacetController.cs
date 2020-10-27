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
    public class FacetController : ControllerBase
    {
        private readonly ILogger<FacetController> _logger;
        public FacetController(ILogger<FacetController> logger)
        {
            _logger = logger;
        }

        private static readonly string[] bodyAreas = new[]
{
            "Circulatory", "Digestive", "Endocrine", "Exocrine", "Lymphatic", "Muscular", "Nervous", "Renal", "Reproductive", "Respiratory", "Skeletal"
        };

        private static readonly string[] sampleTypes = new[]
        {
            "Bone marrow", "cDNA/mRNA", "Cell lines", "Core biopsy", "DNA", "Faeces", "microRNA", "Peripheral blood cells", "Plasma", "PM tissue", "Primary cells"
        };

        private static readonly string[] ages = new[]
        {
            "Fetus", "Neonate (0 - 1 month)", "Infant (1 month - 2 years)", "Young child (2 - 6 years)", "Young child (2 - 6 years)", "Adolescent (12 - 18 years)", "Young adult (18 - 40 years)", "Adult (> 40 years)"
        };

        private static readonly string[] sex = new[]
        {
            "Male", "Female", "Unknown"
        };

        private static readonly string[] consentRestrictions = new[]
        {
            "Use by non-profit orgs", "Use by academic professionals", "Use for non-profit purposes", "Use for research purposes"
        };

        private static readonly SampleDetailsModel sampleDetailsModel = new SampleDetailsModel
        {
            SampleType = sampleTypes,
            BodySystemArea = bodyAreas

        };


        [HttpGet]
        public FacetModel Get()
        {
            return new FacetModel
            {
                ConsentRestrictions = consentRestrictions,
                Age = ages,
                Sex = sex,
                SampleDetails = sampleDetailsModel
            };

        }

    }
}
