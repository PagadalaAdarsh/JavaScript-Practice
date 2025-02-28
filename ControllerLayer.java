package com.cal.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

//Controller acts as bridge bt the user and the bussinness logic.handles http requests and direct users to right pages

@Controller
public class ControllerLayer {
	
	@Autowired
	ServiceLayer sc;
	
	@RequestMapping("/")
	public String home() {
		return "home";
	}
	
	// Process the calculation and redirect to result.html page and 
	@PostMapping("/calculate")
	public String calculateMethod(@RequestParam("num1") double n1, @RequestParam("num2") double n2, @RequestParam("operation") String operation, Model model) {
		
		double result=0;
		switch (operation) {
		case "add":
			result=sc.add(n1,n2);
			break;
			
		case "sub":
			result=sc.subtract(n1,n2);
			break;
			
		case "mul":
			result=sc.multiply(n1,n2);
			break;
		
		case "div":
			if (n2 != 0) {
				result=sc.divide(n1,n2);
			} else {
				model.addAttribute("error", "Division by zero is not allowed.");
				model.addAttribute("num1",n1);
				model.addAttribute("num2",n2);
				return "result";
				
			}
			break;
			
		case "mod":
			result=sc.modulus(n1, n2);
			break;
			
			default:
				model.addAttribute("error", "Invalid operation.");
				return "result";
		}
		
		model.addAttribute("num1",n1);
		model.addAttribute("num2",n2);
		model.addAttribute("operation",operation);
		model.addAttribute("result", result);
		return "result";
	}
}
