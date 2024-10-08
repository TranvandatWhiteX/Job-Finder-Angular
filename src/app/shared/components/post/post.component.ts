import {Component, Input} from '@angular/core';
import {Post} from "../../models/post.model";
import {TagModule} from "primeng/tag";
import {Button} from "primeng/button";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    TagModule,
    Button
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post!: Post;
  @Input() width?: string;
}
