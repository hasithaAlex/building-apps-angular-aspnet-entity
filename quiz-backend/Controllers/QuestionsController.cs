using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quiz_backend.Models;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        [HttpPost]
        public void Post([FromBody]Question question)
        {

        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return new Question[] { 
                new Question{ Text="Question 01" },
                new Question{ Text="Question 02" },
                new Question{ Text="Question 03" }        
            };
        }

    }
}