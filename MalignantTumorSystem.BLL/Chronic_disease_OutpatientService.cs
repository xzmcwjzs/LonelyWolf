﻿using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.BLL
{
    public partial class Chronic_disease_OutpatientService : BaseService<Chronic_disease_Outpatient>, IChronic_disease_OutpatientService
    {
        DbContext Db = DAL.DALFactory.DbContextFactory.CreateDbContext();
        public IQueryable<Chronic_disease_Outpatient> LoadSearchEntities(Model.SearchParam.MedicalHistory_OutpatientParam pam)
        {
            //var temp = CurrentDal.LoadEntityAsNoTracking(t => true);
            int start=(pam.PageIndex-1)*pam.PageSize+1;
            int end=pam.PageIndex*pam.PageSize;
            string sql = "select * from (select *,ROW_NUMBER() over (order by create_time) as num from Chronic_disease_Outpatient where outpatient_date in (select  MAX(outpatient_date) from Chronic_disease_Outpatient group by resident_id)";

            if (!string.IsNullOrEmpty(pam.idCard))
            {
                //身份证号不为空的情况下：只要输入身份证号，其他条件一律过滤掉，只以身份证号为准
                sql += "and id_card_number like '%"+pam.idCard+"%'";
                sql += ")as t where t.num>="+start+" and t.num<="+end+"";
            }
            else
            {
                sql += "and community_code like '%" + pam.region_code + "%'";
                if (!string.IsNullOrEmpty(pam.name))
                { 
                    sql += "and name like '%" + pam.name + "%'";
                }
                if (!string.IsNullOrEmpty(pam.sex))
                { 
                    sql += "and sex like '%" + pam.sex + "%'";
                }
                if (!string.IsNullOrEmpty(pam.txtBirthDateBegin) && !string.IsNullOrEmpty(pam.txtBirthDateEnd))
                {
                    DateTime birthDateBegin = Convert.ToDateTime(pam.txtBirthDateBegin);
                    DateTime birthDateEnd = Convert.ToDateTime(pam.txtBirthDateEnd);
                    sql += "and birth_date between '" + birthDateBegin + "' and '" + birthDateEnd + "'";
                }
                if (!string.IsNullOrEmpty(pam.address))
                {
                    sql += "and permanent_address like '%" + pam.address + "%'"; 
                }
                if (!string.IsNullOrEmpty(pam.outpatientstart) && !string.IsNullOrEmpty(pam.outpatientend))
                {
                    DateTime outpatientstart = Convert.ToDateTime(pam.outpatientstart);
                    DateTime outpatientend = Convert.ToDateTime(pam.outpatientend);
                    sql += "and outpatient_date between '" + outpatientstart + "' and '" + outpatientend + "'"; 
                }
                sql += ")as t where t.num>=" + start + " and t.num<=" + end + "";
                 
            }
            string sql2 = "select count(*) from  Chronic_disease_Outpatient where outpatient_date in (select  MAX(outpatient_date) from Chronic_disease_Outpatient group by resident_id)";
            var totalCount = Db.Database.SqlQuery<int>(sql2).FirstOrDefault();
            pam.TotalCount = totalCount;
            var temp = CurrentDal.LoadEntityBySql(sql);
           return temp;
        }

    }  
}
