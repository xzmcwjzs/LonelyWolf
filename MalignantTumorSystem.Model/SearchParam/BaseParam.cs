﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.SearchParam
{
   public class BaseParam
    {
       public int PageIndex { get; set; }
       public int PageSize { get; set; }
       public int TotalCount { get; set; }
    }
}
