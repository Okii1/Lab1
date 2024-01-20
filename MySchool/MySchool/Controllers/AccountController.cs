using Microsoft.AspNetCore.Mvc;
using MySchool.Models;
using System.Data;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace MySchool.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IConfiguration _configuration;
        public AccountController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("Registration")]
        public string Registration(Users user)
        {
            string hashedPassword = HashPassword(user.Password);
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("INSERT INTO Users (Firstname, Lastname, Email, Password,RoleId) VALUES (@Firstname, @Lastname, @Email, @Password,@RoleId)", con))
                {
                   
                    cmd.Parameters.AddWithValue("@Firstname", user.Firstname);
                    cmd.Parameters.AddWithValue("@Lastname", user.Lastname);
                    cmd.Parameters.AddWithValue("@Email", user.Email);
                    cmd.Parameters.AddWithValue("@Password", hashedPassword);
                    cmd.Parameters.AddWithValue("@RoleId", 2);
                    int i = cmd.ExecuteNonQuery();

                    if (i > 0)
                    {
                        return "Data inserted";
                    }
                    else
                    {
                        return "Error";
                    }
                }
            }
        }

        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
      
        [HttpPost]
        [Route("Login")]
        public string Login(Login login)
        {
        
            string hashedPassword = HashPassword(login.Password);

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Users WHERE Email=@Email", con);
                da.SelectCommand.Parameters.AddWithValue("@Email", login.Email);
                DataTable dt = new DataTable();
                da.Fill(dt);

                if (dt.Rows.Count > 0)
                {
                    string storedHashedPassword = dt.Rows[0]["Password"].ToString();

                   
                    if (BCrypt.Net.BCrypt.Verify(login.Password, storedHashedPassword))
                    {
                        int roleId = Convert.ToInt32(dt.Rows[0]["RoleId"]);
                        return "Data found;" + roleId;
                    }
                }

                return "Error";
            }
        }
        [HttpPost]
        [Route("Logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Ok();
        }
    }
}
