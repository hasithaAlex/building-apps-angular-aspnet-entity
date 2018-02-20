using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(DbContextOptions<ProjectContext> contextOptions) : base(contextOptions) { }

        public DbSet<Models.Question> Questions  { get; set; }
    }
}
