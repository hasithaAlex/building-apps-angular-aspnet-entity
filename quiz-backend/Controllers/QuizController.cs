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
        readonly QuizContext _context;
        public QuizController(QuizContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Quiz> Get(){
            return this._context.quizzes;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Quiz quiz)
        {
            this._context.quizzes.Add(quiz);
            await this._context.SaveChangesAsync();
            return Ok(quiz);
        }
   
        
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Quiz quiz)
        {
            if(id!=quiz.ID)
                return BadRequest();

            // var question = await context.Questions.SingleOrDefaultAsync(q=>q.ID == id);
            _context.Entry(quiz).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(quiz); 
        }
    

    }
}