﻿using AutoMapper;
 
using RubricasAPI.DTOs;
using RubricasAPI.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RubricasAPI.Utilidades
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Rubrica, RubricaDTO>().ReverseMap();
            CreateMap<RubricaCreacionDTO,Rubrica>();
        }
    }
}

