import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private data: DataService) { }
  public deletePostBtn(postId: number) {
    this.data.deletePost(postId).subscribe(
      (result)=>{
        let index = this.posts[postId];
        this.posts.splice(index, 1);
      }
    )
  };
  ngOnInit() {
    this.data.getPosts().subscribe(
      (data)=>{
        this.posts = data;
      }
    );
  }

}
