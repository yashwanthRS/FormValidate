using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FormApplication.Models
{
    public class newUsers
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string User_Password { get; set; }
        public string Mobile_number { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
    }
}