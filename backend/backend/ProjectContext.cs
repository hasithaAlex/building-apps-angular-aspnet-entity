using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;

namespace backend
{
    public class ProjectContext : DbContext
    {
        public ProjectContext(DbContextOptions<ProjectContext> contextOptions) : base(contextOptions) { }

        public DbSet<Models.Question> Questions  { get; set; }

        public DbSet<backend.Models.Quiz> Quiz { get; set; }
    }
}
