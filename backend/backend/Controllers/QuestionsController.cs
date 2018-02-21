using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore; 

namespace backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly ProjectContext context;

        public QuestionsController(ProjectContext context)
        {
            this.context = context;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return context.Questions;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question question)
        {
            if (id != question.Id)
                return BadRequest();

            context.Entry(question).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(question);
        }

    }
}