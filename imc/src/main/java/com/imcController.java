package com.projetoDevWeb.imc.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/imc")
public class ImcController {

    @GetMapping
    public String calcularIMC(@RequestParam double peso, @RequestParam double altura) {
        double imc = peso / (altura * altura);
        return String.format("Seu IMC é %.2f", imc);
    }
}
