using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class FacetModel
    {
        public SampleDetailsModel SampleDetails { get; set; }
        public DonorInfoModel DonorInformation { get; set; }
        public ConsentModel ConsentModel { get; set; }
    }
}
