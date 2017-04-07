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
    public class PeopleController : ApiController
    {
        private AbsaEntities db = new AbsaEntities();

        // GET: api/People
        [HttpOptions]
        [AllowAnonymous]
        public bool OptionsResponse()
        {
            return true;
        }

        [HttpGet]
        public IEnumerable<PersonModel> GetPersons()
        {
            return db.Persons.ToList().Select(x=>PersonModelMap(x));
        }

        // GET: api/People/5
        [ResponseType(typeof(Person))]
        public IHttpActionResult GetPerson(int id)
        {
            Person person = db.Persons.Find(id);
            if (person == null)
            {
                return NotFound();
            }

            return Ok(PersonModelMap(person));
        }

        // POST: api/People
        [ResponseType(typeof(Person))]
        public IHttpActionResult PostPerson(PersonModel person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (person.PersonId !=0)
            {
                var personInDb = db.Persons.Single(x => x.PersonId == person.PersonId);
                MapPersonModelTOExistingPerson(person, personInDb);
            }
            else
            {
                var personDbModel = PersonDbap(person);
                db.Persons.Add(personDbModel);
            }
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = person.PersonId }, person);
        }

   


        private PersonModel PersonModelMap(Person x)
        {
            return new PersonModel()
            {
                Name = x.Name,
                Surname = x.Surname,
                CountryId = x.Country.CountryId,
                CountryText = x.Country.Value,
                PersonId = x.PersonId
            };
        }

        private Person PersonDbap(PersonModel x)
        {
            return new Person()
            {
                Name = x.Name,
                Surname = x.Surname,
                CountryId = x.CountryId,
                PersonId = x.PersonId
            };
        }

        private void MapPersonModelTOExistingPerson(PersonModel person, Person personInDb)
        {
            personInDb.Name = person.Name;
            personInDb.Surname = person.Surname;
            personInDb.CountryId = person.CountryId;
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