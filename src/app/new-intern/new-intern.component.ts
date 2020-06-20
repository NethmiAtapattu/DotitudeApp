import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Intern } from "../intern";

@Component({
  selector: "app-new-intern",
  templateUrl: "./new-intern.component.html",
  styleUrls: ["./new-intern.component.css"],
})
export class NewInternComponent implements OnInit {
  projects: string[] = ["Project1", "Project2", "Project3"];
  positions: string[] = [
    "Software Engineer",
    "Business Analyst",
    "Quality assurance",
  ];
  genders: string[] = ["Male", "Female"];
  internModel = new Intern("", "", "", "", "", "", "", "", "", "", "", "", "");
  email = new FormControl("", [Validators.required, Validators.email]);

  topics = ["Angular", "React", "Vue"];
  onSubmit() {
    console.log(this.internModel);
  }
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "Enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  constructor() {}

  ngOnInit() {}
}
