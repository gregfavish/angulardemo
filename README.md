# Absa Assesment

This is a simple angular 2 application that communicates to a .net API which uses SQL server for data storage.
The application user is authenticated before access is granted to the site - use the username "a@b.com" and password 'abc123' to 

# Running the application locally:

The angular frontend and database are fully dockerised - just run 'docker-compose up' on the root directory (give it around 60 seconds to fully create and see the database)


# Future Improvements

-Improve environemntal configuration (make configuration on the angular side and web API configurable between different envronments (local,dev,prod etc))

-Authentication works but could be better integrated between server and client (is currently hooking into Microsoft.Owin cookie based security - a session cookie is sent on every api request however something like JWT tokens may be a better fit for a SPA)

-Centralize api url on angular (right now it is hardcoded in the services instead of injected in from a central class/config file)

-Error handling on client side when the API is slow or errors on the API (make sure all API calls errrors and delays are handled in a uniform way -creating an error page/notification and loading bars / spinners on the templates-by possible using a base class)

#Lessons Learned


	
