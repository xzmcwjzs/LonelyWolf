using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.BLL;

namespace MalignantTumorSystem.WebApplication.Ninject.BackUp
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
            Kernel.Bind<IComm_Platform_WorkerService>().To<Comm_Platform_WorkerService>();
            Kernel.Bind<IMT_RoleInfoService>().To<MT_RoleInfoService>();
            Kernel.Bind<IMT_WorkerRoleInfoService>().To<MT_WorkerRoleInfoService>();
            Kernel.Bind<IShare_ProvinceService>().To<Share_ProvinceService>();
            Kernel.Bind<IShare_CityService>().To<Share_CityService>();
            Kernel.Bind<IShare_CountyService>().To<Share_CountyService>();
            Kernel.Bind<IShare_StreetService>().To<Share_StreetService>();
            Kernel.Bind<IShare_CommunityInfoService>().To<Share_CommunityInfoService>();
            Kernel.Bind<IBasicInformationService>().To<BasicInformationService>();
            Kernel.Bind<IComm_ResidentFileService>().To<Comm_ResidentFileService>();
            Kernel.Bind<IComm_ResidentFile_Followup_DiseaseService>().To<Comm_ResidentFile_Followup_DiseaseService>();
            Kernel.Bind<IChronic_disease_SmokeAndDrinkService>().To<Chronic_disease_SmokeAndDrinkService>();
            Kernel.Bind<IComm_ResidentFile_Followup_SurgeryService>().To<Comm_ResidentFile_Followup_SurgeryService>();
            Kernel.Bind<IComm_ResidentFile_Followup_TraumaService>().To<Comm_ResidentFile_Followup_TraumaService>();
            Kernel.Bind<IComm_ResidentFile_Followup_Blood_TransfusionService>().To<Comm_ResidentFile_Followup_Blood_TransfusionService>();
            Kernel.Bind<IComm_ResidentFile_Followup_Family_DiseaseService>().To<Comm_ResidentFile_Followup_Family_DiseaseService>();
            Kernel.Bind<IComm_EHR_AbstractService>().To<Comm_EHR_AbstractService>();
            Kernel.Bind<IComm_TumourService>().To<Comm_TumourService>();
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
        }
    }
}