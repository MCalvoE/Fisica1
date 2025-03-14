﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Practica2Fisica1.Models;

namespace Practica2Fisica1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Ejercicio1()
        {
            return View();
        }

        public IActionResult Ejercicio2()
        {
            return View();
        }

        public IActionResult Ejercicio3()
        {
            return View();
        }

        public IActionResult Modelado1()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
