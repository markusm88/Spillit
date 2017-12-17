import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

export interface gamecode { code: string; }

@Component({
  selector: 'app-gamecode',
  templateUrl: './gamecode.component.html',
  styleUrls: ['./gamecode.component.scss']
})
export class GamecodeComponent implements OnInit {

    /* Test FB connections - delete when done */
    private gamecodeDoc: AngularFirestoreDocument<gamecode>;
    gamecode: Observable<gamecode>;
    constructor(private afs: AngularFirestore) {
      this.gamecodeDoc = afs.doc<gamecode>('gamecodes/1');
      this.gamecode = this.gamecodeDoc.valueChanges();
    }

  ngOnInit() {
  }

}