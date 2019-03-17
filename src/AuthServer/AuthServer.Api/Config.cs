using System.Collections.Generic;
using AuthServer.Infrastructure.Constants;
using IdentityServer4;
using IdentityServer4.Models;

namespace AuthServer.Api
{
    public class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile(),
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource(Roles.Consumer, "Aycoutay API")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            // client credentials client
            return new List<Client>
            {
                // resource owner password grant client
                new Client
                {
                    ClientId = "ro.aycoutay-mobile",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Email,
                        IdentityServerConstants.StandardScopes.Address,
                        Roles.Consumer
                    },
                    AllowOfflineAccess = true,
                    // Access token life time is 90 days
                    AccessTokenLifetime = 7776000,
                    AbsoluteRefreshTokenLifetime = 10368000  // 120 days
                }
            };
        }
    }
}
