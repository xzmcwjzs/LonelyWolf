using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MalignantTumorSystem.WebApplication.Common.Log
{
    public class Log4NetWriter : ILogWriter
    {


        public void WriteLogInfo(string txt)
        {
            ILog logWriter = log4net.LogManager.GetLogger("Tumor");
            logWriter.Error(txt);
        }
    }
}