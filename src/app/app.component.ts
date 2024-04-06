import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule ,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit{
  title = 'trungkiendemo2';

  data = [
    {
      "name": "Frank Lampad",
      "role": "Team Lead",
      "location": "Rome",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv2jV5N8o10Hyl1R5_x4igzccu2NyHICLYRTjk3ggHw&s"
    },
    {
      "name": "Micheal Akerta",
      "role": "Backend",
      "location": "Rome",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjFJMhJp9L-mdD83II4DAfsOZBxZYLFgNMrfdtj7i3Q&s"
    },
    {
      "name": "Lionel Messi",
      "role": "Front End",
      "location": "Rome",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4O7vS97bcJg39Y0qA1FFyZdLvICRdzKeEa0Xq7L7ffw&s"
    },
    {
      "name": "Michael Suyama",
      "role": "Developer",
      "location": "Paris",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv2jV5N8o10Hyl1R5_x4igzccu2NyHICLYRTjk3ggHw&s"
    },
    {
      "name": "Margaret Peacock",
      "role": "Developer",
      "location": "Paris",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv2jV5N8o10Hyl1R5_x4igzccu2NyHICLYRTjk3ggHw&s"
    },
    {
      "name": "Robert King",
      "role": "Team Lead",
      "location": "Paris",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv2jV5N8o10Hyl1R5_x4igzccu2NyHICLYRTjk3ggHw&s"
    },
    {
      "name": "Cristiano Ronaldo",
      "role": "Developer",
      "location": "London",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv2jV5N8o10Hyl1R5_x4igzccu2NyHICLYRTjk3ggHw&s"
    },
    {
      "name": "Ivan Rakitic",
      "role": "Developer",
      "location": "London",
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv2jV5N8o10Hyl1R5_x4igzccu2NyHICLYRTjk3ggHw&s"
    },
  ]

  showData = this.data.filter(item => (
    item.location == "Rome"
  ));

  constructor() { }

  isDataEmpty(): boolean {
    return this.data.length === 0;
  }

  ngOnInit() {
    // Call the function to set default tab
    this.setDefaultTab();
  }

  openTab(evt: MouseEvent, tabName: string) {
    this.showData = this.data.filter(item => {
      console.log(item.location);
      const s = item.location.toLowerCase() == tabName.toLowerCase();
      return s;
    });


    // console.log(this.showData.length);
    // Declare variables
    let i: number;
    let tabcontent: HTMLCollectionOf<HTMLElement>;
    let tablinks: HTMLCollectionOf<HTMLElement>;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // // Show the current tab, and add an "active" class to the button that opened the tab
    (document.getElementById(tabName)! as HTMLElement).style.display = "block";
    (evt.currentTarget as HTMLElement).classList.add("active");
  }

  setDefaultTab() {
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen")!.click();
  }
}
