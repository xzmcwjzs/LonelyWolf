﻿using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_GeneDetection_AddService :IBaseService<Chronic_disease_Comm_Testing_GeneDetection_Add>
    {
        bool UpdateSubjective(List<Chronic_disease_Comm_Testing_GeneDetection_Add> subjectiveList, string id);
    }
}
