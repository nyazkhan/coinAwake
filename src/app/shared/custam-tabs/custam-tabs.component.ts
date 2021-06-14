import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custam-tabs',
  templateUrl: './custam-tabs.component.html',
  styleUrls: ['./custam-tabs.component.scss'],
})
export class CustamTabsComponent implements OnInit, OnChanges {
  @Input() titles: any[];
  @Input() selectedTab: any;
  activeTab: string;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(@Inject(DOCUMENT) document) {


  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.activeTab = changes.selectedTab.currentValue.key || 'all'
    let i = this.titles.findIndex((ele) => ele == changes.selectedTab.currentValue)
    setTimeout((res) => {
      if (document.getElementById('' + i)) {
        document.getElementById('' + i).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })

      }

    }, 200)
  }
  ngOnInit() {
    console.log(this.titles);
    this.activeTab = this.selectedTab.key || 'all'
    // document.getElementById('1').scrollIntoView(true);

  }
  // segmentChanged(val){
  //   this.selectedTab =val.detail.value;
  //   this.newItemEvent.emit(val.detail.value)
  // }

  selectTab(val) {
    console.log(this.selectedTab);
    console.log(this.titles);
    this.selectedTab = val
    this.activeTab = this.selectedTab.key

    this.newItemEvent.emit(val)
  }

}
