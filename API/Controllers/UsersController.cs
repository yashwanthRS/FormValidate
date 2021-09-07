using FormApplication.Models;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;

public class UsersController : ApiController
    {
      public HttpResponseMessage Get()
       {
            string query = @"
                    select UserId,FirstName,LastName,UserName,Email,User_Password,Mobile_number,City,Zipcode from
                    dbo.newUsers
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["UserFormAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
       }


      public string Post(newUsers dep)
       {
          try
            {
                string query = @"
                 insert into dbo.newUsers values
                  (
                    '" + dep.FirstName + @"'
                     ,'" + dep.LastName + @"'
                     ,'" + dep.UserName + @"'
                       ,'" + dep.Email + @"'
                      ,'" + dep.User_Password + @"'
                      ,'" + dep.Mobile_number + @"'
                        ,'" + dep.City + @"'
                       ,'" + dep.Zipcode + @"'
                    )
                  ";

            DataTable table = new DataTable();
                    using (var con = new SqlConnection(ConfigurationManager.
                        ConnectionStrings["UserFormAppDB"].ConnectionString))
                    using (var cmd = new SqlCommand(query, con))
                    using (var da = new SqlDataAdapter(cmd))
                    {
                        cmd.CommandType = CommandType.Text;
                        da.Fill(table);
                    }

                    return "Added Successfully!!";
           }
           catch (Exception)
          {

                    return "Failed to Add!!";
           }
       }

      public string Put(newUsers dep)
                        {
                            try
                            {
                                string query = @"
                                    update dbo.newUsers set
                                    FirstName='" + dep.FirstName + @"'
                                    ,LastName='"+dep.LastName + @"'
                                    ,UserName='" + dep.UserName + @"'
                                    ,Email='" + dep.Email + @"'
                                    ,User_Password='" + dep.User_Password + @"'
                                    ,Mobile_number='" + dep.Mobile_number + @"'
                                    ,City='" + dep.City + @"'
                                    ,Zipcode='" + dep.Zipcode + @"'
                                    where UserId=" + dep.UserId + @"
                                    ";

                                DataTable table = new DataTable();
                                using (var con = new SqlConnection(ConfigurationManager.
                                    ConnectionStrings["UserFormAppDB"].ConnectionString))
                                using (var cmd = new SqlCommand(query, con))
                                using (var da = new SqlDataAdapter(cmd))
                                {
                                    cmd.CommandType = CommandType.Text;
                                    da.Fill(table);
                                }

                                return "Updated Successfully!!";
                            }
                            catch (Exception)
                            {

                                return "Failed to Update!!";
                            }
                        }

      public string Delete(int id)
                    {
                        try
                        {
                            string query = @"
                                delete from dbo.newUsers 
                                where UserId=" + id + @"
                                ";

                            DataTable table = new DataTable();
                            using (var con = new SqlConnection(ConfigurationManager.
                                ConnectionStrings["UserFormAppDB"].ConnectionString))
                            using (var cmd = new SqlCommand(query, con))
                            using (var da = new SqlDataAdapter(cmd))
                            {
                                cmd.CommandType = CommandType.Text;
                                da.Fill(table);
                            }

                            return "Deleted Successfully!!";
                        }
                        catch (Exception)
                        {

                            return "Failed to Delete!!";
                        }

        

        
        }
    [Route("api/Users/GetAllUserNames")]
    [HttpGet]
    public HttpResponseMessage GetAllUserNames()
    {
        string query = @"
                    select * from dbo.newUsers";

        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
            ConnectionStrings["UserFormAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
            cmd.CommandType = CommandType.Text;
            da.Fill(table);
        }

        return Request.CreateResponse(HttpStatusCode.OK, table);
    }



}