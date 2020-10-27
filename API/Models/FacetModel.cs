using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class FacetModel
    {
        public SampleDetailsModel SampleDetails { get; set; }
        public string[] Age { get; set; }
        public string[] Sex { get; set; }
        public string[] ConsentRestrictions { get; set; }
    }
}
