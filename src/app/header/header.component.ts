import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, OnInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from '../nav-item';
import {NavService} from '../nav.service';
import {NavCategory} from '../nav-categories';
import {NavDropdownService} from '../nav-dropdown.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements AfterViewInit, OnInit {
  
  Categorydata:NavCategory[]=[];
  @ViewChild('appDrawer',{static:true}) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavCategory[]=[];
  Items: NavItem[] = [
    {
      displayName: 'SetUp',
      iconName: 'recent_actors',
      children: [
        {
          displayName: 'Companies',
          iconName: 'group',
          route: 'about'
        },
        {
          displayName: 'Business-Unit',
          iconName: 'speaker_notes',
          route: 'about'
        },
        {
          displayName: 'Role-Management',
          iconName: 'feedback',
          route: 'about'
        },
        {
          displayName: 'Users',
          iconName: 'feedback',
          route: 'about'
        },
        {
          displayName: 'Modules',
          iconName: 'feedback',
          route: 'about'
        }
      ]
    },
    {
      displayName: 'Accounts',
      iconName: 'videocam',
      children: [
        {
          displayName: 'Chart-Level',
          iconName: 'group',
          route: 'about'
        },
        {
          displayName: 'Chart-Of-Account',
          iconName: 'speaker_notes',
          route: 'about'
        },
        {
          displayName: 'Currencies',
          iconName: 'feedback',
          route: 'about'
        },
        {
          displayName: 'Voucher-Type',
          iconName: 'feedback',
          route: 'about'
        },
        {
          displayName: 'Voucher-Title',
          iconName: 'feedback',
          route: 'about'
        },
        {
          displayName: 'Nature of Account',
          iconName: 'feedback',
          route: 'about'
        }
      ]
    },
    
  ];

  constructor(private navService: NavService,private CateroriesService:NavDropdownService) {
  }

  ngOnInit(){
    
    this.CateroriesService.get_categories().subscribe((data: any) => {
      this.Categorydata = data;
      var num:number = 0;
      for(num=0;num<this.Categorydata.length;num++) {
          this.addItem(this.Categorydata[num]);         
      }
      console.log(this.navItems);
  });
 
  
} 
 
addItem(obj:NavCategory):void{
  var num:number = 5;
  var id:number=0;
  var mod:number=0;
  var div:number=0;
  var div2:number=0;
  var div3:number=0;
  id=obj.ID ;
  var round = Math.round;
  div=round(id/10000000);
  mod=id%100000;
  div2=round(mod/10000);
  mod=id%1000;
  console.log(div+" "+div2+" "+div3);
  var obje:NavCategory={
    ID:obj.ID,
    Category_Name:obj.Category_Name,
    Router_Name:obj.Router_Name,
  }
  if(div>0&&div2==0&&div3==0)
  {
     this.navItems.push(obje);
  }
  else{
    if(!this.navItems[div -1].children){
      this.navItems[div - 1].children = [];
    }
    this.navItems[div-1].children.push(obje);    
    
  }
};

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
