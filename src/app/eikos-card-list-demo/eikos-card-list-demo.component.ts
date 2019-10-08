import { Component, OnInit, Input } from "@angular/core";

const cardListData = require("../../assets/cardListData.json");

@Component({
  selector: "app-eikos-card-list-demo",
  templateUrl: "./eikos-card-list-demo.html",
  styleUrls: ["./eikos-card-list-demo.component.scss"]
})
export class EikosCardListDemoComponent implements OnInit {
  @Input() cardView = false;
  @Input() inverseLayout = false;

  data: any[] = cardListData;
  items: any[] = this.data["items"];
  selectedOrders = [];

  constructor() {}

  ngOnInit() {}

  alertItemSelected(item) {
    alert("clicked " + item.symbol);
  }

  logItemSelected(item) {
    console.log("clicked", item);
  }

  setHslColor(percent, start, end) {
    const s = start,
      e = end,
      a = percent / 100,
      b = (e - s) * a,
      c = b + start;

    // return a css hsl string
    return `hsla(${c}, 100%, 50%, 0.5)`;
  }
}
