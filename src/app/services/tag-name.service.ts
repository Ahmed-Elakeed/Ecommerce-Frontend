import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TagName} from "../models/TagName";

@Injectable({
  providedIn: 'root'
})
export class TagNameService {
  private url = 'http://localhost:8080/tagName';

  constructor(private http: HttpClient) {
  }

  getAllTagNames(): Observable<TagName[]> {
    return this.http.get<TagName[]>(`${this.url}`);
  }

  getTagNameById(id: number): Observable<TagName> {
    return this.http.get<TagName>(`${this.url}/${id}`);
  }

  saveTagName(tagName: TagName): Observable<TagName> {
    return this.http.post<TagName>(`${this.url}`, tagName);
  }

  updateTagName(id: number, tagName: TagName): Observable<TagName> {
    return this.http.put<TagName>(`${this.url}/${id}`, tagName);
  }

  deleteTagNameById(id: number): Observable<TagName> {
    return this.http.delete<TagName>(`${this.url}/${id}`);
  }
}
