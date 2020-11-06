using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class FacetModel
    {
        /*
        public SampleDetailsModel SampleDetails { get; set; }
        public DonorInfoModel DonorInformation { get; set; }
        public ConsentModel ConsentModel { get; set; } */

        //Sample details
        public string[] BodySystemArea { get; set; }
        public string[] SampleType { get; set; }
        //Donor info
        public string[] Age { get; set; }
        public string[] Sex { get; set; }
        public string[] Ethnicity { get; set; }

        //Consnet model
        public string[] ConsentRestrictions { get; set; }
    }
}
