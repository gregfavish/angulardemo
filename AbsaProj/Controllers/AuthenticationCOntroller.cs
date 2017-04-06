using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using AbsaProj.Models;
using Data;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;

namespace AbsaProj.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*", SupportsCredentials = true)]
    public class AuthenticationController : ApiController
    {
        private ApplicationSignInManager _signInManager;

        public AuthenticationController(ApplicationSignInManager signInManager)
        {
        }

        public AuthenticationController()
        {
        }


        public ApplicationSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.Current.GetOwinContext().Get<ApplicationSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }


        // POST: /Account/Login
        [System.Web.Mvc.HttpPost]
        [System.Web.Mvc.AllowAnonymous]
        public IHttpActionResult LoginAPi(LoginViewModel model)
        {
            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, change to shouldLockout: true
            var result = SignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, shouldLockout: false).Result;
            switch (result)
            {
                case SignInStatus.Success:
                    return Ok(true);
                default:
                    return Ok(false);
            }
        }
    }
}