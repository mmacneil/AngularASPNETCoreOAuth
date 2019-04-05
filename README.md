# AngularASPNETCoreOAuth
Sample project based on <a href="https://fullstackmark.com/post/21/user-authentication-and-identity-with-angular-aspnet-core-and-identityserver">the blog post</a> demonstrating how to build out an <a href="https://oauth.net/2/grant-types/implicit/" target="_blank">Implicit Grant</a> OAuth flow utilizing OAuth2/OpenID Connect protocols implementing IdentityServer4 as our OpenID Connect Provider and then using it to authenticate an Angular SPA client to authorize access to an independent ASP.NET Core Web API.

<img src="https://fullstackmark.com/img/posts/21/open-id-connect-oauth-flow-angular-aspnet-core-identityserver.gif" />
 
## Development Environment
- Visual Studio 2019 Community
- Visual Studio Code 1.32.3 
- .NET Core SDK 2.2.104 
- Angular 7.2.9
- IdentityServer4 2.4.0 
- SQL Server Express 2016 LocalDB

## Setup
To run the demo:

1. Clone/Fork/Download this repository.
2. Create the database on your SQL Server Express LocalDB by using the dotnet cli to run the migrations from within the AuthServer.Infrastrucuture project folder.
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context AppIdentityDbContext</code></pre>
<pre><code>AuthServer.Infrastructure> dotnet ef database update --context PersistedGrantDbContext</code></pre>
3. Install Angular CLI if necessary. `npm install -g @angular/cli`


