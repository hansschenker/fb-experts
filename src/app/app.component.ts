import { Component } from "@angular/core";

@Component({
  selector: "hs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  pages = [
    { url: "home", title: "Home" },
    {
      url: "/experts",
      title: "Experts",
      children: [
        { url: "/experts/list", title: "List" },
        { url: "/experts/add", title: "Add a Expert" }
      ]
    }
  ];
  title = "Firebase Experts";
}
