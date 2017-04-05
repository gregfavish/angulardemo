using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Data;

namespace AbsaProj.Controllers
{
    public class PeopleController : ApiController
    {
        private AbsaEntities db = new AbsaEntities();

        // GET: api/People
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

            return Ok(person);
        }

        // PUT: api/People/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPerson(int id, Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.PersonId)
            {
                return BadRequest();
            }

            db.Entry(person).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        private bool PersonExists(int id)
        {
            throw new NotImplementedException();
        }

        // POST: api/People
        [ResponseType(typeof(Person))]
        public IHttpActionResult PostPerson(PersonModel person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var personDbModel = PersonDbap(person);
            db.Persons.Add(personDbModel);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = personDbModel.PersonId }, person);
        }


        private PersonModel PersonModelMap(Person x)
        {
            return new PersonModel()
            {
                Name = x.Name,
                Surname = x.Surname,
                CountryId = x.Country.CountryId,
                CountryText = x.Country.Value
            };
        }

        private Person PersonDbap(PersonModel x)
        {
            return new Person()
            {
                Name = x.Name,
                Surname = x.Surname,
                CountryId = x.CountryId
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

    public class PersonModel
    {
        public string Name { get; set; }
        public int CountryId { get; set; }
        public string Surname { get; set; }
        public string CountryText { get; set; }
    }
}