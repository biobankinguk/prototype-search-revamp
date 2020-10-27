using API.Models;
using System;
using System.Collections.Generic;

namespace API
{
    public class DiseaseModel
    {
        public string DiseaseTerm { get; set; }
        public string Biobank { get; set; }
        public string[] AssociatedData { get; set; } 
        public string[] SampleTypes { get; set; }
        public DonorModel Donor { get; set; }

    }
}
