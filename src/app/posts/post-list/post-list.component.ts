import { Component, Input, OnInit } from "@angular/core";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'Fist Post', content: 'content for first post'},
  //   {title: 'Second Post', content: 'content for second post'},
  //   {title: 'Third Post', content: 'content for third post'},
  // ]
  // @Input() posts: Post[] = []
  posts: Post[] = []

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts()
  }
}
