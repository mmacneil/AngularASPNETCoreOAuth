using IdentityServer4.Models;
 

namespace AuthServer.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }       
        public ErrorMessage Error { get; set; }
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}