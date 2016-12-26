 
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.BLL;

namespace MalignantTumorSystem.WebApplication.Ninject
{
    public partial class NinjectRegister
    {
        private static readonly IKernel Kernel;
        static NinjectRegister()
        {
            Kernel = new StandardKernel();
            AddBindings();
        }

        public static void RegisterFovMvc()
        {
            DependencyResolver.SetResolver(new NinjectDependencyResolverForMvc(Kernel));
        }

        public static void RegisterFovWebApi(HttpConfiguration config)
        {
            config.DependencyResolver = new NinjectDependencyResolverForWebApi(Kernel);
        }
        //绑定接口实现
        private static void AddBindings()
        {
           Kernel.Bind<IBasicInformationService>().To<BasicInformationService>();
		
	        Kernel.Bind<IComm_Platform_WorkerService>().To<Comm_Platform_WorkerService>();
		
	        Kernel.Bind<IMT_RoleInfoService>().To<MT_RoleInfoService>();
		
	        Kernel.Bind<IMT_WorkerRoleInfoService>().To<MT_WorkerRoleInfoService>();
		
	        Kernel.Bind<IShare_ProvinceService>().To<Share_ProvinceService>();
		
	        Kernel.Bind<IShare_CityService>().To<Share_CityService>();
		
	        Kernel.Bind<IShare_CountyService>().To<Share_CountyService>();
		
	        Kernel.Bind<IShare_StreetService>().To<Share_StreetService>();
		
	        Kernel.Bind<IShare_CommunityInfoService>().To<Share_CommunityInfoService>();
		
	        Kernel.Bind<IComm_TumourService>().To<Comm_TumourService>();
		
	        Kernel.Bind<IComm_ResidentFileService>().To<Comm_ResidentFileService>();
		
	        Kernel.Bind<IComm_ResidentFile_Followup_DiseaseService>().To<Comm_ResidentFile_Followup_DiseaseService>();
		
	        Kernel.Bind<IComm_ResidentFile_Followup_SurgeryService>().To<Comm_ResidentFile_Followup_SurgeryService>();
		
	        Kernel.Bind<IComm_ResidentFile_Followup_TraumaService>().To<Comm_ResidentFile_Followup_TraumaService>();
		
	        Kernel.Bind<IComm_ResidentFile_Followup_Blood_TransfusionService>().To<Comm_ResidentFile_Followup_Blood_TransfusionService>();
		
	        Kernel.Bind<IComm_ResidentFile_Followup_Family_DiseaseService>().To<Comm_ResidentFile_Followup_Family_DiseaseService>();
		
	        Kernel.Bind<IChronic_disease_SmokeAndDrinkService>().To<Chronic_disease_SmokeAndDrinkService>();
		
	        Kernel.Bind<IComm_EHR_AbstractService>().To<Comm_EHR_AbstractService>();
		
	        Kernel.Bind<IComm_ResidentFile_Change_AddressService>().To<Comm_ResidentFile_Change_AddressService>();
		
	        Kernel.Bind<IShare_DataDictionaryService>().To<Share_DataDictionaryService>();
		
	        Kernel.Bind<IChronic_disease_Diabetes_familyService>().To<Chronic_disease_Diabetes_familyService>();
		
	        Kernel.Bind<IChronic_disease_Diabetes_family_relationService>().To<Chronic_disease_Diabetes_family_relationService>();
		
	        Kernel.Bind<IChronic_disease_DailyLifeService>().To<Chronic_disease_DailyLifeService>();
		
	        Kernel.Bind<IChronic_disease_PhysicalExerciseService>().To<Chronic_disease_PhysicalExerciseService>();
		
	        Kernel.Bind<IChronic_disease_PhysicalExercise_AddService>().To<Chronic_disease_PhysicalExercise_AddService>();
		
	        Kernel.Bind<IICD_10_oldService>().To<ICD_10_oldService>();
		
	        Kernel.Bind<IChronic_disease_Comm_MedicineService>().To<Chronic_disease_Comm_MedicineService>();
		
	        Kernel.Bind<IChronic_disease_Data_DiseaseNameService>().To<Chronic_disease_Data_DiseaseNameService>();
		
	        Kernel.Bind<IChronic_disease_Comm_DiagnosticService>().To<Chronic_disease_Comm_DiagnosticService>();
		
	        Kernel.Bind<IChronic_disease_OutpatientService>().To<Chronic_disease_OutpatientService>();
		
	        Kernel.Bind<IChronic_disease_Comm_MedicationService>().To<Chronic_disease_Comm_MedicationService>();
		
	        Kernel.Bind<IChronic_disease_Outpatient_JudgeService>().To<Chronic_disease_Outpatient_JudgeService>();
		
	        Kernel.Bind<IChronic_disease_Outpatient_PrescriptionService>().To<Chronic_disease_Outpatient_PrescriptionService>();
		
	        Kernel.Bind<IChronic_disease_Outpatient_AccessoryExaminationService>().To<Chronic_disease_Outpatient_AccessoryExaminationService>();
		
	        Kernel.Bind<IChronic_disease_Comm_MedicationAddService>().To<Chronic_disease_Comm_MedicationAddService>();
		
	        Kernel.Bind<IChronic_disease_HospitalizationService>().To<Chronic_disease_HospitalizationService>();
		
	        Kernel.Bind<IChronic_disease_Hospitalization_ConsultationRecordService>().To<Chronic_disease_Hospitalization_ConsultationRecordService>();
		
	        Kernel.Bind<IChronic_disease_Hospitalization_CourseRecordService>().To<Chronic_disease_Hospitalization_CourseRecordService>();
		
	        Kernel.Bind<IChronic_disease_Hospitalization_ExpensesService>().To<Chronic_disease_Hospitalization_ExpensesService>();
		
	        Kernel.Bind<IChronic_disease_Hospitalization_DischargeAbstractService>().To<Chronic_disease_Hospitalization_DischargeAbstractService>();
		
	        Kernel.Bind<IChronic_disease_Hospitalization_DischargeAbstract_AdviceService>().To<Chronic_disease_Hospitalization_DischargeAbstract_AdviceService>();
		
	        Kernel.Bind<IChronic_disease_Comm_DiagnosticAddService>().To<Chronic_disease_Comm_DiagnosticAddService>();
		
	        Kernel.Bind<IChronic_disease_Data_NamesService>().To<Chronic_disease_Data_NamesService>();
		
	        Kernel.Bind<IChronic_disease_Data_UnitsService>().To<Chronic_disease_Data_UnitsService>();
		
	        Kernel.Bind<IChronic_disease_Data_SectionsService>().To<Chronic_disease_Data_SectionsService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_BloodService>().To<Chronic_disease_Comm_Testing_BloodService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_Blood_AddService>().To<Chronic_disease_Comm_Testing_Blood_AddService>();
		
	        Kernel.Bind<IChronic_disease_PicturesService>().To<Chronic_disease_PicturesService>();
		
	        Kernel.Bind<IChronic_disease_Data_ResultsService>().To<Chronic_disease_Data_ResultsService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_UrineService>().To<Chronic_disease_Comm_Testing_UrineService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_Urine_AddService>().To<Chronic_disease_Comm_Testing_Urine_AddService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_FaecesService>().To<Chronic_disease_Comm_Testing_FaecesService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_SputumService>().To<Chronic_disease_Comm_Testing_SputumService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_CSFService>().To<Chronic_disease_Comm_Testing_CSFService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_CSFAddService>().To<Chronic_disease_Comm_Testing_CSFAddService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_SCEService>().To<Chronic_disease_Comm_Testing_SCEService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_SCEAddService>().To<Chronic_disease_Comm_Testing_SCEAddService>();
		
	        Kernel.Bind<IChronic_disease_Comm_HumorProjectNamesService>().To<Chronic_disease_Comm_HumorProjectNamesService>();
		
	        Kernel.Bind<IChronic_disease_Comm_HumorAddService>().To<Chronic_disease_Comm_HumorAddService>();
		
	        Kernel.Bind<IChronic_disease_Comm_HumorService>().To<Chronic_disease_Comm_HumorService>();
		
	        Kernel.Bind<IChronic_disease_Comm_HumorUnitService>().To<Chronic_disease_Comm_HumorUnitService>();
		
	        Kernel.Bind<IChronic_disease_Comm_HumorResultService>().To<Chronic_disease_Comm_HumorResultService>();
		
	        Kernel.Bind<IChronic_disease_Comm_HumorQuJianService>().To<Chronic_disease_Comm_HumorQuJianService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_BMCService>().To<Chronic_disease_Comm_Testing_BMCService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_BMCAddService>().To<Chronic_disease_Comm_Testing_BMCAddService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_GeneDetection_AddService>().To<Chronic_disease_Comm_Testing_GeneDetection_AddService>();
		
	        Kernel.Bind<IChronic_disease_Comm_Testing_GeneDetectionService>().To<Chronic_disease_Comm_Testing_GeneDetectionService>();
		
	        Kernel.Bind<IICD_9_oldService>().To<ICD_9_oldService>();
		
	        Kernel.Bind<IChronic_disease_Comm_OperationService>().To<Chronic_disease_Comm_OperationService>();
		
	        Kernel.Bind<IChronic_disease_Comm_OperationAddService>().To<Chronic_disease_Comm_OperationAddService>();
		
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_CTService>().To<Chronic_disease_Supplementary_Examination_CTService>();
		
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_XService>().To<Chronic_disease_Supplementary_Examination_XService>();
		
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_USService>().To<Chronic_disease_Supplementary_Examination_USService>();
		
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_StomachService>().To<Chronic_disease_Supplementary_Examination_StomachService>();
		
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_MRIService>().To<Chronic_disease_Supplementary_Examination_MRIService>();
		
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_HeartService>().To<Chronic_disease_Supplementary_Examination_HeartService>();
		
	        Kernel.Bind<IChronic_disease_Comm_LungProjectNamesService>().To<Chronic_disease_Comm_LungProjectNamesService>();
		
	        Kernel.Bind<IChronic_disease_Comm_LungQuJianService>().To<Chronic_disease_Comm_LungQuJianService>();
		
	        Kernel.Bind<IChronic_disease_Comm_LungSexQuJianService>().To<Chronic_disease_Comm_LungSexQuJianService>();
		
	        Kernel.Bind<IChronic_disease_Comm_LungTitleService>().To<Chronic_disease_Comm_LungTitleService>();
		
	        Kernel.Bind<IChronic_disease_Comm_LungUnitService>().To<Chronic_disease_Comm_LungUnitService>();
		
	        Kernel.Bind<IChronic_disease_Comm_LungService>().To<Chronic_disease_Comm_LungService>();
		
	        Kernel.Bind<IChronic_disease_Comm_LungAddService>().To<Chronic_disease_Comm_LungAddService>();
		
	        Kernel.Bind<ITestService>().To<TestService>();
        }
    }
}