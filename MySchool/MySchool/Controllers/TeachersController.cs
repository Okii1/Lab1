using Microsoft.AspNetCore.Mvc;
using MySchool.Models;
using System.Data.SqlClient;

namespace MySchool.Controllers
{
    public class TeachersController : Controller
    {
        private readonly IConfiguration _configuration;
        public TeachersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("GetAllTeachers")]
        public List<Teachers> GetAllTeachers()
        {
            List<Teachers> teachersList = new List<Teachers>();

            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("SELECT * FROM Teachers", con))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Teachers teacher = new Teachers
                            {
                                Id = Convert.ToInt32(reader["Id"]),
                                Name = Convert.ToString(reader["Name"]),
                                Surname = Convert.ToString(reader["Surname"]),
                                Description = Convert.ToString(reader["Description"]),
                                CourseId = Convert.ToInt32(reader["CourseId"])
                            };

                            teachersList.Add(teacher);
                        }
                    }
                }
            }

            return teachersList;
        }
        [HttpPost]
        [Route("AddTeachers")]
        public string AddTeachers(Teachers teachers)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();
                using (SqlCommand cmd = new SqlCommand("INSERT INTO Teachers (Name, Surname, Description,CourseId) VALUES (@Name, @Surname, @Description,@CourseId)", con))
                {
                    cmd.Parameters.AddWithValue("@Name", teachers.Name);
                    cmd.Parameters.AddWithValue("@Surname", teachers.Surname);
                    cmd.Parameters.AddWithValue("@Description", teachers.Description);
                    cmd.Parameters.AddWithValue("@CourseId", teachers.CourseId);

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
        [Route("UpdateTeachers")]
        public string UpdateTeachers(Teachers teachers)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("UPDATE Teachers SET Name = @Name,Surname=@Surname, Description = @Description WHERE Id = @TeacherId", con))
                {
                    cmd.Parameters.AddWithValue("@TeacherId", teachers.Id);
                    cmd.Parameters.AddWithValue("@Name", teachers.Name);
                    cmd.Parameters.AddWithValue("@Surname", teachers.Surname);
                    cmd.Parameters.AddWithValue("@Description", teachers.Description);
                    cmd.Parameters.AddWithValue("@CourseId",teachers.CourseId);

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
        [Route("DeleteTeachers/{teacherId}")]
        public string DeleteTeachers(int teacherId)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("MySchool")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("DELETE FROM Teachers WHERE Id = @TeacherId", con))
                {
                    cmd.Parameters.AddWithValue("@TeacherId", teacherId);

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
