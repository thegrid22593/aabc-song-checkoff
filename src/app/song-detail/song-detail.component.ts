import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})


export class SongDetailComponent implements OnChanges {

  @Input() activeSong;
  @Input() detailPanelCollapsed;

  public detailPanelImg: string = '../../images/detail-panel.jpg';

  constructor() {
    
  }

  ngOnInit() {
    console.log('Song Detail', this.activeSong);
    console.log(this.detailPanelCollapsed);
  }

  ngOnChanges() {
    console.log('change song', this.activeSong);
    console.log(this.detailPanelCollapsed);
  }

}
