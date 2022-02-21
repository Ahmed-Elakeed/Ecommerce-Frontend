import { Component, OnInit } from '@angular/core';
import {TagName} from "../../models/TagName";
import {TagNameService} from "../../services/tag-name.service";

@Component({
  selector: 'app-tag-name',
  templateUrl: './tag-name.component.html',
  styleUrls: ['./tag-name.component.css']
})
export class TagNameComponent implements OnInit {
  tagNames:TagName[];
  tagName:TagName=new TagName();
  filters={
    keyword:''
  }
  constructor(private tagNameService:TagNameService) { }

  getAllTagNames():void{
    this.tagNameService.getAllTagNames().subscribe(
      (data)=>{
        this.tagNames=data;
      }
    )
  }
  ngOnInit(): void {
    this.getAllTagNames();
  }

  deleteTagNameById(tagNameId: number) {
    this.tagNameService.deleteTagNameById(tagNameId).subscribe(
      ()=>{
        this.getAllTagNames();
      }
    )
  }

  getTagNameById(tagNameId: number):void {
    this.tagNameService.getTagNameById(tagNameId).subscribe(
      data=>this.tagName=data
    )
  }

  saveTagName():void {
    this.tagNameService.saveTagName(this.tagName).subscribe(
      ()=>{
        this.tagName=new TagName();
        this.getAllTagNames();
      }
    )
  }
  filter(){
    this.tagNameService.getAllTagNames().subscribe(
      data=>this.tagNames=this.filterTagNames(data)
    )
  }

  private filterTagNames(data: TagName[]) {
    return data.filter((t)=>{
      return t.tagName.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }
}
