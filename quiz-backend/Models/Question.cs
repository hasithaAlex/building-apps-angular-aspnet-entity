using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quiz_backend.Models
{
    public class Question
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public string CorrectAnswer { get; set; }
        public string Answer01 { get; set; }
        public string Answer02 { get; set; }
        public string answer03 { get; set; }
    }
}
