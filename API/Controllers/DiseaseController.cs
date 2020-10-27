using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("api[controller]")]
    public class DiseaseController : ControllerBase
    {
        private readonly ILogger<DiseaseController> _logger;
        public DiseaseController(ILogger<DiseaseController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<DiseaseModel> Get()
        {

        }
    }
}
