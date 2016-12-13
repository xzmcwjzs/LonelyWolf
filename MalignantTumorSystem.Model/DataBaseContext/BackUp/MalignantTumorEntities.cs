using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.Mapping;

namespace MalignantTumorSystem.Model.DataBaseContext.BackUp
{
    public partial class MalignantTumorEntities:DbContext
    {
        public MalignantTumorEntities()
            : base("name=MalignantTumorEntities")
        {
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            //注册实体的约定配置规则
            modelBuilder.Configurations.Add(new Comm_Platform_WorkerMap());
            modelBuilder.Configurations.Add(new MT_RoleInfoMap());
            modelBuilder.Configurations.Add(new MT_WorkerRoleInfoMap());
            modelBuilder.Configurations.Add(new Share_ProvinceMap());
            modelBuilder.Configurations.Add(new Share_CityMap());
            modelBuilder.Configurations.Add(new Share_CountyMap());
            modelBuilder.Configurations.Add(new Share_StreetMap());
            modelBuilder.Configurations.Add(new Share_CommunityInfoMap());
            modelBuilder.Configurations.Add(new Comm_TumourMap());
            modelBuilder.Configurations.Add(new Comm_ResidentFileMap());
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_DiseaseMap());
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_SurgeryMap());
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_TraumaMap());
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_Blood_TransfusionMap());
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_Family_DiseaseMap());
            modelBuilder.Configurations.Add(new Chronic_disease_SmokeAndDrinkMap());
            modelBuilder.Configurations.Add(new Comm_EHR_AbstractMap());
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Change_AddressMap());
            modelBuilder.Configurations.Add(new Share_DataDictionaryMap());
            modelBuilder.Configurations.Add(new Chronic_disease_Diabetes_familyMap());
            modelBuilder.Configurations.Add(new Chronic_disease_Diabetes_family_relationMap());
            modelBuilder.Configurations.Add(new Chronic_disease_DailyLifeMap());
            modelBuilder.Configurations.Add(new Chronic_disease_PhysicalExerciseMap());
            modelBuilder.Configurations.Add(new Chronic_disease_PhysicalExercise_AddMap());
            modelBuilder.Configurations.Add(new ICD_10_oldMap());
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicineMap());
            modelBuilder.Configurations.Add(new Chronic_disease_Data_DiseaseNameMap());
            modelBuilder.Configurations.Add(new Chronic_disease_OutpatientMap());
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_DiagnosticMap());
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicationMap());

        } 
        public DbSet<Comm_Platform_Worker> Comm_Platform_Worker { get; set; }
        public DbSet<MT_RoleInfo> MT_RoleInfo { get; set; }
        public DbSet<MT_WorkerRoleInfo> MT_WorkerRoleInfo { get; set; }
        public DbSet<Share_Province> Share_Province { get; set; }
        public DbSet<Share_City> Share_City { get; set; }
        public DbSet<Share_County> Share_County { get; set; }
        public DbSet<Share_Street> Share_Street { get; set; }
        public DbSet<Share_CommunityInfo> Share_CommunityInfo { get; set; }
        public DbSet<Comm_Tumour> Comm_Tumour { get; set; }
        public DbSet<Comm_ResidentFile> Comm_ResidentFile { get; set; }
        public DbSet<Comm_ResidentFile_Followup_Disease> Comm_ResidentFile_Followup_Disease { get; set; }
        public DbSet<Comm_ResidentFile_Followup_Surgery> Comm_ResidentFile_Followup_Surgery { get; set; }
        public DbSet<Comm_ResidentFile_Followup_Trauma> Comm_ResidentFile_Followup_Trauma { get; set; }
        public DbSet<Comm_ResidentFile_Followup_Blood_Transfusion> Comm_ResidentFile_Followup_Blood_Transfusion { get; set; }
        public DbSet<Comm_ResidentFile_Followup_Family_Disease> Comm_ResidentFile_Followup_Family_Disease { get; set; }
        public DbSet<Chronic_disease_SmokeAndDrink> Chronic_disease_SmokeAndDrink { get; set; }
        public DbSet<Comm_EHR_Abstract> Comm_EHR_Abstract { get; set; }
        public DbSet<Comm_ResidentFile_Change_Address> Comm_ResidentFile_Change_Address { get; set; }
        public DbSet<Share_DataDictionary> Share_DataDictionary { get; set; }
        public DbSet<Chronic_disease_Diabetes_family> Chronic_disease_Diabetes_family { get; set; }
        public DbSet<Chronic_disease_Diabetes_family_relation> Chronic_disease_Diabetes_family_relation { get; set; }
        public DbSet<Chronic_disease_DailyLife> Chronic_disease_DailyLife { get; set; }
        public DbSet<Chronic_disease_PhysicalExercise> Chronic_disease_PhysicalExercise { get; set; }
        public DbSet<Chronic_disease_PhysicalExercise_Add> Chronic_disease_PhysicalExercise_Add { get; set; }
        public DbSet<ICD_10_old> ICD_10_old { get; set; }
        public DbSet<Chronic_disease_Comm_Medicine> Chronic_disease_Comm_Medicine { get; set; }
        public DbSet<Chronic_disease_Data_DiseaseName> Chronic_disease_Data_DiseaseName { get; set; }
        public DbSet<Chronic_disease_Comm_Diagnostic> Chronic_disease_Comm_Diagnostic { get; set; }
        public DbSet<Chronic_disease_Outpatient> Chronic_disease_Outpatient { get; set; }
        public DbSet<Chronic_disease_Comm_Medication> Chronic_disease_Comm_Medication { get; set; }

    }
}
