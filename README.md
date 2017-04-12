# Absa Assesment

This is a simple angular 2 application that communicates to a .net API which uses SQL server for data storage.
The application user is authenticated before access is granted to the site - use the username "a@b.com" and password 'abc123'

# Running the application locally:

The angular frontend and database are fully dockerised - just run 'docker-compose up' on the root directory (give it around 60 seconds to fully create and see the database) - .NET web API docker coming soon - it must be started manually via visual studio for now


# Future Improvements
- Improve environemntal configuration (make configuration on the angular side and web API configurable between different envronments (local,dev,prod etc))

- Authentication works but could be better integrated between server and client (is currently hooking into Microsoft.Owin cookie based security - a session cookie is sent on every api request however something like JWT tokens may be a better fit for a SPA)

- Centralize api url on angular (right now it is hardcoded in the services instead of injected in from a central class/config file)

- Error handling on client side when the API is slow or errors on the API (make sure all API calls errrors and delays are handled in a uniform way -creating an error page/notification and loading bars / spinners on the templates-by possible using a base class)

# Lessons Learned

- Learned to use the angular CLI to spin up a fully scaffoleded angular frontend that is easy controllable using npm via command line

- Learned the power of using typescript in the browser and leveraging types as opposed to dynamic js objects

- Ran into many CORS issues implimenting the API and angular frontend and how to resolve them (https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

- Desinged authentication to work using Microsoft.Owin and had to think about how authentication works in the context of a SPA

- Docker! Learned to build custom images based off base images created (e.g a linux image with SQL server installed) , starting containers based off these images and lanuching images together using docker compose. This allows easy setup of a new environemnt once the docker files are fully working

- ASP.net API worked well in development but a big pain to "dockerise" (image very large , running windows and linux contianers simultaneously)

# Issues encountered

- Linux continers for the angular site and the database worked fine in windows 8. An upgrade to windows 10 was required to run windows continers which are required (https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/system-requirements). This reninstall lost me a day of time due to reinstallation of IDES, docker, pulling images again etc.

- The image that would work natively with the API is microsoft/aspnet/ -https://hub.docker.com/r/microsoft/aspnet/ - this image is about 5GB and would take about 22 hours to pull on the network speeds I was getting

- Running windows and linux conainers seems to be doable but still a challenge https://stefanscherer.github.io/run-linux-and-windows-containers-on-windows-10/

	
