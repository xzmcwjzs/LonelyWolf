﻿using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_PicturesMap : EntityTypeConfiguration<Chronic_disease_Pictures>
    {
        public Chronic_disease_PicturesMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            this.Property(t => t.src)
                .HasMaxLength(500);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Pictures");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.src).HasColumnName("src");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}

