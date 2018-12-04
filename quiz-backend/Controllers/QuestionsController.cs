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
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return this.context.Questions;
        }

        // [HttpPost]
        // public void Post([FromBody]Question question)
        // {
        //     this.context.Questions.Add(question);        
        //     this.context.SaveChanges();
        // }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            this.context.Questions.Add(question);        
            await this.context.SaveChangesAsync();
            return Ok(question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Question question)
        {
            if(id!=question.ID)
                return BadRequest();

            // var question = await context.Questions.SingleOrDefaultAsync(q=>q.ID == id);
            context.Entry(question).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(question); 
        }
    
    
    
    }
}