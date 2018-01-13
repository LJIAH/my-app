import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  people = [];

  constructor(private logger: LoggingService, private dataService: DataService) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   // 处理对应的数据
    //   (data) => this.people = data
    // );
    this.fbGetData();
  }

  // 连接数据库并添加数据
  fbGetData() {
    // localhost: 4200/directory
    firebase.database().ref('/').on('child_added', (snapshot) => {
      // console.log(snapshot.val());
      this.people.push(snapshot.val());
    });
  }
  // 向数据库传输数据
  fbPostData(name, color, phone) {
    firebase.database().ref('/')
      .push({name: name, color: color, phone: phone});
  }

}
