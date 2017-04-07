using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Data;

namespace AbsaProj.Controllers
{
    [Authorize]
    public class CountriesController : ApiController
    {
        private AbsaEntities db = new AbsaEntities();

        // GET: api/Countries
        public IEnumerable<CountryModel> GetCountries()
        {
            return db.Countries.ToList().Select(x => CountryModelMap(x)); ;
        }

        private CountryModel CountryModelMap(Country x)
        {
            return new CountryModel()
            {
                Name = x.Value,
                Id = x.CountryId,
            };
        }

      
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}