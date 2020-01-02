# AngularASPNETCoreOAuth
Sample project based on <a href="https://fullstackmark.com/post/21/user-authentication-and-identity-with-angular-aspnet-core-and-identityserver">the blog post</a> demonstrating how to build out an <a href="https://oauth.net/2/grant-types/implicit/" target="_blank">Implicit Grant</a> OAuth flow utilizing OAuth2/OpenID Connect protocols implementing IdentityServer4 as our OpenID Connect Provider and then using it to authenticate an Angular SPA client to authorize access to an independent ASP.NET Core Web API.

<img src="https://fullstackmark.com/img/posts/21/open-id-connect-oauth-flow-angular-aspnet-core-identityserver.gif" />
 
## Development Environment
- Visual Studio 2019 Community
- Visual Studio Code 1.32.3 
- .NET Core SDK 3.1 
- Angular 8
- IdentityServer4 3.0.1
- SQL Server Express 2016 LocalDB

## Setup

#### To run the demo:

**1.** Clone/Fork/Download this repository.

**2.** Create the database on your SQL Server Express LocalDB by using the dotnet cli to run the migrations from within the AuthServer.Infrastrucuture project folder.
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context AppIdentityDbContext</code></pre>
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context PersistedGrantDbContext</code></pre>

**3.** Install Angular CLI if necessary. `npm install -g @angular/cli`

**4.** Install Angular SPA dependencies.
<pre><code>Spa\oauth-client> npm install</code></pre>

**5.** Run the Angular CLI dev server to build and run the Angular app.
<pre><code>Spa\oauth-client> ng serve</code></pre>
  - **Important:** This must be running on the default http://localhost:4200

**6.** Build/Run the `AuthServer.sln` solution using your preferred method: Visual Studio,  VSCode, dotnet CLI.
  - **Important:** This must be running on http://localhost:5000

**7.** Build/Run the `Resource.Api.sln` solution using your preferred method: Visual Studio,  VSCode, dotnet CLI.
  - **Important:** This must be running on http://localhost:5050

**8.** Point a browser to `http://localhost:4200` to access the Angular client.

**9.** Use the *Signup* and *Login* functions to perform the authentication flow, then try and access the *Top Secret Area* to hit the protected ASP.NET Core Web API.

## Contact
mark@fullstackmark.com
 

