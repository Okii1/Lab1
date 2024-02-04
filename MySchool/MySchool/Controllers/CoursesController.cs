using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySchool.Models;
using System.Data.SqlClient;

namespace MySchool.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : Controller
    {
        private readonly IConfiguration _configuration;
        public CoursesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("GetAllCourses")]
        public List<Courses> GetAllCourses()
        {
            List<Courses> coursesList = new List<Courses>();

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("SELECT * FROM Courses", con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Courses course = new Courses
                            {
                                Id = Convert.ToInt32(reader["Id"]),
                                Name = Convert.ToString(reader["Name"]),
                                Description = Convert.ToString(reader["Description"]),
                                StartTime = Convert.ToString(reader["StartTime"]),
                                EndTime = Convert.ToString(reader["EndTime"])
                            };

                            coursesList.Add(course);
                        }
                    }
                }
            }

            return coursesList;
        }

        [HttpPost]
        [Route("AddCourses")]
        public string AddCourses(Courses course)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("INSERT INTO Courses (Name, Description, StartTime, EndTime) VALUES (@Name, @description, @StartTime, @EndTime)", con))
                {

                    cmd.Parameters.AddWithValue("@Name", course.Name);
                    cmd.Parameters.AddWithValue("@Description", course.Description);
                    cmd.Parameters.AddWithValue("@StartTime", course.StartTime);
                    cmd.Parameters.AddWithValue("@EndTime", course.EndTime);
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
        [HttpPut]
        [Route("UpdateCourse")]
        public string UpdateCourse(Courses course)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("UPDATE Courses SET Name = @Name, Description = @Description, StartTime = @StartTime, EndTime = @EndTime WHERE Id = @CourseId", con))
                {
                    cmd.Parameters.AddWithValue("@CourseId", course.Id);
                    cmd.Parameters.AddWithValue("@Name", course.Name);
                    cmd.Parameters.AddWithValue("@Description", course.Description);
                    cmd.Parameters.AddWithValue("@StartTime", course.StartTime);
                    cmd.Parameters.AddWithValue("@EndTime", course.EndTime);

                    int i = cmd.ExecuteNonQuery();

                    if (i > 0)
                    {
                        return "Data updated";
                    }
                    else
                    {
                        return "Error updating data";
                    }
                }
            }
        }
        [HttpDelete]
        [Route("DeleteCourse/{courseId}")]
        public string DeleteCourse(int courseId)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("DELETE FROM Courses WHERE Id = @CourseId", con))
                {
                    cmd.Parameters.AddWithValue("@CourseId", courseId);

                    int i = cmd.ExecuteNonQuery();

                    if (i > 0)
                    {
                        return "Data deleted";
                    }
                    else
                    {
                        return "Error deleting data";
                    }
                }
            }
        }

    }
}
