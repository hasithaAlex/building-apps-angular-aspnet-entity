using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using quiz_backend.Models;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Quiz")]
    public class QuizController : Controller
    {
        readonly QuizContext context;
        public QuizController(QuizContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Quiz question)
        {
            // this.context.Questions.Add(question);        
            // await this.context.SaveChangesAsync();
            // return Ok(question);
            return null;
        }
   
    
    
    }
}