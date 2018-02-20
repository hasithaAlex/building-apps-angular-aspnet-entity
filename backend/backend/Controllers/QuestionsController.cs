using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
        public void Post([FromBody]Models.Question question)
        {
            context.Questions.Add(question);
            context.SaveChanges();
        }
        
    }
}