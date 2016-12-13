using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Enum
{
   public enum EHRAbstractTypeEnum
    {
        [Description("Comm_ResidentFile")]
       ResidentInfo,
       [Description("Chronic_disease_Diabetes_family")]
       Family,
       [Description("Chronic_disease_SmokeAndDrink")]
       SmokeAndDrink,
       [Description("Chronic_disease_DailyLife")]
       EHabits,
       [Description("Chronic_disease_PhysicalExercise")]
       Physical,
       [Description("Chronic_disease_Outpatient")]
       Outpatient,
       [Description("Chronic_disease_Hospitalization")]
       Hospitalization,
       [Description("Chronic_disease_Comm_Testing_Blood")]
       Blood,
       [Description("Chronic_disease_Comm_Testing_BMC")]
       BMC,
       [Description("Chronic_disease_Comm_Testing_CSF")]
       CSF,
       [Description("Chronic_disease_Comm_Testing_Faeces")]
       Faeces,
       [Description("Chronic_disease_Comm_Testing_GeneDetection")]
       GeneDetection,
       [Description("Chronic_disease_Comm_Humor")]
       HumorCheck,
       [Description("Chronic_disease_Comm_Testing_SCE")]
       SCE,
       [Description("Chronic_disease_Comm_Testing_Sputum")]
       Sputum,
       [Description("Chronic_disease_Comm_Testing_Urine")]
       Urine,
       [Description("Chronic_disease_Comm_Diagnostic")]
       DiaInfo,
       [Description("Chronic_disease_Comm_Medication")]
       MedInfo, 
       [Description("Chronic_disease_Comm_Operation")]
       OperR
      
    }
}
