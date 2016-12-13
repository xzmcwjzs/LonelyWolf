using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MalignantTumorSystem.WebApplication.Common.Log
{
    public class TextFileWriter:ILogWriter
    {
        public void WriteLogInfo(string txt)
        {
            string fileLogPath =System.AppDomain.CurrentDomain.BaseDirectory+ "Common\\Log\\";
            if (!Directory.Exists(fileLogPath)) {
                Directory.CreateDirectory(fileLogPath);
            }
            string fileName = DateTime.Now.ToString("yyyy-MM-dd") + ".txt";
            File.AppendAllText(fileLogPath+fileName, txt, System.Text.Encoding.Default);  
        }
    }
}