import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren('items') liItems: QueryList<ElementRef>;

  color: string;
  clicked: boolean;

  public versions: { name: string }[];
  name = 'Angular';

  public constructor() {
    this.versions = Array.from({ length: 10 }).map((_, i) => {
      return { name: i.toString() };
    });
  }

  public versionView(i: { name: string }, indice: number, event) {
    if (this.clicked == false) {
      this.clicked = true;
      event.target.classList.add('cliccato');
    } else {
      this.clicked = false;
      event.target.classList.remove('cliccato')
    }
    console.log('clicked item: ', i);
    console.log(`${indice}, ${this.clicked}`);
  }

    public ngAfterViewInit() {
    const targetItem = 5;
    // If the item is the 10th element, click it.
    this.liItems.forEach((item, index) => {
      if (index === targetItem - 1) (item.nativeElement as HTMLElement).click();
    });
  }
}
